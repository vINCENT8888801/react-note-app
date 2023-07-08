import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div className="root-layout">
      <ScrollRestoration />
          <h1>React Onboarding Note</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="javascript">Javascript</NavLink>
          <NavLink to="react">React</NavLink>
    </div>
  );
}


export default Dashboard