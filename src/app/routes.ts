import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Campaigns } from "./pages/campaigns";
import { Services } from "./pages/services";
import { Industries } from "./pages/industries";
import { Process } from "./pages/process";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Root } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "campaigns", Component: Campaigns },
      { path: "services", Component: Services },
      { path: "industries", Component: Industries },
      { path: "process", Component: Process },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);