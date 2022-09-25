import Generic from "../pages/Generic";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";
import Signin from "../pages/Signin";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/",
    hidden: false,
    Element: <HomePage />,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <PropertiesPage />,
    hidden: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    hidden: false,
  },
  {
    id: 4,
    title: "signin",
    path: "/signin",
    Element: <Signin />,
    hidden: true,
  },
];
