import { FilterState } from "@/models/index";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { stringIsEmptyOrNull } from '@/helpers/index';


const initialState: FilterState = {
    productFilter: {
        descending: true,
        page: 1,
        category_ids: [],
        brand_ids: [],
        color_ids: [],
        unit_size_ids: [],
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setProductFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter>) => {
            state.productFilter = action.payload;
            state.productFilter.page = 1;
        },
        setSearchFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter.search>) => {
            state.productFilter.search = action.payload;
            if (stringIsEmptyOrNull(action.payload)) {
                delete state.productFilter.search;
            }
            state.productFilter.page = 1;
        },
        setPerPageFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter.per_page>) => {
            state.productFilter.per_page = action.payload;
            state.productFilter.page = 1;
        },
        setSortByFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter.sort_by>) => {
            state.productFilter.sort_by = action.payload;
            state.productFilter.page = 1;
        },
        setCategoriesFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter>) => {
            state.productFilter.category_ids = action.payload.category_ids;
            state.productFilter.page = 1;
        },
        setBrandsFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter>) => {
            state.productFilter.brand_ids = action.payload.brand_ids;
            state.productFilter.page = 1;
        },
        setPriceFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter>) => {
            state.productFilter.min_price = action.payload.min_price;
            state.productFilter.max_price = action.payload.max_price;
            state.productFilter.page = 1;
        },
        setColorsFilter: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.productFilter>) => {
            state.productFilter.color_ids = action.payload.color_ids;
            state.productFilter.page = 1;
        },
    },
});

export const { setProductFilter, setPerPageFilter, setSortByFilter, setSearchFilter, setCategoriesFilter, setBrandsFilter, setPriceFilter, setColorsFilter } = filterSlice.actions

export const getFilterState = (state: { filter: FilterState }) => state.filter;

export default filterSlice.reducer;
