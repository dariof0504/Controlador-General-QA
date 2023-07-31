import { createSlice } from "@reduxjs/toolkit";


const sideIndividualElementSlice = createSlice({
    name: 'sideIndividual',
    initialState: {
        fileUploaded : false
    },
    reducers: {
        setSideFile: (state, {payload}) => {
            state.title = payload.title
            state.url = payload.targetURL
            state.commands = payload.commands
            state.fileUploaded = true
        },
        deleteSide : (state) => {
            state.fileUploaded = false
        },
        setNewSideFile: (state, {payload}) => {
            state.commands = payload
        }
    }
})

export const { setSideFile, deleteSide, setNewSideFile } = sideIndividualElementSlice.actions

export default sideIndividualElementSlice.reducer