import store from '../../store'

export default function([...code]) {
  const HuffmanTree = store.getState().HuffmanTree.LETTER_TREE
  let resultWords = ''

  let HuffmanTreeIndex = 51

  code.forEach(item => {
      if(item === '0') {
        HuffmanTreeIndex = HuffmanTree[HuffmanTreeIndex].leftChild
        console.log(HuffmanTree[HuffmanTreeIndex].leftChild === '-1');
        if(HuffmanTree[HuffmanTreeIndex].leftChild === -1) {
          resultWords += HuffmanTree[HuffmanTreeIndex].str
          HuffmanTreeIndex = 51
        }
      } else {
        HuffmanTreeIndex = HuffmanTree[HuffmanTreeIndex].rightChild
        if(HuffmanTree[HuffmanTreeIndex].rightChild === -1) {
          resultWords += HuffmanTree[HuffmanTreeIndex].str
          HuffmanTreeIndex = 51
        }
      }
  });
  return resultWords
}