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


/**
 *  获取所有字母的频率表 
 *  当输入 hello的时候
 *  方案一：直接生成26个字母的huffmanTree
 *  方案二：在用的时候去生成
 *    - 在获取word的每个字母時需要按频率表进行添加
 *    - 需要获取下标
 * 
 * 
 */

// 初始化HuffmanTree
export default function ([...words]) {
  const HuffmanTree = [0]

  // 字母频率 from small to large
  const LETTER_FREQUENCIES = [
    'q', 'j', 'z', 'x', 'v', 'k',
    'w', 'y', 'f', 'b', 'g', 'h',
    'm', 'p', 'd', 'u', 'c', 'l',
    's', 'n', 't', 'o', 'i', 'r',
    'a', 'e'
  ]
  
  // 添加words的HNode
  words.forEach(item => {
    const letterWeight = LETTER_FREQUENCIES.indexOf(item)
    const defaultWeight = 10
    if (letterWeight === -1) {
      // 当不是letter的时候默认权重为10
      HuffmanTree.push(new HNode(item, defaultWeight))
    } else {
      HuffmanTree.push(new HNode(item, letterWeight)) 
    }
  });

  // 添加生成的HNode
  for(let i = 1; i <= words.length - 1; i++) {
    HuffmanTree.push(new HNode())
  }

  return HuffmanTree
}