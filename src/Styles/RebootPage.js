import styled from 'styled-components'

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 103px 0px 0px 0px;
`
export const Frame = styled.div`
  position: relative;
`
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  left: 10px;
`
export const Input = styled.input`
  background: white;
  border: none;
  outline: none;
  padding: 16px 10px 16px 80px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 24px;
  line-height: 24px;
  width: -webkit-fill-available;
  ::placeholder {
    font-size: 24px;
    line-height: 24px;
  }
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 18px;
    ::placeholder {
      font-size: 18px;
      line-height: 18px;
    }
  }
`
export const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 37px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
export const TimeText = styled.span`
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  margin: 0;
  margin-right: 4px;
  white-space: nowrap;
  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 18px;
    padding: 16px 0px 16px 0px;
  }
`
export const TimeValue = styled.input`
  background: white;
  border-radius: 5px;
  font-size: 20px;
  line-height: 20px;
  max-width: 40px;
`
export const Btn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background: white;
  border-radius: 4px;
  width: max-content;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  align-self: center;
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
