import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import LinearLoading from "./components/common/LinearLoading";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Toaster } from "react-hot-toast";
import "./App.css";

import CourseManagement from "./Admin/components/Courses/CourseManagement";
import CollegeManagement from "./Admin/components/Colleges/CollegeManagement";
import AddonManagement from "./Admin/components/Addons/AddonManagement";

// New Explore Flow Pages
import TypePage from "./pages/beta/pages/TypePage";
import StreamPage from "./pages/beta/pages/StreamPage";
import CoursePage from "./pages/beta/pages/CoursePage";
import AddonPage from "./pages/beta/pages/AddonPage";
import CollegePage from "./pages/beta/pages/CollegePage";
import ExploreLayout from "./pages/beta/ExploreLayout";
import { CourseFinderProvider } from "./pages/beta/hooks/CourseFinderContext";
import { CourseProvider } from "./Context/courseData";
import NotFoundPage from "./pages/404/404";
import CollegeList from "./pages/streams/CollegeList";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Science = lazy(() => import("./pages/streams/Science"));
const Commerce = lazy(() => import("./pages/streams/Commerce"));
const Humanities = lazy(() => import("./pages/streams/Humanities"));
const Admission = lazy(() => import("./pages/Admission"));
const AdminLayout = lazy(() => import("./Admin/AdminLayout"));
const Dashboard = lazy(() => import("./Admin/components/Dashboard/Dashboard"));

config.autoAddCss = false;

ReactGA.initialize("G-ZT2XPNZF9Q");
ReactGA.send("pageview");

function App() {
  return (
    <HelmetProvider>
      <CourseFinderProvider>
        <CourseProvider>
            <Suspense fallback={<LinearLoading />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/science" element={<Science />} />
                <Route path="/commerce" element={<Commerce />} />
                <Route path="/humanities" element={<Humanities />} />
                <Route path="/college/:addonName" element={<CollegeList />} />
                <Route path="/admission" element={<Admission />} />

                {/* 🔥   New Explore Flow */}
                <Route path="/explore/*" element={<ExploreLayout />}>
                  <Route index element={<TypePage />} />
                  <Route path=":type" element={<StreamPage />} />
                  <Route path=":type/:stream" element={<CoursePage />} />
                  <Route path=":type/:stream/:course" element={<AddonPage />} />
                  <Route path=":type/:stream/:course/:addon/colleges" element={<CollegePage />} />
                </Route>

                {/* Admin Routes */}
                <Route path="/admin/*" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="courses" element={<CourseManagement />} />
                  <Route path="colleges" element={<CollegeManagement />} />
                  <Route path="addons" element={<AddonManagement />} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>

            <Toaster position="top-right" />
        </CourseProvider>
      </CourseFinderProvider>
    </HelmetProvider>
  );
}

export default App;
