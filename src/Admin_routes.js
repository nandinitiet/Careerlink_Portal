import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import AdminFullLayout from './Admin_FullLayout';
// import AdminStarter from './Admin_dashboard/Admin_Starter';
//import About from '../SharedComponents/About';
// import AdminForms from './Admin_dashboard/Admin_Forms';

/****Layouts*****/
const FullLayout = lazy(() => import("./Admin_FullLayout"));

/***** Pages ****/

const Starter = lazy(() => import("./Admin_dashboard/Admin_Starter"));
const About = lazy(() => import("./SharedComponents/About"));
//const Alerts = lazy(() => import("../views/ui/Alerts"));
//const Badges = lazy(() => import("../views/ui/Badges"));
//const Buttons = lazy(() => import("../views/ui/Buttons"));
//const Internships = lazy(() => import("../views/ui/Internships.js"));
//const Competitions = lazy(() => import("../views/ui/Competitions.js"));
//const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("./Admin_dashboard/Admin_Forms.js"));
//const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
    //   { path: "/alerts", exact: true, element: <Alerts /> },
    //   { path: "/badges", exact: true, element: <Badges /> },
    //   { path: "/buttons", exact: true, element: <Buttons /> },
    //   { path: "/internships", exact: true, element: <Internships /> },
    //   { path: "/competitions", exact: true, element: <Competitions /> },
    //   { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
    //   { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;

