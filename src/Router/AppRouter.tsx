import { Routes, Route } from "react-router-dom";
import routes from "./routes";

export default function AppRouter() {
  return( 
    <Routes>
    {routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            element = {<route.component/>}
        />
    ))}
    </Routes>
  )
}
