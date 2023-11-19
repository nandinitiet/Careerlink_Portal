// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";

// const App = () => {
//   const routing = useRoutes(Themeroutes);

//   return <div className="dark">{routing}</div>;
// };

// export default App;

import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import { useRoutes } from 'react-router-dom';
import AdminRoutes from './Admin_routes';
import StudentRoutes from './Student_routes';
import Login from './SharedComponents/Admin_SignIn';


const useConditionalRoutes = () => {
  const { isAdmin } = useAuth();
  return isAdmin ? AdminRoutes : StudentRoutes;
};

const App = () => {
  const conditionalRoutes = useConditionalRoutes();
  const routing = useRoutes(conditionalRoutes);

  return (
    <AuthProvider>
      <div className="dark">{routing}</div>
    </AuthProvider>
  );
};

export default App;


// import React from 'react';
// import Routes from './routes/Router';

// function App() {
//   return (
//     <div className="App">
//       <Routes />
//     </div>
//   );
// }

// export default App;
