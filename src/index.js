import initHuffmanTree from './utils/initHuffmanTree.js'
import CreatHuffman from './utils/creatHuffman.js'

export default function(word) {
  const HuffmanTree = initHuffmanTree(word)
  CreatHuffman(HuffmanTree, word.length)
  return HuffmanTree
}