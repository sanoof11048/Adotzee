// ./pages/beta/ExploreLayout.tsx
import { Outlet } from "react-router-dom";
import StepHeader from "./components/StepHeader";
import BreadcrumbNav from "./components/BreadcrumbNav";
import Navbar from "../../components/common/Navbar";
import Back from "../../components/common/Back";

const ExploreLayout = () => {
  return (<>
    <Back />
    <Navbar />

    <div className="flex">
      <div className="flex-1 p-4">

        <StepHeader />

        {/* Breadcrumb navigation */}
        <BreadcrumbNav />

        {/* Nested route content */}
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  </>
  );
};

export default ExploreLayout;
