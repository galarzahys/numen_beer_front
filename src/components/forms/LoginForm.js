import React, { useState } from 'react'
import {Formik} from 'formik'
import { postReq } from '../../helpers/ReqToApi'
import './form.css';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';
import { useNavigate } from 'react-router-dom'
import Inputs from './Inputs'
import AlertForm from '../AlertForm'

const LoginForm = () => {

    const [ {user}, dispatch ] = useStateValue(); 

    const [alert, setAlert] = useState({})
    const navigate = useNavigate()

    const handleLogin = async (values) => {

        try {
            const {data} = await postReq('/auth/login', values)
            const {id, firstName, lastName, email, image, roleId } = data.subject
            
            localStorage.setItem("dataUser", JSON.stringify({id, firstName, lastName, email, image, roleId}))

            dispatch({
                type: actionTypes.SET_USER,
                user: {id, firstName, lastName, email, image, roleId},
              })

              navigate("/")
            
        } catch (error) {
            setAlert({
                msg: "El usuario o contraseña son incorrectos."
            })
            setTimeout(() =>{
                setAlert({})
            }, 5000)

            console.log(error)
        }
            
    }


  return (
            <>
                <Formik
                initialValues={{
                    email: '',
                    password: '',

                }}

                validate={({email, password}) => {
                    const errors = {}

                    if(!email) errors.email = 'Ingresa un email válido.'

                    if(!password){
                        errors.password = 'La contraseña debe tener al menos 6 caracteres.'

                    }
                    else if(password.length < 6){

                        errors.password = 'La contraseña debe tener al menos 6 caracteres.'
                    
                    }

                    return errors
                }}

                onSubmit={handleLogin}
                
                >

                    {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (

                        <form className="form" onSubmit={handleSubmit}>

                            <Inputs
                            error={errors.email}
                            touched={touched.email}
                            label="Email"
                            type="email" 
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            />


                            <Inputs
                                error={errors.password}
                                touched={touched.password}
                                label="Contraseña"
                                type="password" 
                                name='password'
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                                />

                            <button className="button-primary" type="submit">Iniciar sesión</button>
                            <div>
                                {alert.msg && <AlertForm error={alert.msg}/>}
                            </div>
                        </form>

                    )}

                </Formik>
                
                {/* add the register path when ready */}
                <div className="dont_have_account">
                    <p >¿No tienes una cuenta? <span onClick={()=>navigate('/registrate')}>Registrate</span></p>
                </div>

            </>
  )
}

export default LoginForm