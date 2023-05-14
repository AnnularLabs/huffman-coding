import wordHuffmanCoding from './src/index.js'
import createHuffmanCode from './src/utils/createHuffmanCode.js'

const word = 'abcd'
const HuffmanTree = wordHuffmanCoding(word)
const code = createHuffmanCode(HuffmanTree, word.length)

console.log(code)