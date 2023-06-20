import { Breadcrumbs } from "@mui/material"
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"

const VariablePage = () => {
  return (
    <>
        <div className="root-layout">
        <ScrollRestoration />
        <header>
            <nav>
            <h1>React Onboarding Note</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="javascript">Javascript</NavLink>
            <NavLink to="react">React</NavLink>
            </nav>
            <Breadcrumbs />
        </header>
        <main>
            <Outlet />
        </main>
        </div>
    </>
  )
}

export default VariablePage;