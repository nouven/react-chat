const axios = require('axios')
axios.defaults.baseURL = "http://localhost:5000"

//axios.defaults.headers.common['token'] = token
const roomReq = {
  getAllRoom: async (userId) => {
    const token = localStorage.getItem('token')
    const res = await axios({
      method: "get",
      url: "/room/",
      params: {
        userId,
      },
      headers: {
        token,
      }
    })
    return res.data
  }
}
export default roomReq
