import { PureComponent } from 'react'
// import createWordCode from '../utils/huffman-coding/createWordCode'
import coding from '../utils/huffman-coding/coding'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import { MessageWrapper } from '../style';
import decoding from '../utils/huffman-coding/decoding';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';

export class Message extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      word: '',
      buttonText: true,
      changeCodeColor: 'primary'
    }
  }

  changeWord(e) {
    this.setState({word: e.target.value})
  }

  sendWord(word,isCode) {
    if(isCode) {
      const code = coding(word)
      this.props.getWordCode(code)
      this.setState({isShowError: true, word: ''})
    }
    if(!isCode) {
      const words = decoding(word)
      this.props.getWordCode(words)
    }
  }

  changeInfo() {
    
    this.setState({
      buttonText: !this.state.buttonText,
      changeCodeColor: this.state.changeCodeColor === 'primary' ? 'secondary' : 'primary'
    })
  } 

  render() {
    const { word, buttonText, changeCodeColor} = this.state
    return (
      <MessageWrapper>
        <TextField 
          value={word} 
          autoComplete="off"
          onChange = {e => this.changeWord(e)}
          id="outlined-basic" 
        />
        <Button 
          variant="contained" 
          endIcon={<SendIcon />}
          onClick={() => this.sendWord(word, buttonText)}
          id="Send"
        >
          Send
        </Button>
         <Button 
          id="changeCode"
          variant="contained" 
          endIcon={<ThreeSixtyIcon />}
          color={changeCodeColor}
          onClick={() => this.changeInfo()}
        >
          { buttonText ? 'coding': 'decode' }
        </Button>
      </MessageWrapper>
    )
  }
}

export default Message
