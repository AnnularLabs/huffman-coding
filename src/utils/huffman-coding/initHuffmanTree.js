// 定义HNode
class HNode {
  constructor(str = null, weight = 999 , parent = -1, leftChild = -1, rightChild = -1) {
    this.str = str
    this.weight = weight,
    this.parent = parent,
    this.leftChild = leftChild,
    this.rightChild = rightChild
  }
  toJSON() {
    return {
      leftChild: this.leftChild,
      parent: this.parent,
      rightChild: this.rightChild,
      str: this.str,
      weight: this.weight,
    }
  }
}

// 初始化HuffmanTree
export default function (LETTER_FREQUENCIES){
  const HuffmanTree = [0]

 
  LETTER_FREQUENCIES.forEach((item, index) => {
    HuffmanTree.push(new HNode(item, index + 1).toJSON())
  })

  // 添加生成的HNode
  for(let i = 1; i <= LETTER_FREQUENCIES.length - 1; i++) {
    HuffmanTree.push(new HNode().toJSON())
  }

  return HuffmanTree
}