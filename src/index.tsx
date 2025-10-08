import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import { App } from '@/app'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)