import styled from '@emotion/styled'

export const AppWrapper = styled.div`
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
    font-size: 3vw;
    line-height: 39px;color: #06C1AB;
    font-size: 45px;
    margin-bottom: 10px;
  }
`
export const MessageWrapper = styled.div`
  width: 70vw;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D9D9D9;
  border-radius: 15px;
  #outlined-basic {
    box-sizing: border-box;
    width: 70vw;
    height: 32px;
  }
  .MuiInputBase-root {
    margin-left: 15px;
  }
  #changeCode {
    width: 120px;
    height: 32px;
     margin: 0 15px 0 18px;
  }
  #Send {
    background-color: #06C1AB;
    width: 206px;
    height: 32px;
     margin: 0 15px 0 18px;
  }
`

export const LiveChatWrapper = styled.div`
  width: 70vw;
  height: 70%;
  background-color: #D9D9D9;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`