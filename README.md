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

![example](/public/image/example1.png)
![example](/public/image/example2.png)


### Notice

- The weight of the letters comes from https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html

- Non-letter weights ``const defaultWeight = 10``

### Diagram
![diagram](/public/image/Diagram2.png)

