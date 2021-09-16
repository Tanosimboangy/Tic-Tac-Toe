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
  width: 44px;
  height: 44px;
  position: absolute;
  top: 14px;
  left: 10px;
  @media (max-width: 760px) {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`
export const Input = styled.input`
  background: white;
  border: none;
  outline: none;
  padding: 16px 10px 16px 110px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 48px;
  line-height: 48px;
  width: -webkit-fill-available;
  ::placeholder {
    font-size: 48px;
    line-height: 48px;
  }
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
    ::placeholder {
      font-size: 24px;
      line-height: 24px;
    }
  }
`
export const PlayerScore = styled.span`
  font-size: 48px;
  line-height: 48px;
  position: absolute;
  left: 60px;
  top: 18px;
  @media (max-width: 760px) {
    top: 15px;
    font-size: 24px;
    line-height: 24px;
  }
`
export const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
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
  font-size: 48px;
  line-height: 48px;
  text-align: left;
  color: #000000;
  margin: 0;
  margin-right: 4px;
  white-space: nowrap;
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
    padding: 16px 0px 16px 0px;
  }
`
export const TimeValue = styled.input`
  background: white;
  border-radius: 5px;
  font-size: 20px;
  line-height: 20px;
  font-size: 48px;
  line-height: 48px;
  max-width: 24px;
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const TimeUnit = styled.span`
  font-size: 48px;
  line-height: 48px;
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const StartBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background: white;
  border-radius: 4px;
  width: max-content;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #000000;
  align-self: center;
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
  }
`
