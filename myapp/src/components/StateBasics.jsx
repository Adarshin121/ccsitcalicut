import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,Setname]=useState("Adarshin")
    var[val,setVal] = useState()
    
    const Handleinput =(e)=>{
        console.log(e.target.value)
        Setname(e.target.value)

    }
    const submitHandler =()=>{
      console.log("clicked")
      setVal(name)


    }
  return (
    <div>
            <Typography variant='h3'>welcome {val}</Typography>
            <TextField variant='outlined' onChange={Handleinput}/>
            <Button variant="contained" onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default StateBasics