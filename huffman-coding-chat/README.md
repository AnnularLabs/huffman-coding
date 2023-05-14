## Huffman-coding

- HuffmanNode

  ```javaScript
  class HNode {
    constructor(str = null, weight = 999 , parent = -1, leftChild = -1, rightChild = -1) {
      this.str = str
      this.weight = weight,
      this.parent = parent,
      this.leftChild = leftChild,
      this.rightChild = rightChild
    }
  }
  ```

### Example

```javaScript

  const word = 'abcd',

  // getWordHuffmanTree
  const HuffmanTree =  wordHuffmanCoding(word)
  // getWordCode
  const code = createHuffmanCode(HuffmanTree, word.length)

  console.log(code) // { a: '100', b: '101', c: '11', d: '0' }

```

### Notice

There are currently no statistics on the weight of characters

### Diagram
![diagram](/public/image/Diagram2.png)

