import { useState } from "react"
export default function Contador () {

  const [contador, setContador] = useState(0)

  return (
    <div>
      <div className="res">{contador}</div>
      <div className="buttons">
        <button className="btn_01" onClick={()=> setContador(contador + 1)}>+</button>
        <button className="btn_02" onClick={()=> setContador(0)}>0</button>
        <button className="btn_03" onClick={()=> setContador(contador - 1)}>-</button>
      </div>
    </div>
  )
}