import { Provider } from "react-redux";
import "./App.css"
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Store from "./utills/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import VideoContainer from "./components/VideoContainer";

 const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<MainContainer/>,
      children:[
        {
          path:"/",
          element:<VideoContainer/>,

        },
        {
          path:"/watch",
          element:<WatchVideo/>,

        }
      ]
    }
 ])

function App() {
  return (
    <Provider store={Store}> 
    <div className="relative"  >
       
        <Head />
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
