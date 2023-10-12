import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { setFilterText} from "./FilterSlice";
import { PageCat } from "./PageCat";
import { Carrinho } from "./Carrinho";
import{Header} from "./Header";
import{Detalhes} from "./Detalhes"

function App() {
  

  const Navbar = () => {
    
    return(
      <div className = "navbar">
        <NavLink className = {({isActive}) => isActive ? 'navbar_item-clicked' : 'navbar_item'}to = '/'> Todos </NavLink>
        <NavLink className = {({isActive}) => isActive ? 'navbar_item-clicked' : 'navbar_item'}to = '/necessarios'> Necessarios </NavLink>
        <NavLink className = {({isActive}) => isActive ? 'navbar_item-clicked' : 'navbar_item'}to = '/moveis'> Móveis </NavLink>
        <NavLink className = {({isActive}) => isActive ? 'navbar_item-clicked' : 'navbar_item'}to = '/celular'> Celular </NavLink>

      </div>
    )
  }

  const HeaderLayout = () => {
    return(
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  
  const Ajuda = () => {
    return(
      <h1> Ajuda </h1>
    )
  }

  
const router = createBrowserRouter([
  {
    element: 
    <div>
      <Header/>
      <HeaderLayout/>
      </div>,
    children: [
      {path: '/', element: <PageCat/>},
      {path: '/:categoria', element: <PageCat/>}, // 
      {path: '/Ajuda', element: <Ajuda/>},
      {path: '/carrinho', element: <Carrinho/>},
      {path: '/:categoria/:id', element: <Detalhes/>}
    ]
  }

])

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}


export default App;