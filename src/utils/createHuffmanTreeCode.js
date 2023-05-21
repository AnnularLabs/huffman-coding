import initHuffmanTree from './huffman-coding/initHuffmanTree'
import createHuffman from './huffman-coding/createHuffman'
import store from '../store'
import { addLetterTree } from '../store/features/huffmanTree'

export default function() {
  let huffmanStore = store.getState().HuffmanTree
  // 初始化HuffmanTree
  const HuffmanTree = initHuffmanTree(huffmanStore.LETTER_FREQUENCIES)
  // 对HuffmanTree进行编码
  createHuffman(HuffmanTree, huffmanStore.LETTER_FREQUENCIES.length)
  store.dispatch(addLetterTree(HuffmanTree))
}