import { Link, createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/connexion",
        element: <App />,
    },
]);

export { router };