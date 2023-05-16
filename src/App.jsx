import { PureComponent } from 'react'
import LiveChat from './components/LiveChat'
import Message from './components/Message'
import { AppWrapper, LiveChatWrapper } from './style'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      code: null
    }
  }

  changeWordCode(code) {    
    this.setState({code})
  }

  render() {
    const { code } = this.state
    return (
      <AppWrapper>
        <div className='title'>Interesting chat</div>
        <LiveChatWrapper>
          <LiveChat code={code} />
        </LiveChatWrapper>
        <Message getWordCode={code => this.changeWordCode(code)} />
      </AppWrapper>
    )
  }
}

export default App
