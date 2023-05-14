import initHuffmanTree from './huffman-coding/initHuffmanTree'
import CreateHuffman from './huffman-coding/createHuffman'
import createHuffmanCode from './huffman-coding/createHuffmanCode'


export default function(word) {
  const HuffmanTree = initHuffmanTree(word)
  CreateHuffman(HuffmanTree, word.length)
  const code = createHuffmanCode(HuffmanTree, word.length)
  return code
}