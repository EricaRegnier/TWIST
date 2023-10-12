import { useDispatch, useSelector } from "react-redux";
import { removeQtd } from "./ProductsSlice";
import { setIndexSelected } from "./FilterSlice";

export const Carrinho = () => {
  const enderecos = useSelector((state) => state.address);
  const produtos = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  const indexSelected = useSelector((state) => state.filter.indexSelected)
  var total = 0
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100); 
  };


    return (
      <div>
        <h1>Carrinho</h1>
        <div>
          <h3>Endereço</h3>
          {enderecos.map((e) =>
            <label>
              <input
                type="radio"
                value = {e.id}
                checked = {e.id == indexSelected}
                onChange={()=> dispatch(setIndexSelected(e.id))}
              />
              {e.rua + ' '+ e.numero + ', '+ e.bairro + ', ' + e.estado + ', '+ e.cidade}
              <br/>


            </label>
          )}
        </div>
      
            <div>
              <h3>Produtos</h3>
              {produtos.map((p)=>{
                if(p.qtd >0){
                  total+=p.qtd*p.price
                  return(
                    <div key = {p.id}>
                      <p>{p.name}</p>
                      <p>{p.qtd}</p>
                      <button onClick={()=> dispatch(removeQtd(p.id))}>cancel</button>
                    </div>
                  )
                }
              }
            )}
            </div>
            <h2>preço total:{formatPrice(total)}</h2>
          </div>
        );
      };