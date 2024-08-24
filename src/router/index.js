import { useRoutes } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(() => import(/*webpackChunkName:"home" */"../views/home/home"))
const Login = lazy(() => import(/*webpackChunkName:"login" */"../views/login/login"))
const Sift = lazy(() => import(/*webpackChunkName:"login" */"../views/sift/sift"))

function GenerateRoutes() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/sift",
            element: <Sift />
        },

    ])


    return routes
}
export default GenerateRoutes