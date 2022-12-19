import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from 'react-bootstrap/Alert';
import { DeleteContext } from './context/ContextProvider';
const Navbar = () => {
  const { dlttask, setDlttask } = useContext(DeleteContext)
  console.log(dlttask);
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: "#232f3e" }} >
            <Toolbar>

              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: "center" }} >
                Todo App
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        {
          dlttask ? <Alert variant="danger" onClose={() => setDlttask(false)} dismissible>
            <Alert.Heading>Your task remove succesfully</Alert.Heading>

          </Alert> : ""
        }
      </div>
    </>
  )
}

export default Navbar
