/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const {id} = useParams()

    useEffect(() => {
        const URL = `http://localhost:8000/usuario/${id}/`
        axios.get(URL)
        .then(res => {
          setFullName(res.data.full_name)
          setEmail(res.data.email)
          setBirthdate(res.data.birthdate)
          setProfilePictures(res.data.profile_img)
        })
    }, [])
    
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [profilePictures, setProfilePictures] = useState('')


  const submit = async (e) => {
    const URL = `http://localhost:8000/usuario/${id}/`;
    e.preventDefault()
    await axios
      .put(URL, {full_name: fullName, email: email, birthdate: birthdate, profile_img: profilePictures})
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <form onSubmit={submit}>
      <h3 >
        Actualizar un usuario
      </h3>
      <ul >
        <li >
          <label htmlFor="login-fullName">Nombre completo:</label>
          <input type="text" id="login-fullName" value={fullName} onChange={ (e) => setFullName(e.target.value)}/>
        </li>
        <li >
          <label htmlFor="login-email">Correo:</label>
          <input type="email" id="login-email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </li>
        <li >
          <label htmlFor="login-birthdate">Fecha de nacimiento:</label>
          <input type="date" id="login-birthdate" value={birthdate} onChange={ (e) => setBirthdate(e.target.value)}/>
        </li>
        <li >
          <label htmlFor="login-imgProfile">Imagen de perfil:</label>
          <input type="url" id="login-imgProfile" value={profilePictures} onChange={ (e) => setProfilePictures(e.target.value)}/>
        </li>
      </ul>
      <button >Actualizar</button>
    </form>
  )
}

export default Update