import React, { useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Remove, Update_data } from '../redux/action/action';
import { DeleteContext } from './context/ContextProvider';

const Todo = () => {
  const [showeye,setShoweye] = useState(false)
  const [showeyevalue,setShoweyeVale] = useState("")

  const [show, setShow] = useState(false)

    const [update, setUpdate] = useState("")

    const [ind, setInd] = useState("")

  const dispatch = useDispatch()
  const { User_data } = useSelector((state) => state.todoreducer) // get data from redux store

  const {dlttask, setDlttask} = useContext(DeleteContext)

  // delete function
  const remove = (id)=>{
    dispatch(Remove(id))
    console.log(id);
    setDlttask(true)
  }

  const handleShow = (item)=>{
    setShow(true)
    setUpdate(item)
  }

  const handleClose = ()=>{
    setShow(false)
  }

  // update function
  const usertask_update = ()=>{
  dispatch(Update_data(update,ind))
  handleClose()
}
  return (
    <div className='todo_data col-lg-5 mx-auto mt-2'>
      {
        User_data.map((item, index) => {
          return (
            <div className='todo_container mb-2 d-flex justify-content-between align-items-center px-2' key={index} style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }}>
              <li style={{ listStyle: "none" }}>{item}</li>
              <div className='edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center'>
                <EditIcon style={{ color: "#3c40c6", cursor: "pointer" }} onClick={()=>{handleShow(item)
                setInd(index)}} />

                <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={()=>remove(index)} />

                <RemoveRedEyeIcon style={{ color: "#1dd1a1", cursor: "pointer" }} onClick={()=>{setShoweye(true) 
                  setShoweyeVale(item)}}/>
              </div>
            </div>
          )
        })
      }

      {/*mmodel for view */}
      <Modal show={showeye}>
        <Modal.Header>
         <h5>View your Todo</h5>
        </Modal.Header>
        <Modal.Body className='text-center'><h3>{showeyevalue}</h3></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setShoweye(false)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*model for update */}

      <Modal show={show} onHide={handleClose}>
                <h3 className='text-center mt-2'>Update Your Task</h3>
                    <Modal.Header>
                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                        <input name='task' value={update}

                         onChange={(e)=>setUpdate(e.target.value)} className='form-control col-lg-5 mt-2' />
                    </div>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>usertask_update()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
    </div>
  )
}

export default Todo
