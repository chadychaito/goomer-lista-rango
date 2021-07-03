import { Card, RestaurantLogo, Logo, RestaurantInfo, Name, Address, Status } from './styles'

export const RestaurantCard = () => (
  <Card>
    <RestaurantLogo>
      <Logo src="https://cnpj.biz/img/logo_cnpj_biz.png" />
    </RestaurantLogo>
    <RestaurantInfo>
      {/* Verificar se é bom usar h2 */}
      <Name>Nome do Restaurante</Name>
      <Address>RestaurantInfo</Address>
    </RestaurantInfo>
    <Status>a</Status>
  </Card>
)
