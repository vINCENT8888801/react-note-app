import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import JavascriptLayout from './layout/JavaScriptLayout';
import VariablePage from './pages/javascript/VariablePage';
import ClosurePage from './pages/javascript/ClosurePage';
import HomePage from './pages/HomePage';
import DestructuringPage from './pages/javascript/DestructuringPage';
import SpreadOperatorPage from './pages/javascript/SpreadOperator';
import ReactLayout from './layout/ReactLayout';
import HooksInfo from './pages/react/HooksInfo';
import UseStateTopic from './pages/react/UseStateTopic';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="javascript" element={<JavascriptLayout />}>
        <Route path="variable" element={<VariablePage />} />
        <Route path="closure" element={<ClosurePage />} />
        <Route path="destructuring" element={<DestructuringPage />} />
        <Route path="spreadOperator" element={<SpreadOperatorPage />} />
      </Route>
      <Route path="react" element={<ReactLayout />}>
        <Route path="hook" element={<HooksInfo />} />
        <Route path="useState" element={<UseStateTopic />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
