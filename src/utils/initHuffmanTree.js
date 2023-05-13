// 定义HNode
class HNode {
  constructor(str = null, weight = 999 , parent = -1, leftChild = -1, rightChild = -1) {
    this.str = str
    this.weight = weight,
    this.parent = parent,
    this.leftChild = leftChild,
    this.rightChild = rightChild
  }
}

// 初始化HuffmanTree
export default function (words) {
  const HuffmanTree = [0]

  // 添加words的HNode
  for (let i = 1; i <= words.length; i++)
    HuffmanTree.push(new HNode(words[i-1], i))
    // console.log(HuffmanTree)  
  // 添加生成的HNode
  for(let i = 1; i <= words.length - 1; i++) {
    HuffmanTree.push(new HNode())
  }

  return HuffmanTree
}