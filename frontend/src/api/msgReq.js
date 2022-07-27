const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:5000/'

const msgReq = {
  createMsg: async (roomId, content) => {
    let token = localStorage.getItem('token')
    let res = await axios({
      method: 'post',
      url: 'message',
      data: {
        roomId,
        content,
      },
      headers: {
        token
      }
    })
    console.log(res.data)
  }
}

export default msgReq
