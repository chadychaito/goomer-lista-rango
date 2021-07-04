import { middlewareAPI } from 'src/utils/middlewareAPI'

export const GetAllRestaurants = async () => {
  const response = await middlewareAPI.get('/restaurants')
  return response
}
