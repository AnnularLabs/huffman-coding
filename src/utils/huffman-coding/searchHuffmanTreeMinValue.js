/**
 * 寻找数组中最小值的下标
 * @param {*} newHuffmanTree 
 * @returns 最小值的下标
 */
export default function(newHuffmanTree) {
  let i = 0
  let j = newHuffmanTree.length - 1
  while(i < j){
    if (newHuffmanTree[i].weight >= newHuffmanTree[j].weight || newHuffmanTree[i] === -1) i++
    else if (newHuffmanTree[j].weight >= newHuffmanTree[i].weight || newHuffmanTree[j] === -1) j--
  }  
  return j
}
