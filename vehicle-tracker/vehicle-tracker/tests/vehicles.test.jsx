import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { Server } from 'mock-socket';
import { VehicleProvider } from '../src/VehicleContext';
import VehicleList from '../src/VehicleList';
import { createVehicleStore, makeVehicles } from '../src/store';
import { connectVehicleSocket } from '../src/socketClient';
import { startMockServer } from '../src/mockServer';
import { profilerLog, clearProfilerLog } from '../src/profilerLog';

const URL = 'ws://test:1234';
let cleanup = [];
afterEach(() => {
  cleanup.forEach((fn) => fn());
  cleanup = [];
  vi.useRealTimers();
});

function setup() {
  const store = createVehicleStore(makeVehicles(10));
  const server = new Server(URL);
  const ws = connectVehicleSocket(URL, store);
  cleanup.push(() => { ws.close(); server.stop(); });
  render(
    <VehicleProvider store={store}>
      <VehicleList />
    </VehicleProvider>
  );
  return { store, server };
}

const wait = (ms = 50) => act(() => new Promise((r) => setTimeout(r, ms)));

describe('live vehicle updates', () => {
  it('updates the coordinates in the DOM when a message arrives', async () => {
    const { server } = setup();
    await wait();
    server.emit('message', JSON.stringify({ id: 3, lat: 11.11111, lng: 22.22222 }));
    await wait();
    expect(screen.getByTestId('coords-3')).toHaveTextContent('11.11111, 22.22222');
  });

  it('re-renders ONLY the affected row (Profiler)', async () => {
    const { server } = setup();
    await wait();
    clearProfilerLog();
    server.emit('message', JSON.stringify({ id: 5, lat: 1.5, lng: 2.5 }));
    await wait();
    const renderedIds = [...new Set(profilerLog.map((e) => e.id))];
    expect(renderedIds).toEqual(['row-5']);
  });

  it('keeps filter state and scroll position when updates arrive', async () => {
    const { server } = setup();
    await wait();
    fireEvent.change(screen.getByPlaceholderText('Filter vehicles...'), { target: { value: 'Vehicle 1' } });
    const list = screen.getByTestId('list');
    list.scrollTop = 120;
    act(() => { server.emit('message', JSON.stringify({ id: 1, lat: 9.9, lng: 8.8 })); });
    await wait();
    expect(screen.getByPlaceholderText('Filter vehicles...')).toHaveValue('Vehicle 1');
    expect(screen.getByTestId('list')).toBe(list); // same DOM node, not remounted
    expect(list.scrollTop).toBe(120);
  });

  it('mock server emits an update every 5 seconds', () => {
    vi.useFakeTimers();
    const mock = startMockServer('ws://timer:1', [1, 2, 3], 5000);
    const spy = vi.spyOn(mock.server, 'emit');
    cleanup.push(() => mock.stop());
    vi.advanceTimersByTime(4999);
    expect(spy).toHaveBeenCalledTimes(0);
    vi.advanceTimersByTime(1);
    expect(spy).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(10000);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
