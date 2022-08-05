const axios = require('axios')
axios.defaults.baseURL = "http://localhost:5000"

//axios.defaults.headers.common['token'] = token
const roomReq = {
  getAllRoom: async (userId) => {
    const token = localStorage.getItem('token')
    try {
      const res = await axios({
        method: "get",
        url: "/room/all",
        params: {
          userId,
        },
        headers: {
          token,
        }
      })
      return res.data
    } catch (err) {
      return err
    }
  },
  createPublicRoom: async (users, roomName) => {
    const token = localStorage.getItem('token')
    try {

      let name = 'no name'
      if (roomName) {
        name = roomName
      }
      let res = await axios({
        method: 'post',
        url: 'room/',
        headers: {
          token
        },
        data: {
          users,
          name,
        }
      })
      return res.data
    } catch (err) {
      return err
    }
  },
  getOneRoom: async (roomId, userId) => {
    try {
      let token = localStorage.getItem('token')
      let res = await axios({
        method: 'get',
        url: 'room/one',
        headers: {
          token
        },
        params: {
          userId,
          roomId
        }
      })
      return res.data
    } catch (err) {
      return err
    }
  },
  updateRoomUsers: async (roomId, userId) => {
    try {
      let token = localStorage.getItem('token')
      let res = await axios({
        method: 'put',
        url: 'room/',
        headers: {
          token
        },
        data: {
          userId,
          roomId
        }
      })
      return res.status
    } catch (err) {
      return err
    }
  }
}
export default roomReq
