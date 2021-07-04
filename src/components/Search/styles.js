import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  max-width: 840px;
  height: 40px;
  margin: auto;
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 2px 4px #00000029;
  -moz-box-shadow: 0px 2px 4px #00000029;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 2.8125rem;
`

export const Label = styled.span`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem 0.75rem 2.375rem;
  font-size: 1rem;
  font-weight: 500;
  color: #404040;
  text-align: center;
  white-space: nowrap;
  background-color: #fff;
  border-radius: 2.8125rem 0 0 2.8125rem;
`

export const Input = styled.input`
  position: relative;
  flex: 1 1 auto;
  background: #fbfbfb;
  border: none;
  border-radius: 0 2.8125rem 2.8125rem 0;
  padding-left: 0.5rem;
  &:focus {
    outline: none;
  }
`

export const Icon = styled.img`
  position: absolute;
  right: 19px;
  top: 12px;
`
