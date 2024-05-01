import { RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { router } from "./router";
import { AuthProvider } from "./context/Auth/AuthProvider";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}>
          <HomePage />
        </RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
