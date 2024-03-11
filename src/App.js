import Login from "./components/auth/login/loginAuth";
import Register from "./components/auth/register/registerAuth";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { AuthProvider } from "./Contexts/authContext/authContext";
import { useRoutes } from "react-router-dom";
import Three from './three';

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/landing",
      element: <Three />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Navbar />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;