import { type FC, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BASE_ROUTE, DashBoard_ROUTE, LOGIN_ROUTE } from "@/router";

const HomePage = lazy(() => import("@/pages/home"));
const LoginPage = lazy(() => import("@/pages/login"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));



const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(
	[
		{
			path: BASE_ROUTE,
			element: <HomePage />,
			index: true,
		},
		{
			path: LOGIN_ROUTE,
			element: <LoginPage />,
		},
		{
			path: DashBoard_ROUTE,
			element: <DashboardPage />,
		}
	],
	{ basename: BASE_ROUTE },
);



export const App: FC = () => <RouterProvider router={router} />;
