import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import AllTasks from "./routes/AllTasks"
import Calendar from "./routes/Calendar"
import ErrorPage from "./routes/ErrorPage"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: "/Calendar",
    element: <Calendar />,
  },  
  {
    path: "/AllTasks",
    element: <AllTasks />,
  }
]);

function App() {
  return (
<>
<NavigationBar />
<RouterProvider router={router} />
</>
  );
}

export default App;
