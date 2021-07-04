import { useState, useEffect } from 'react'
import { RestaurantCard } from 'src/components/RestaurantCard'
import { Search } from 'src/components/Search'
import { Container } from 'src/components/Container'
import { Title, Wrapper } from './styles'
import { GetAllRestaurants } from 'src/requests/getAllRestaurants'

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(async () => {
    const { data } = await GetAllRestaurants()
    setRestaurants(data)
  }, [])

  return (
    <Container>
      <Title>Bem-vindo ao Lista Rango</Title>
      <Search id="1" label="Buscar estabelecimento" state={restaurants} setState={setRestaurants} />
      <Wrapper>
        {restaurants &&
          restaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              address={restaurant.address}
              image={restaurant.image}
              isOpen
            />
          ))}
      </Wrapper>
    </Container>
  )
}
