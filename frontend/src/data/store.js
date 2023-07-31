import { configureStore } from '@reduxjs/toolkit'
import { sliceSideReducer } from '../api/slideSide'
import sideIndividualElementReducer from '../api/sideReducer'

export const store = configureStore({
    reducer: {

        [sliceSideReducer.reducerPath] : sliceSideReducer.reducer,
        sideIndividualElement: sideIndividualElementReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliceSideReducer.middleware),
})