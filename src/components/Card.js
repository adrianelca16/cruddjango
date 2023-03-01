/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({fullName, email, birthdate, id, imgProfile, setUsersState, usersState}) => {
    

    const navigate = useNavigate()

    
    
    const deleteUser = () => {
      const URL = `http://localhost:8000/usuario/${id}/`
        axios.delete(URL)
        .then(res => setUsersState(!usersState))
    }

    const goUpdate = () =>{
      navigate(`/update/${id}`)
  }
    
  return (
    <div> 
        <p>{fullName}</p>
        <p>{email}</p>
        <p>{birthdate}</p>
        <p>{imgProfile}</p>
        <button onClick={goUpdate}>Update</button>
        <button onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default Card