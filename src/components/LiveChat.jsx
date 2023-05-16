import { PureComponent } from 'react'
import createHuffmanTreeCode from '../utils/createHuffmanTreeCode'

export class LiveChat extends PureComponent {
  constructor() {
    super()

    this.state = {
      code: ''
    }
  }
  
  /**
   * 进行coding
   * @returns 
   */
  componentDidMount() { 
    createHuffmanTreeCode()
  }

  render() {
    const { code } = this.props
    return (
      <div>
        {
          code ? 
          <h2>{code}</h2> :
          <h2>
            Please enter the content📟
          </h2>
        }
      </div>
    )
  }

}

export default LiveChat
