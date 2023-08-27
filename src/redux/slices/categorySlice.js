import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    goods: [],
    catalogGoods: [],
    activeCategory: 0,
    newGood: true,
    favouriteCount: 0,
    binCount: 0,
    isLoading: true,
    clickedIdFavorite : [],
    goodsState: {},
    selectSvg: false,
    price: 0,
    filterButton: "",
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setActiveCategory(state, action)  {
            state.activeCategory = action.payload;
        },
        setNewGood(state,action) {
            state.newGood = action.payload
        },
        setFavouriteCount(state, action) {
            state.favouriteCount = action.payload
        },
        setBinCount(state, action) {
            state.binCount = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        
        setClickedIdFavorite(state, action) {
            state.clickedIdFavorite = action.payload
        },
        setGoodsState(state, action) {
            state.goodsState = { ...state.goodsState, ...action.payload };
        },
        setGoods(state, action) {
            state.goods = action.payload ;
        },
        setCatalogGoods(state, action) {
            state.catalogGoods = action.payload ;
        },
        setPrice(state, action) {
            state.price = action.payload
        },
        setFilterButton(state, action) {
            state.filterButton = action.payload
        },
        setSelectSvg(state,action) {
            state.selectSvg = action.payload
        }
     
        
        
        
    }
})
export const {setGoods, setActiveCategory, setNewGood, setFavouriteCount, 
              setBinCount, setChooseFavourite, setIsLoading, setClickedIdFavorite,
              setGoodsState, setPrice, setCatalogGoods, setFilterButton, setSelectSvg} = categorySlice.actions
export default categorySlice.reducer