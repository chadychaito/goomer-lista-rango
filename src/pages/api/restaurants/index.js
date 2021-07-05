import { goomerAPI } from 'utils/goomerAPI'

export default async res => {
  const { status, data = {} } = await goomerAPI.get('/restaurants')
  res.status(status).json(data)
}
