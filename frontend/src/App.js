import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import Loading from './components/Loading'
import { ChatProvider } from './context/chatContext';

function App() {
  //<Route path="/" element={<Loading />} />
  return (
    <div className='h-screen w-screen overflow-hidden / p-2'>
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={
            <ChatProvider>
              <Chat />
            </ChatProvider>}
          />
          <Route path='/' element={<Loading />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
