## Huffman-coding

> WIP🦜

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

### example

```javaScript
  const word = 'abcd',
  wordHuffmanCoding(word)
```

### Diagram
![diagram](/image/Diagram2.png)

<br>

![diagram](/image/Diagram.png)


