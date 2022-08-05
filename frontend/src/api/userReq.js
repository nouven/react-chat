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
  },
  getUsers: async (value) => {
    try {
      if (!value) {
        return []
      }
      let token = localStorage.getItem('token')
      let res = await axios({
        method: 'get',
        url: 'user/search',
        headers: { token },
        params: {
          regex: value,
        }
      })
      return res.data
    } catch (err) {
      return err
    }
  },
  getUsersRoom: async (roomId) => {
    try {
      let token = localStorage.getItem('token')
      let res = await axios({
        mothod: 'get',
        url: 'user/room',
        headers: { token },
        params: { roomId }
      })
      return res.data
    } catch (err) {
      return err
    }
  }
}
export default userReq

