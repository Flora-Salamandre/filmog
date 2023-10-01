import { createBrowserRouter } from "react-router-dom";
import { Home, homeLoader } from './pages';

export const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
    loader: homeLoader
}]);