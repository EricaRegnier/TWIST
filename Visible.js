export const visible=(produtos, text, sortBy, categoria)=>{
    console.log(sortBy);
    console.log(text);
    const filtrados = produtos.filter((produto)=>
    produto.category.toLowerCase().includes(categoria) 
    && 
    produto.name.toLowerCase().includes(text))
    return filtrados.sort((a, b) => {
        if (sortBy == 'price'){
            return a.price > b.price ? 1 : -1;
        } else if (sortBy == 'alphabetical'){
            return a.name > b.name ? 1 : -1;
        }
    })
}