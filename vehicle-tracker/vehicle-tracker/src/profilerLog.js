// Records every commit of a row so tests (and the console) can show
// exactly which components re-rendered.
export const profilerLog = [];
export function onRender(id, phase) {
  profilerLog.push({ id, phase });
  if (typeof window !== 'undefined' && window.__LOG_RENDERS__) {
    console.log(`[render] ${id} (${phase})`);
  }
}
export const clearProfilerLog = () => (profilerLog.length = 0);
