import { Card, RestaurantLogo, Logo, RestaurantInfo, Name, Address, Status } from './styles'

export const RestaurantCard = ({ isOpen }) => (
  <Card>
    <RestaurantLogo>
      <Logo src="images/vegan-restaurant-logo-design_1438-10.png" />
    </RestaurantLogo>
    <RestaurantInfo>
      {/* Verificar se é bom usar h2 */}
      <Name>Nome do Restaurante</Name>
      <Address>Endereço do restaurante</Address>
    </RestaurantInfo>
    <Status isOpen={isOpen}></Status>
  </Card>
)
