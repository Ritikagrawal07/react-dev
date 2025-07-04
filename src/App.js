import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import About from "./components/About.jsx"
import { createBrowserRouter , RouterProvider } from "react-router-dom";



const AppLayout = () =>{
    return(
    <div className="App">
        <Header/>
        <Body/>
    </div>
)
}

const appRouter = createBrowserRouter([
    {path: "/",
        element: <AppLayout/>

    },
    {
        path: "/about",
        element: <About/>,

    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);











