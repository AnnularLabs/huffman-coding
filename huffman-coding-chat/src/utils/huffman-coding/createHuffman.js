import SelectMin from './selectMin.js'
/**
 * CreateHuffman
 * @param {*} HuffmanTree 
 * @param {*} length words.length
 */
export default function(HuffmanTree,length) {
  // 遍历
  for (let i = length + 1; i < 2 * length; i++ ) {
    // 挑选权重最小的
    let [ minFirst, minSecond ] = SelectMin(HuffmanTree, i -  1)
    /**
     * 1. minFirst的权重 + minSecond的权重
     * 2. 改变minFirst和miSecond的parent值
     * 3. 新HNode设置左孩子和右孩子（遵循左小右大）
     */
    HuffmanTree[i].weight = HuffmanTree[minFirst].weight + HuffmanTree[minSecond].weight
    HuffmanTree[minFirst].parent = i
    HuffmanTree[minSecond].parent = i
    HuffmanTree[i].leftChild = minFirst
    HuffmanTree[i].rightChild = minSecond
    
  }
}