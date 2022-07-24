import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
//import io from 'socket.io-client'

//const socket = io.connect("http://localhost:5000");

function App() {
  return (
    <div className='h-screen w-screen overflow-hidden / p-2'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
