import { RestaurantCard } from 'src/components/RestaurantCard'
import { Search } from 'src/components/Search'
import { Container } from 'src/components/Container'
import { Title, Wrapper } from './styles'

export const RestaurantList = () => {
  return (
    <Container>
      <Title>Bem-vindo ao Lista Rango</Title>
      <Search />
      <Wrapper>
        <RestaurantCard isOpen />
        <RestaurantCard />
        <RestaurantCard isOpen />
        <RestaurantCard isOpen />
      </Wrapper>
    </Container>
  )
}
