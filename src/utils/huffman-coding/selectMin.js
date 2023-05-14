import SearchHuffmanTreeMinValue from './searchHuffmanTreeMinValue.js'
/** * 
 * @param {*} HuffmanTree 哈夫曼树
 * @param {*} length 当前长度除去需要加入的数
 * @param {*} i1 最小值
 * @param {*} i2 最大值
 */
export default function(HuffmanTree, length) {
  let newHuffmanTree = []
  // 添加未选中的值
  for (let i = 1; i <= length; i++) {
    if(HuffmanTree[i].parent !== -1) {
      newHuffmanTree.push(-1)
    }
    if(HuffmanTree[i].parent === -1) {
      newHuffmanTree.push(HuffmanTree[i])
    }
  }

  // 第一个最小下标
  let minFirst = SearchHuffmanTreeMinValue(newHuffmanTree)
  // flag
  newHuffmanTree[minFirst] = -1
  // 第二个最小下标
  let minSecond = SearchHuffmanTreeMinValue(newHuffmanTree)

  return [minFirst + 1, minSecond + 1]
}