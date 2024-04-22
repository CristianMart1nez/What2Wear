import { RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { router } from "./router";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <HomePage />
      </RouterProvider>
    </>
  );
}

export default App;
