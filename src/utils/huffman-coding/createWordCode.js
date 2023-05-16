import createHuffmanCode from './createHuffmanCode'
import store from '../../store'

export default function(words) {
  let huffmanStore = store.getState().HuffmanTree
  const code = createHuffmanCode(huffmanStore.LETTER_TREE, huffmanStore.LETTER_FREQUENCIES, words)
  return code
}