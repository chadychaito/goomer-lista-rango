import { Wrapper, Label, Input, Icon } from './styles'

export const Search = ({ id }) => {
  return (
    <Wrapper>
      <Label htmFor={id}>Buscar estabelecimento</Label>
      <Input />
      <Icon />
    </Wrapper>
  )
}
