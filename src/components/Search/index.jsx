import { string } from 'prop-types'
import { Wrapper, Label, Input, Icon } from './styles'

export const Search = ({ id, label }) => {
  return (
    <Wrapper>
      <Label id={id}>{label}</Label>
      <Input type="text" aria-label={label} aria-describedby={id} />
      <Icon src="images/search.svg" />
    </Wrapper>
  )
}

Search.propType = {
  id: string.isRequired,
  label: string
}

Search.defaultProps = {
  label: 'Buscar'
}
