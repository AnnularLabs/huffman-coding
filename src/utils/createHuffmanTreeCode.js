import initHuffmanTree from './huffman-coding/initHuffmanTree'
import CreateHuffman from './huffman-coding/createHuffman'
import store from '../store'
import { addLetterTree } from '../store/features/huffmanTree'

export default function() {
  let huffmanStore = store.getState().HuffmanTree
  const HuffmanTree = initHuffmanTree(huffmanStore.LETTER_FREQUENCIES)
  CreateHuffman(HuffmanTree, huffmanStore.LETTER_FREQUENCIES.length)
  store.dispatch(addLetterTree(HuffmanTree))
}