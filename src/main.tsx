import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const mockWorker = async () => {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./shared/api/mocks/worker.ts");
    await worker.start();
  }
}

mockWorker().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})


