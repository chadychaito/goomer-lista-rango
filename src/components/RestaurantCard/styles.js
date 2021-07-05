import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  height: 100px;
  background: #fff;
  border-radius: 0.25rem;
  margin-bottom: 2.215rem;
  -webkit-box-shadow: 0px 2px 4px #00000029;
  -moz-box-shadow: 0px 2px 4px #00000029;
  box-shadow: 0px 2px 4px #00000029;
`

export const Logo = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 4px 0 0 4px;
  object-fit: cover;
`

export const Info = styled.div`
  padding-left: 1.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #404040;
  margin: 0;
`
export const Address = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #404040;
`
export const StatusGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  right: -1.5rem;
  top: -1.5rem;
  background: ${({ isOpen }) => (isOpen ? '#2b0d61' : '#B5ABD4')};
  -webkit-box-shadow: 0px 1px 2px #00000029;
  -moz-box-shadow: 0px 1px 2px #00000029;
  box-shadow: 0px 1px 2px #00000029;
`

export const Status = styled.p`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 0.5rem;
`
