import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [profilePictures, setProfilePictures] = useState('')


  const submit = async (e) => {
    const URL = "http://localhost:8000/usuario/";
    e.preventDefault()
    await axios
      .post(URL, {full_name: fullName, email: email, birthdate: birthdate, profile_img: profilePictures})
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
        Registrar un usuario
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
      <button >Registrar</button>
    </form>
  );
};

export default Register;
