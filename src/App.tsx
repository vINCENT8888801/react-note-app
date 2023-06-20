import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import JavascriptLayout from './layout/JavaScriptLayout';
import VariablePage from './pages/javascript/VariablePage';
import ClosurePage from './pages/javascript/ClosurePage';
import HomePage from './pages/HomePage';
import DeconstructuringPage from './pages/javascript/DestructuringPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="javascript" element={<JavascriptLayout />}>
        <Route path="variable" element={<VariablePage />} />
        <Route path="closure" element={<ClosurePage />} />
        <Route path="deconstructuring" element={<DeconstructuringPage />} />
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
