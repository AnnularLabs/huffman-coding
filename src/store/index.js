import { configureStore } from "@reduxjs/toolkit"
import huffmanTreeReducer from './features/huffmanTree'

const store = configureStore({
  reducer: {
    HuffmanTree: huffmanTreeReducer
  }
})

export default store