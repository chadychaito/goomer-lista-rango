import { array, func, string } from 'prop-types'
import { useState } from 'react'
import { Wrapper, Label, Input, Icon } from './styles'

export const Search = ({ id, label, state, setState }) => {
  const [value, setValue] = useState('')
  const handleChange = event => {
    // setValue(event.target.value)
    // const filteredValue = state.filter(elem => console.log(elem.name))
    // setState(filteredValue)
  }

  return (
    <Wrapper>
      <Label id={id}>{label}</Label>
      <Input
        type="text"
        aria-label={label}
        aria-describedby={id}
        onChange={event => handleChange(event)}
        value={value}
      />
      <Icon src="images/search.svg" />
    </Wrapper>
  )
}

Search.propType = {
  id: string.isRequired,
  label: string,
  state: array,
  setState: func
}

Search.defaultProps = {
  label: 'Buscar',
  state: [],
  setState: () => {}
}
