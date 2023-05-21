import store from "../../store"

export default function(words) {
  const { LETTER_TREE: HuffmanTree, LETTER_FREQUENCIES} = store.getState().HuffmanTree
  let resultCodeArray = []
  for(let i = 0; i < words.length; i++) {
    let child = LETTER_FREQUENCIES.indexOf(words[i]) + 1
    let parent = HuffmanTree[child].parent
    
    let HNodeCode = []
    while(parent !== -1) {
      HuffmanTree[parent].leftChild === child ? HNodeCode.push(0) : HNodeCode.push(1)
      child = parent
      parent = HuffmanTree[child].parent
    }

    // print
    let resultCode = ''
    while(HNodeCode.length > 0) {
      resultCode += HNodeCode.pop()
    }
    resultCodeArray.push(resultCode)
  }

  return resultCodeArray
}