import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import SuccessPage from "./pages/SuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  { path: "/success", element: <SuccessPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
