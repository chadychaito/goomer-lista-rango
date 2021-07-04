import { goomerAPI } from 'src/utils/goomerAPI'

export default goomerAPI = async res => {
  const { status, data = {} } = await goomerAPI('/restaurants')
  res.status(status).json(data)
}
