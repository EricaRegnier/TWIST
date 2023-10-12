import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'products',
    initialState: 
        {
            showCategoria: '', 
            text: '',
            sortBy: "price"
        },
    reducers: {
        setShowCategoria: (state, action)=>{
            state.showCategoria = action.payload || ''
        },
        setFilterText:  (state, action)=>{
            state.text = action.payload || ''
        },
        setSortBy: (state, action)=>{
            state.sortBy = action.payload
        },
        setIndexSelected: (state, action) => {
            state.indexSelected = action.payload
          },

    }

})

export const{setShowCategoria, setFilterText, setSortBy, setIndexSelected} = filterSlice.actions
export default filterSlice.reducer 