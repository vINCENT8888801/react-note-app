import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import AppBarLinkModel from "../model/components/AppBarLinkModel.type";

const javaScriptPage: AppBarLinkModel[] = [{
  title: "Variable",
  link: "variable"
}, {
  title: "Closure",
  link: "closure"
}, {
  title: "Destructuring",
  link: "destructuring"
}, {
  title: "SpreadOperator",
  link: "spreadOperator"
}];

const JavascriptLayout = () => {
  return (
    <>
      <SideBar topics={javaScriptPage} />
      <div className="flex-auto">
        <Outlet />
      </div>
    </>
  )
}

export default JavascriptLayout;