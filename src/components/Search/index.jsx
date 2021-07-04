import { array, func, string } from 'prop-types'
import { useState } from 'react'
import { Wrapper, Label, Input, Icon } from './styles'

export const Search = ({ id, label, onChange }) => {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
    onChange(event.target.value)
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
  onChange: func.isRequired
}

Search.defaultProps = {
  label: 'Buscar'
}
