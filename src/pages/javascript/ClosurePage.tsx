import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';

export default function Dashboard() {

  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>React Onboarding Note</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="javascript">Javascript</NavLink>
          <NavLink to="react">React</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}