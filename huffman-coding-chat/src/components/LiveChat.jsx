import { PureComponent } from 'react'

export class LiveChat extends PureComponent {
  constructor() {
    super()

    this.state = {
      code: ''
    }
  }

  render() {
    const { code } = this.props
    return (
      <div>
        {
          code ? 
          <div>{code}</div> :
          <div>
            Please enter the content && Greater than one📟
          </div>
        }
      </div>
    )
  }

}

export default LiveChat
