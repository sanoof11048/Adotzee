// ./pages/beta/ExploreLayout.tsx
import { Outlet } from "react-router-dom";
import StepHeader from "./components/StepHeader";
import BreadcrumbNav from "./components/BreadcrumbNav";

const ExploreLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-4">
        {/* Optional: Step header showing progress */}
        <StepHeader />

        {/* Breadcrumb navigation */}
        <BreadcrumbNav />

        {/* Nested route content */}
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ExploreLayout;
