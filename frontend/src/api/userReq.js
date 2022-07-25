const axios = require('axios')

const token = localStorage.getItem('token')
axios.defaults.baseURL = "http://localhost:5000/"
axios.defaults.headers.common['token'] = token

const userReq = {
  getById: async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'user/',
      })
      return res.data.info
    } catch (err) {
      return err
    }
  }

}
export default userReq

