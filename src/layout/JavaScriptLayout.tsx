import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

const JavascriptLayout = () => {
  return (
    <div className="careers-layout">
      <h2>JavaScript</h2>
        <NavLink to="variable">Variable</NavLink>
        <NavLink to="closure">Closure</NavLink>
        <NavLink to="destructuring">Destructuring</NavLink>
        <NavLink to="spreadOperator">SpreadOperator</NavLink>
      <Outlet />
    </div>
  )
}

export default JavascriptLayout;