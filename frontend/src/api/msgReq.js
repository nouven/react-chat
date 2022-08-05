const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:5000/'

const msgReq = {
  createMsg: async (roomId, content, senderId, senderName) => {
    let token = localStorage.getItem('token')
    try {
      let res = await axios({
        method: 'post',
        url: 'message/',
        data: {
          roomId,
          content,
          senderId,
          senderName,
        },
        headers: {
          token
        }
      })
    } catch (err) {

    }
  },
  updateRoomUser: async (roomId, userId) => {
    let token = localStorage.getItem('token')
    try {
      let res = await axios({
        method: 'put',
        url: 'message/',
        data: {
          roomId,
          userId,
        },
        headers: {
          token
        }
      })
    } catch (err) {
      console.log("err")
    }
  },
  getAllMsg: async (roomId) => {
    let token = localStorage.getItem('token')
    try {
      let res = await axios({
        method: 'get',
        url: 'message/all',
        params: {
          roomId,
        },
        headers: {
          token
        }
      })
      return res.data
    } catch (err) {
      return err
    }
  }
}

export default msgReq
