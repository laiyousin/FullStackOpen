import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    setClicks({ 
      ...clicks,
      left: clicks.left + 1
    })
  }

  const handleRightClick = () => {
    setClicks({ 
      ...clicks, 
      right: clicks.right + 1 
    })
  }
  // React forbidden "clicks.left ++" or "clicks.right ++", 改變state需要設定state一個新的object, 
  // 若從前一個state來的properties沒有改變, 則在新的object中複製前state中的所有properties, 並設定為新的state。

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App
