import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import App from '@/app'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
)