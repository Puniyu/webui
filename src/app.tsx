import {type FC, lazy} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {BASE_ROUTE} from '@/router'

const HomePage = lazy(() => import('@/pages/home'))
const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(
    [
        {
            path: BASE_ROUTE,
            element: <HomePage/>,
        },
    ],
    {basename: BASE_ROUTE},
)

export const App: FC = () => <RouterProvider router={router}/>