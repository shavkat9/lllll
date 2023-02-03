import { useState } from "react"

export const App = () => {
  const [count, setcount] = useState(0)
  const handleClick = () => {
    setcount(current => current + 1)
  }
  return(
    <div>
      <div style={{
        backgroundColor: count > 0 ? 'line' : 'salmon', 
        color: count > 2 ? 'white' : null,
      }}
      >Count: {count}<div>
        <button onClick={handleClick}></button>
      </div>

      </div>
    </div>
  )
}