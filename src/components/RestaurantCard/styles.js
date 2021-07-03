import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  width: 33%;
  height: 100px;
  background: #fff;
  -webkit-box-shadow: 0px 2px 4px #00000029;
  -moz-box-shadow: 0px 2px 4px #00000029;
  box-shadow: 0px 2px 4px #00000029;
`
export const RestaurantLogo = styled.div`
  height: 100px;
  width: 100px;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const RestaurantInfo = styled.div`
  padding-left: 1.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.p`
  font-size: 16px;
  color: #404040;
`
export const Address = styled.p`
  font-size: 12px;
  color: #404040;
`

export const Status = styled.div`
  position: absolute;
  right: -1.5rem;
  top: -1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #2b0d61;
  -webkit-box-shadow: 0px 1px 2px #00000029;
  -moz-box-shadow: 0px 1px 2px #00000029;
  box-shadow: 0px 1px 2px #00000029;
`
