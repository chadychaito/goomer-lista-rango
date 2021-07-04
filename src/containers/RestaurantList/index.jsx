import { useState, useEffect } from 'react'
import { RestaurantCard } from 'src/components/RestaurantCard'
import { Search } from 'src/components/Search'
import { Container } from 'src/components/Container'
import { Title, Wrapper } from './styles'
import { GetAllRestaurants } from 'src/requests/getAllRestaurants'

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])
  const [list, setList] = useState([])

  useEffect(async () => {
    const { data } = await GetAllRestaurants()
    setRestaurants(data)
    setList(data)
  }, [])

  const onChange = value => {
    const filteredValue = restaurants.filter(
      restaurant => restaurant.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
    setList(filteredValue)
  }

  return (
    <Container>
      <Title>Bem-vindo ao Lista Rango</Title>
      <Search id="search-all-restaurants" label="Buscar estabelecimento" onChange={onChange} />
      <Wrapper>
        {list &&
          list.map(restaurant => (
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
