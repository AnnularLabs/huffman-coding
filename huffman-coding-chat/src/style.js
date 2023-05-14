import styled from '@emotion/styled'

export const AppWrapper = styled.div`
  /* background-color: slateblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;color: #06C1AB;
    font-size: 45px;
    margin-bottom: 10px;
  }
`
export const MessageWrapper = styled.div`
  width: 732px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D9D9D9;
  border-radius: 15px;
  #outlined-basic {
    box-sizing: border-box;
    width: 467px;
    height: 32px;
  }
  Button {
    width: 206px;
    height: 32px;
    background-color: #06C1AB;
    margin-left: 18px;
    &:hover{
      background-color: #06C1AB;
    }
    
  }
`

export const LiveChatWrapper = styled.div`
  width: 732px;
  height: 559px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`