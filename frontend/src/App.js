import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './components/Chat'
function App() {
  return (
    <div className='h-screen w-screen overflow-hidden / p-2'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
