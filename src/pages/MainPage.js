import { useSelector,useDispatch } from "react-redux"

export default function MainPage() {

    const {counter} = useSelector(state => state)
    const dispatch = useDispatch()
    
   const addBtn = ()=>{
    dispatch({
      type: "INCREMENT"
    })
   }

   const subBtn = ()=>{
    dispatch({
      type: "DECREMENT"
    })
}
  
  console.log(counter)

  return (
    <div>
      <h1 >Сounter: {counter} </h1>
      <button onClick={addBtn} >Добавить</button>
      <button onClick={subBtn} >Отнять</button>
    </div>
  )
}
