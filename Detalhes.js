import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { addQtd } from "./ProductsSlice";

export const Detalhes = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const produtos = useSelector((state)=>state.products)
    const prodExibido = produtos.find((produto)=>produto.id == params.id)
    const formattedPrice = (prodExibido.price / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return(
        
        <div>
            <p>{prodExibido.name}</p>
            <img src={prodExibido.image} alt={prodExibido.name} height={"300px"} />
            <p>{formattedPrice}</p>
            <p>{prodExibido.description}</p>
            quantidade:
            <select value={prodExibido.qtd} onChange={(e) => {dispatch(addQtd({id: prodExibido.id, qtd: e.target.value}))}}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
            </select>
            <br/>
            <br/>
            <button onClick={() => navigate('/carrinho')}>Comprar</button>
            <br/>
            <br/>
            <button onClick={() => navigate('/')}>adicionar ao carrinho</button>

        </div>
       
    );
};