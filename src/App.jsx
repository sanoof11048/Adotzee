import "virtual:uno.css";
import "./App.css";
import 'react-confirm-alert/src/react-confirm-alert.css';


import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./Context/courseData";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import LinearLoading from "./components/common/LinearLoading";

import NotFoundPage from "./pages/404/404";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import TawkToChat from "./components/contact/TawkToWidget ";
const Dashboard = lazy(() => import('./Admin/components/Dashboard/Dashboard'));

import CourseManagement from "./Admin/components/Courses/CourseManagement";
import CollegeManagement from "./Admin/components/Colleges/CollegeManagement";
import AddonManagement from "./Admin/components/Addons/AddonManagement";
import { HostelProvider } from "./Context/HostelContext";
import { Toaster } from "react-hot-toast";
import CourseSelectionUI from "./pages/CourseSelectionUI";
import CourseBrowserApp from "./pages/CourseBrowserApp";

// Lazy imports for hostel pages
const HostelList = lazy(() => import("./pages/hostels/HostelList"));
const HostelDetails = lazy(() => import("./pages/hostels/HostelDetails"));

config.autoAddCss = false;

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Science = lazy(() => import("./pages/streams/Science"));
const Commerce = lazy(() => import("./pages/streams/Commerce"));
const Humanities = lazy(() => import("./pages/streams/Humanities"));
const CollegeList = lazy(() => import("./pages/streams/CollegeList"));
const Admission = lazy(() => import("./pages/Admission"));
const AdminLayout = lazy(() => import("./Admin/AdminLayout")); // ← new layout

ReactGA.initialize("G-ZT2XPNZF9Q");
ReactGA.send("pageview");

function App() {
  return (
    <HelmetProvider>
      <CourseProvider>
        <HostelProvider>
          <Suspense fallback={<LinearLoading />}>
            <TawkToChat /> {/* ← Place it here, not inside Routes */}

            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/science" element={<Science />} />
              <Route path="/commerce" element={<Commerce />} />
              <Route path="/humanities" element={<Humanities />} />
              <Route path="/college/:addonName" element={<CollegeList />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/sample" element={<CourseSelectionUI />} />
              <Route path="/sam" element={<CourseBrowserApp />} />

              {/* Hostel Routes */}
              <Route path="/hostels" element={<HostelList />} />
              <Route path="/hostels/:id" element={<HostelDetails />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="courses" element={<CourseManagement />} />
                <Route path="colleges" element={<CollegeManagement />} />
                <Route path="addons" element={<AddonManagement />} />
              </Route>

              {/* Catch-All */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Toaster position="top-right"/>
        </HostelProvider>
      </CourseProvider>
    </HelmetProvider>
  );
}


export default App;
