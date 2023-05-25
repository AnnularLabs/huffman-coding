import store from '../../store'

export default function([...code]) {
  const HuffmanTree = store.getState().HuffmanTree.LETTER_TREE
  let resultWords = ''
  let currentIndex;
  let i = 0 
  
  while (i < code.length) {
    currentIndex = HuffmanTree.length - 1
    while (HuffmanTree[currentIndex].leftChild !== -1) {
      if (code[i] === '0') {
        currentIndex = HuffmanTree[currentIndex].leftChild
      } else {
        currentIndex = HuffmanTree[currentIndex].rightChild
      }
      i++
    }
    console.log(HuffmanTree[currentIndex].str)
    resultWords += HuffmanTree[currentIndex].str
  }

  return resultWords
}