import { middlewareAPI } from 'utils/middlewareAPI'

export const GetAllRestaurants = async () => {
  const response = await middlewareAPI.get('/restaurants')
  return response
}
