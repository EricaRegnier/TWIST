import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFilterText } from "./FilterSlice"

export const Header=()=>{
    const filter = useSelector((state)=>state.filter)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    return(
      <div className='header'>
        <h1>TWIST</h1>
        <input type="text" className="header_search" placeholder="Pesquisar produtos" value={filter.text} onChange={(e) => dispatch(setFilterText(e.target.value))}/>
        <img src = "../images/carrinho.png"  alt= "carrinho" className = 'header_cart' height = {"80px"} onClick={() => navigate('/carrinho')}/>
        <br/>
        <br/>
      </div>
  
    )
  
  }
   