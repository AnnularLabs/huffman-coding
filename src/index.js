import initHuffmanTree from './utils/initHuffmanTree.js'
import CreateHuffman from './utils/createHuffman.js'

export default function(word) {
  const HuffmanTree = initHuffmanTree(word)
  CreateHuffman(HuffmanTree, word.length)
  return HuffmanTree
}