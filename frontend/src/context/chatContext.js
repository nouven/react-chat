import { createContext } from 'react'
const chatContext = createContext()
function ChatProvider({ children }) {

  const value = {
    name: 'nouven'
  }
  return (
    <chatContext.Provider value={value}>
      {children}
    </ chatContext.Provider>
  )
}
export { chatContext, ChatProvider }

