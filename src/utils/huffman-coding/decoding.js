import store from '../../store'

export default function([...code]) {
  const HuffmanTree = store.getState().HuffmanTree.LETTER_TREE
  let resultWords = ''

  let HuffmanTreeIndex = HuffmanTree.length -1

  code.forEach(item => {
      if(item === '0') {
        HuffmanTreeIndex = HuffmanTree[HuffmanTreeIndex].leftChild
        if(HuffmanTree[HuffmanTreeIndex].leftChild === -1) {
          resultWords += HuffmanTree[HuffmanTreeIndex].str
          HuffmanTreeIndex = HuffmanTree.length -1
        }
      } else {
        HuffmanTreeIndex = HuffmanTree[HuffmanTreeIndex].rightChild
        if(HuffmanTree[HuffmanTreeIndex].rightChild === -1) {
          resultWords += HuffmanTree[HuffmanTreeIndex].str
          HuffmanTreeIndex = HuffmanTree.length -1
        }
      }
  });
  return resultWords
}