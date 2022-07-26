const axios = require('axios')

axios.defaults.baseURL = "http://localhost:5000/"
//axios.defaults.headers.common['token'] = token

const userReq = {
  getById: async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios({
        method: 'get',
        url: 'user/',
        headers: { token: token }
      })
      return res.data.info
    } catch (err) {
      return err
    }
  }

}
export default userReq

