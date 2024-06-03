import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout.tsx";
import Error from "./components/Error";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
        ]
    }
]);

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
