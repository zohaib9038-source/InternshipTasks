import { createRoot } from 'react-dom/client';
import App from './App';

window.__LOG_RENDERS__ = true; // see which rows re-render in the console
createRoot(document.getElementById('root')).render(<App />);
