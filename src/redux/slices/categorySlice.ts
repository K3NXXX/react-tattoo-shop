import { PayloadAction, createSlice } from "@reduxjs/toolkit"
export type CategoryItem = {
    forWho: string;
    type: string;
    category: string;
    id: number;
    image: string;
    name: string;
    price: string;
}
type CategoryInitialState = {
    goods: CategoryItem[],
    catalogGoods: CategoryItem[],
    activeCategory: number,
    newGood: boolean,
    binCount: number,
    isLoading: boolean,
    selectSvg: boolean,
    price: number,
    filterButton: string,
    modal: boolean
}
const initialState: CategoryInitialState = {
    goods: [],
    catalogGoods: [],
    activeCategory: 0,
    newGood: true,
    binCount: 0,
    isLoading: true,
    selectSvg: false,
    price: 0,
    filterButton: "",
    modal: false
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setActiveCategory(state, action:PayloadAction<number>)  {
            state.activeCategory = action.payload;
        },
        setNewGood(state,action:PayloadAction<boolean>) {
            state.newGood = action.payload
        },
        setBinCount(state, action:PayloadAction<number>) {
            state.binCount = action.payload
        },
        setIsLoading(state, action:PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setGoods(state, action:PayloadAction<CategoryItem[]>) {
            state.goods = action.payload ;
        },
        setCatalogGoods(state, action:PayloadAction<CategoryItem[]>) {
            state.catalogGoods = action.payload ;
        },
        setPrice(state, action:PayloadAction<number>) {
            state.price = action.payload
        },
        setFilterButton(state, action:PayloadAction<string>) {
            state.filterButton = action.payload
        },
        setSelectSvg(state,action:PayloadAction<boolean>) {
            state.selectSvg = action.payload
        },
        setModal(state,action:PayloadAction<boolean>) {
            state.modal = action.payload
        }
    }
})
export const {setGoods, setActiveCategory, setNewGood, setBinCount, setIsLoading,  setPrice, 
    setCatalogGoods, setFilterButton, setSelectSvg, setModal} = categorySlice.actions
export default categorySlice.reducer