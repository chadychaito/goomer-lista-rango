import { bool, string } from 'prop-types'

import { Card, Logo, Info, Name, Address, Status, StatusGroup } from './styles'

export const RestaurantCard = ({ isOpen, name, address, image }) => (
  <Card>
    <Logo src={image} />
    <Info>
      <Name>{name}</Name>
      <Address>{address}</Address>
    </Info>
    <StatusGroup isOpen={isOpen}>
      <Status>{isOpen ? 'Aberto agora' : 'Fechado'}</Status>
    </StatusGroup>
  </Card>
)

RestaurantCard.propTypes = {
  name: string.isRequired,
  address: string.isRequired,
  image: string.isRequired,
  status: bool
}

RestaurantCard.defaultProps = {
  status: false
}
