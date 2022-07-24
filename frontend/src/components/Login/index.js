import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import auth from '../../api/auth'
function Login() {
  const style = {
    input: `relative / block / p-2 outline-none border rounded-xl / / border-black / focus:border focus:border-cyan-500`,
    title: `relative / block / p-2 / text-2xl font-bold`,
    button: `relative / block / p-2 border rounded-xl / / border-black`,
    icon: `relative / inline-block / p-2 rounded-full / hover:bg-gray-200`
  }
  const [isLogin, setIsLogin] = useState(true);
  const [loginVar, setLoginVar] = useState({ email: '', password: '' })
  const [signupVar, setSignupVar] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()
  const handleInputLogin = (e, inputName) => {
    const value = e.target.value
    if (inputName === "email") {
      setLoginVar(prev => { return { ...prev, email: value } })
    } else if (inputName === "password") {
      setLoginVar(prev => { return { ...prev, password: value } })
    }
  }
  const handleInputSignup = (e, inputName) => {
    const value = e.target.value
    if (inputName === "name") {
      setSignupVar(prev => { return { ...prev, name: value } })
    } else if (inputName === "email") {
      setSignupVar(prev => { return { ...prev, email: value } })
    } else {
      setSignupVar(prev => { return { ...prev, password: value } })
    }
  }
  const handleLogin = async () => {
    const res = await auth.login(loginVar.email, loginVar.password);
    if (res.status === 200) {
      localStorage.setItem("token", res.token)
      navigate('/')
    }
  }
  const handleSignup = async () => {
    const res = await auth.signup(signupVar.name, signupVar.email, signupVar.password)
    if (res.status === 200) {
      setIsLogin(true);
    }
  }


  return (
    <div className="relative / flex justify-center / w-full h-full select-none">
      <div className="relative / flex items-center / w-[350px]  / / ">

        {isLogin ? (
          <div className="relative / flex flex-col flex-1 gap-4 / border px-2 pb-20 rounded-xl / / border-black">
            <h1 className={style.title}>Sign In</h1>
            <input className={style.input} value={loginVar.email} onChange={(e) => handleInputLogin(e, 'email')} placeholder="Email" />
            <input className={style.input} value={loginVar.password} onChange={(e) => handleInputLogin(e, 'password')} placeholder="Password" />

            <button onClick={() => handleLogin()} className={style.button}>Login</button>

            <h1 onClick={(e) => setIsLogin(false)} className="relative / bock / / text-sm text-center underline / cursor-pointer ">you don't have account?</h1>
            <div className="relative / flex flex-col items-center / pt-4">
              <h1>or login with </h1>
              <div>
                <button className={style.icon}> <FcGoogle /></button>
                <button className={style.icon}> <FaFacebook /></button>
                <button className={style.icon}> <AiFillTwitterCircle /></button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative / flex flex-col flex-1 gap-4 / border px-2 pb-20 rounded-xl / / border-black">
            <h1 className={style.title}>Register</h1>
            <input className={style.input} value={signupVar.name} onChange={(e) => handleInputSignup(e, 'name')} placeholder="Name" />
            <input className={style.input} value={signupVar.email} onChange={(e) => handleInputSignup(e, 'email')} placeholder="Email" />
            <input className={style.input} value={signupVar.password} onChange={(e) => handleInputSignup(e, 'password')} placeholder="Password" />
            <button onClick={() => handleSignup()} className={style.button}>Sign Up</button>
            <h1 onClick={(e) => setIsLogin(true)} className="relative / bock / / text-sm text-center underline / cursor-pointer ">you have account?</h1>
          </div>
        )}

      </div>
    </div>
  )
}
export default Login 
