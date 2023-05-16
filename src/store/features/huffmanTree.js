import { createSlice } from "@reduxjs/toolkit";

const huffmanTreeSlice = createSlice({
  name: 'huffmanTree',
  initialState: {
    LETTER_FREQUENCIES: [
      'q','j','!','?','z',
      'x','v','k','w','y',
      'f','b','g','h','m',
      '.','p','d','u',' ',
      'c','l','s','n','t',
      'o','i','r','a','e',
    ],
    LETTER_TREE: []
  },
  reducers: {
    addLetterTree(state, { payload }) {
      state.LETTER_TREE = payload
    }
  }
})

export const { addLetterTree } = huffmanTreeSlice.actions
export default huffmanTreeSlice.reducer