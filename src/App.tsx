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
import UseEffectTopic from './pages/react/UseEffectTopic';
import UseRefTopic from './pages/react/UseRefTopic';
import UseContextTopic from './pages/react/UseContextTopic';
import { HeaderSizeProvider } from './hooks/HeaderSizeContext';
import UseReducerTopic from './pages/react/UseReducerTopic';



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
        <Route path="useEffect" element={<UseEffectTopic />} />
        <Route path="useRef" element={<UseRefTopic />} />
        <Route path="useContext" element={<UseContextTopic />} />
        <Route path="useReducer" element={<UseReducerTopic />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <HeaderSizeProvider>
        <RouterProvider router={router} />
      </HeaderSizeProvider>
    </>
  );
}

export default App;
