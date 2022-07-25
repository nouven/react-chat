const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:5000/'
const authReq = {
  login: async (email, password) => {
    try {
      const res = await axios({
        method: "post",
        url: 'auth/login',
        data: {
          email,
          password,
        }
      })
      return { status: res.status, token: res.data.token }
    } catch (err) {
      return err
    }
  },
  signup: async (name, email, password) => {
    try {
      const res = await axios({
        method: 'post',
        url: '/auth/signup',
        data: {
          name,
          email,
          password,
        }
      })
      return { status: res.status, data: res.data }
    } catch (err) {
      return err
    }
  },
}
export default authReq

