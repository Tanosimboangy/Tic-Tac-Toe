import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0px 0px 0px;
`
export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: #000000;
  margin: 0px 0px 50px 0px;
  font-size: 48px;
  line-height: 48px;
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const RestartBtn = styled.button`
  padding: 16px 20px;
  background: white;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #000000;
  border-radius: 8px;
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
  }
`
