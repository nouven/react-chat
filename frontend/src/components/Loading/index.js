import { useEffect } from "react"
import userReq from '../../api/userReq'
import { useNavigate } from 'react-router-dom'


function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login')
    } else {
      userReq.getById()
        .then(data => {
          let user = {
            _id: data._id,
            name: data.name,
            avatar: data.avatar,
          }
          setTimeout(() => {
            navigate('/chat', { state: user })
          }, 2000)
        });
    }
  }, [])

  return (
    <h1 className='relative / p-48 / text-2xl font-bold '>lOaDiNg.............</h1>
  )
}
export default Loading
