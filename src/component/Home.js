import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/action/action';
const Home = () => {
 const dispatch = useDispatch()
  const [data, setData] = useState("")
  
  const inputHandler = (e) => {
    setData(e.target.value)
   
  }

  const addData = () => {
    dispatch(Add(data))
    setData("")
  }
  return (
    <div className='container'>
      <section className='mt-3 text-center'>
        <h3>Enter your task</h3>
        <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
          <input type="text" className='form-control' onChange={inputHandler} value={data}/>
          <Button variant='contained' onClick={addData} style={{ background: "#ee5253" }} className='mx-2'><AddIcon /></Button>
        </div>
        <Todo/>
      </section>
    </div>
  )
}

export default Home
