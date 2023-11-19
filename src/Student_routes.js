// // import { lazy } from "react";
// // import { Navigate } from "react-router-dom";

// // /****Layouts*****/
// // const FullLayout = lazy(() => import("./Student_dashboard/Student_FullLayout"));

// // /***** Pages ****/

// // const Starter = lazy(() => import("./Student_dashboard/Student_Starter"));
// // const About = lazy(() => import("./SharedComponents/About"));
// // const Alerts = lazy(() => import("./Student_dashboard/Student_Alerts"));
// // //const Badges = lazy(() => import("../views/ui/Badges"));
// // //const Buttons = lazy(() => import("../views/ui/Buttons"));
// // const Internships = lazy(() => import("./Student_dashboard/Student_Internships"));
// // const Competitions = lazy(() => import("./Student_dashboard/Student_Competitions"));
// // const InternTable = lazy(() => import("./Student_dashboard/Student_InternTable"));
// // const CompTable = lazy(() => import("./Student_dashboard/Student_CompTable"));
// // //const Forms = lazy(() => import("src/Admin_dashboard/Admin_Forms.js"));
// // //const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

// // /*****Routes******/

// // const ThemeRoutes = [
// //   {
// //     path: "/",
// //     element: <FullLayout />,
// //     children: [
// //       { path: "/", element: <Navigate to="/starter" /> },
// //       { path: "/starter", exact: true, element: <Starter /> },
// //       { path: "/about", exact: true, element: <About /> },
// //       { path: "/alerts", exact: true, element: <Alerts /> },
// //     //   { path: "/badges", exact: true, element: <Badges /> },
// //     //   { path: "/buttons", exact: true, element: <Buttons /> },
// //       { path: "/internships", exact: true, element: <Internships /> },
// //       { path: "/competitions", exact: true, element: <Competitions /> },
// //       { path: "/Itable", exact: true, element: <InternTable /> },
// //       { path: "/Ctable", exact: true, element: <CompTable /> },
// //     //  { path: "/forms", exact: true, element: <Forms /> },
// //     //   { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
// //     ],
// //   },
// // ];

// // export default ThemeRoutes;



// // Student_routes.js

// import { lazy } from "react";
// import { Navigate } from "react-router-dom";

// const FullLayout = lazy(() => import("./Student_dashboard/Student_FullLayout"));
// const Starter = lazy(() => import("./Student_dashboard/Student_Starter"));
// const About = lazy(() => import("./SharedComponents/About"));
// const Alerts = lazy(() => import("./Student_dashboard/Student_Alerts"));
// const Internships = lazy(() => import("./Student_dashboard/Student_Internships"));
// const Competitions = lazy(() => import("./Student_dashboard/Student_Competitions"));
// const InternTable = lazy(() => import("./Student_dashboard/Student_InternTable"));
// const CompTable = lazy(() => import("./Student_dashboard/Student_CompTable"));

// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Starter /> },
//       { path: "/starter", exact: true, element: <Starter /> },
//       { path: "/about", exact: true, element: <About /> },
//       { path: "/alerts", exact: true, element: <Alerts /> },
//       { path: "/internships", exact: true, element: <Internships /> },
//       { path: "/competitions", exact: true, element: <Competitions /> },
//       { path: "/Itable", exact: true, element: <InternTable /> },
//       { path: "/Ctable", exact: true, element: <CompTable /> },
//     ],
//   },
// ];

// export default ThemeRoutes;


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const FullLayout = lazy(() => import('./Student_dashboard/Student_FullLayout'));
const Starter = lazy(() => import('./Student_dashboard/Student_Starter'));
const About = lazy(() => import('./SharedComponents/About'));
const Alerts = lazy(() => import('./Student_dashboard/Student_Alerts'));
const Internships = lazy(() => import('./Student_dashboard/Student_Internships'));
const Competitions = lazy(() => import('./Student_dashboard/Student_Competitions'));
const InternTable = lazy(() => import('./Student_dashboard/Student_InternTable'));
const CompTable = lazy(() => import('./Student_dashboard/Student_CompTable'));

const ThemeRoutes = () => (
  <FullLayout>
    <Routes>
      <Route path="/" element={<Navigate to="/starter" />} />
      <Route path="/starter" element={<Starter />} />
      <Route path="/about" element={<About />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/Itable" element={<InternTable />} />
      <Route path="/Ctable" element={<CompTable />} />
    </Routes>
  </FullLayout>
);

export default ThemeRoutes;



