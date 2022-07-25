const axios = require('axios')
axios.defaults.baseURL = "http://localhost:5000"

const token = localStorage.getItem('token')
axios.defaults.headers.common['token'] = token
const roomReq = {
  getAllRoom: async (userId) => {
    const res = await axios({
      method: "get",
      url: "/room/",
      params: {
        userId,
      },
    })
    return res.data
  }
}
export default roomReq
