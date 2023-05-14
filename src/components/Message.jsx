import { PureComponent } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import { MessageWrapper } from '../style';
import createHuffmanTreeCode from '../utils/createHuffmanTreeCode'

export class Message extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      word: ''
    }
  }

  changeWord(e) {
    this.setState({word: e.target.value})
  }

  sendWord(word) {
    const code = createHuffmanTreeCode(word)
    this.props.getWordCode(code)
    this.setState({word:''})
  }

  render() {
    const { word } = this.state
    return (
      <MessageWrapper>
        <TextField 
          value={word} 
          onChange = {e => this.changeWord(e)}
          id="outlined-basic" 
        />
        <Button 
          variant="contained" 
          endIcon={<SendIcon />}
          onClick={() => this.sendWord(word)}
        >
          Send
        </Button>
      </MessageWrapper>
    )
  }
}

export default Message
