// // import React, { Suspense } from "react";
// // import "./assets/scss/style.scss";
// // import ReactDOM from 'react-dom/client';
// // import App from './App.js';
// // import reportWebVitals from './reportWebVitals';
// // import { HashRouter } from "react-router-dom";
// // import Loader from "./layouts/loader/Loader";
// // import { Route, Navigate as Redirect, BrowserRouter as Router, Routes } from 'react-router-dom';
// // import AdminRoutes from './Admin_routes'; 
// // import AdminSignin from './SharedComponents/Admin_SignIn'; 
// // import AdminChangePasswd from './SharedComponents/Admin_ChangePasswd';



// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <Suspense fallback={<Loader />}>
// //     <HashRouter>
// //       <App />
// //     </HashRouter>
// //   </Suspense>
// // );

// // // // If you want to start measuring performance in your app, pass a function
// // // // to log results (for example: reportWebVitals(console.log))
// // // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //  reportWebVitals();

// // // src/routes/index.js



// // const AppRoutes = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Signin and Signup routes */}
// //         <Route path="/SharedComponents/Admin_SignIn" element={<AdminSignin />} />
// //         <Route path="/SharedComponents/Admin_ChangePasswd" element={<AdminChangePasswd />} />
// //         {/* <Route path="/student/signin" element={<StudentSignin />} />
// //         <Route path="/student/signup" element={<StudentSignup />} /> */}

// //         {/* Admin and Student portals */}
// //         <Route path="/routes/Admin_routes" element={<AdminRoutes />} />
// //         {/* <Route path="/student" element={<StudentRoutes />} /> */}

// //         {/* Default redirect */}
// //         <Route path="/" element={<Redirect to="/SharedComponents/Admin_ChangePasswd" />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRoutes;




// // src/index.js
// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
// import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
// import Loader from './layouts/loader/Loader';
// import { AuthProvider } from './AuthContext';
// import AdminSignin from './SharedComponents/Admin_SignIn';
// import AdminChangePasswd from './SharedComponents/Admin_ChangePasswd';
// import AdminRoutes from './Admin_routes';
// import StudentRoutes from "./Student_routes";
// import reportWebVitals from './reportWebVitals';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Signin and Signup routes */}
//       <Route path="/SharedComponents/Admin_SignIn" element={<AdminSignin />} />
//       <Route path="/SharedComponents/Admin_ChangePasswd" element={<AdminChangePasswd />} />

//       {/* Admin portal */}
//       <Route path="/admin" element={<AdminRoutes />} />

//       {/* Student portal */}
//       <Route path="/student" element={<StudentRoutes />} />

//       {/* Default redirect */}
//       <Route path="/" element={<Navigate to="/student" />} />
//     </Routes>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Suspense fallback={<Loader />}>
//     <HashRouter>
//       <AuthProvider>
//         <AppRoutes />
//       </AuthProvider>
//     </HashRouter>
//   </Suspense>
// );

// reportWebVitals();



// src/index.js
// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
// import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
// import Loader from './layouts/loader/Loader';
// import { AuthProvider } from './AuthContext';
// import AdminSignin from './SharedComponents/Admin_SignIn';
// import AdminChangePasswd from './SharedComponents/Admin_ChangePasswd';
// import AdminRoutes from './Admin_routes';
// import ThemeRoutes from './Student_routes';
// import reportWebVitals from './reportWebVitals';

// const AppRoutes = () => {
//   return (
//     <Routes>
//        {/* Signin and Signup routes */}
//        <Route path="/admin/signin" element={<AdminSignin />} />
//       <Route path="/admin/changepasswd" element={<AdminChangePasswd />} />

//       {/* Admin portal */}
//       <Route path="/admin" element={<AdminRoutes />} />

//       {/* Student portal */}
//       <Route path="/student" element={<ThemeRoutes />} />

//       {/* Default redirect */}
//       <Route path="/" element={<Navigate to="/student" />} />
//     </Routes>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Suspense fallback={<Loader />}>
//     <HashRouter>
//       <AuthProvider>
//         <AppRoutes />
//       </AuthProvider>
//     </HashRouter>
//   </Suspense>
// );

// reportWebVitals();


// // src/index.js
// import React, { Suspense } from 'react';
// //import ReactDOM from 'react-dom';
// import "./assets/scss/style.scss";
// import ReactDOM from 'react-dom/client'
// import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
// import Loader from './layouts/loader/Loader';
// import { AuthProvider } from './AuthContext';
// import AdminSignin from './SharedComponents/Admin_SignIn';
// import AdminChangePasswd from './SharedComponents/Admin_ChangePasswd';
// import AdminRoutes from './Admin_routes';
// import ThemeRoutes from './Student_routes';
// import reportWebVitals from './reportWebVitals';
// import App from './App';


// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/admin/signin" element={<AdminSignin />} />
//       <Route path="/admin/changepasswd" element={<AdminChangePasswd />} />
//       <Route path="/admin/*" element={<AdminRoutes />} />
//       <Route path="/student/*" element={<ThemeRoutes />} />
//       <Route path="/" element={<Navigate to="/student/starter" />} />
//     </Routes>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Suspense fallback={<Loader />}>
//     <HashRouter>
//       <AuthProvider>
//         <AppRoutes />
//       </AuthProvider>
//     </HashRouter>
//   </Suspense>
// );

// reportWebVitals();

// src/index.js
// index.js

// index.js
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Loader from './layouts/loader/Loader';
import { AuthProvider } from './AuthContext';
import AdminSignin from './SharedComponents/Admin_SignIn';
import AdminChangePasswd from './SharedComponents/Admin_ChangePasswd';
import ThemeRoutes from './Student_routes';
import reportWebVitals from './reportWebVitals';
import Starter from './Student_dashboard/Student_Starter';
import './assets/scss/style.scss';
import './assets/scss/_variables.scss';
import './assets/scss/layout/_container.scss';
import './assets/scss/layout/_sidebar.scss';
import AdminForm from './SharedComponents/Admin';


const root = createRoot(document.getElementById('root'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ThemeRoutes />} />
      <Route path="/admin/signin" element={<AdminSignin />} />
      <Route path="/admin/changepasswd" element={<AdminChangePasswd />} />
      {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
      <Route path="/student/*" element={<ThemeRoutes />} />
      <Route path="/admin" element={<AdminForm />} />
    </Routes>
  );
};

root.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </HashRouter>
  </Suspense>
);

reportWebVitals();
