import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Creae from "./pages/Creae";


const router = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
                {index: true, element: <Home/>},
                {path: 'blogs', element: <Blogs/>},
                {path: 'creae', element: <Creae/>},
            
        ]
    }
])

export default router