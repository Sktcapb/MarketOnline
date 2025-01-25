import Header from './App/components/Header';
import Home from './App/view/Home';
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
const route = createBrowserRouter([{
	path: "/",
	element:<>

	<Header/>
	<Home/>

	</>
}])
	
  return (
     <div className="flex justify-center items-center bg-gray-200 h-screen">
		 	 <RouterProvider router={route}></RouterProvider>
		 </div>
  )
}

export default App;
