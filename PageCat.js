import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { visible } from "./Visible";
import { setShowCategoria, setSortBy } from "./FilterSlice";

export const PageCat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filtros = useSelector((state) => state.filter);
  const produtos = useSelector((state) => state.products);
  const params = useParams();

  dispatch(setShowCategoria(params.categoria));
  const produtosVisiveis = visible(produtos, filtros.text, filtros.sortBy, filtros.showCategoria);

  return (
    <div>
      <br />
      Ordenar por:
      <select value={filtros.sortby} onChange={(e) => {dispatch(setSortBy(e.target.value))}}>
          <option value='price'>preço</option>
          <option value='alphabetical'>A-Z</option>
        </select>
      
      {produtosVisiveis.map((produto) => {
        var preco = (produto.price / 100).toLocaleString(undefined, {
          style: "currency",
          currency: "BRL",
        });
        return (
          <div key={produto.id}>
            <div onClick = {()=>navigate(`/${produto.category}/${produto.id}`)}key={produto.id}>
              <h3>{produto.name} - {preco}</h3> 
              <img src={produto.image} height={"80px"}/>
          </div>
          <br/>
          <br/>
          </div>
        );
      })}
    </div>
  );
};
