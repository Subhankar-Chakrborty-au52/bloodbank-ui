import React, { useState } from 'react';
import InputType from "./InputType";
import {Link} from 'react-router-dom'
import { handleLogin, handleRegister } from '../../services/AuthServices';

function Form({ formType , formTitle , submitBtn}) {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [name , setName] = useState("")
    const [role , setRole] = useState("donar")
    const [organisationName , setOrganisationName] = useState("")
    const [hospitalName , setHospitalName] = useState("")
    const [website , setWebsite] = useState("")
    const [address , setAddress] = useState("")
    const [phone , setPhone] = useState("")

    return (
        <div>
            <form onSubmit={(e)=>{
                if(formType === 'Login')return handleLogin(e , email , password , role);
                else if(formType === 'Register') return handleRegister(e, email , password , name , role , organisationName , hospitalName , website , address , phone)
            }}>
                <h1 className='text-center'>{formTitle}</h1>
                <hr />
            {/* Role radio  */}
            <div className='d-flex mb-2'>
                {/* donar  */}
                <div className="form-check ">
                    <input className="form-check-input"
                        type="radio"
                        name="role"
                        id="donarRadio"
                        value={"donar"}
                        onChange={(e)=>{setRole(e.target.value)}}
                        defaultChecked
                        />
                    <label className="form-check-label" htmlFor="donarRadio">
                    Donar
                    </label>
                </div>

                {/* admin  */}
                <div className="form-check ms-3">
                    <input className="form-check-input"
                        type="radio"
                        name="role"
                        id="adminRadio"
                        value={"admin"}
                        onChange={(e)=>{setRole(e.target.value)}}
                        />
                    <label className="form-check-label" htmlFor="adminRadio">
                    Admin
                    </label>
                </div>

                {/* organisation  */}
                <div className="form-check ms-3">
                    <input className="form-check-input"
                        type="radio"
                        name="role"
                        id="organisationRadio"
                        value={"organisation"}
                        onChange={(e)=>{setRole(e.target.value)}}
                        />
                    <label className="form-check-label" htmlFor="organisationRadio">
                    Organisation
                    </label>
                </div>

                {/* hospital  */}
                <div className="form-check ms-3">
                    <input className="form-check-input"
                        type="radio"
                        name="role"
                        id="hospitalRadio"
                        value={"hospital"}
                        onChange={(e)=>{setRole(e.target.value)}}
                        />
                    <label className="form-check-label" htmlFor="hospitalRadio">
                    Hospital
                    </label>
                </div>
            </div>
        
            {/* switch case  */}
            {(()=>{
                //eslint-disable-next-line
                switch(true){
                  case formType === 'Login' : {
                    return (
                        <>
                            {/* email  */}
                                <InputType 
                                labelText={'Email'}
                                labelFor={"ForEmail"}
                                inputType={'email'}
                                name={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            
                            {/* password  */}
                                <InputType 
                                labelText={'Password'}
                                labelFor={"ForPassword"}
                                inputType={'password'}
                                name={'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />     
                        </>        
                    )
                  }

                case formType === 'Register' : {
                    return (
                        <>
                        {/* name  */}
                        {
                            (role === "donar" || role === "admin") && (
                            <InputType 
                                labelText={'Name'}
                                labelFor={"ForName"}
                                inputType={'text'}
                                name={'name'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            )
                        }

                        {/* email  */}
                            <InputType 
                            labelText={'Email'}
                            labelFor={"ForEmail"}
                            inputType={'email'}
                            name={'email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                        {/* password  */}
                            <InputType 
                            labelText={'Password'}
                            labelFor={"ForPassword"}
                            inputType={'password'}
                            name={'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />

                        {/* organisationName */}
                        {
                            role === 'organisation' && (
                            <InputType 
                                labelText={'Organisation Name'}
                                labelFor={"ForOrganisationName"}
                                inputType={'text'}
                                name={'organisationName'}
                                value={organisationName}
                                onChange={(e) => setOrganisationName(e.target.value)}
                            />
                            )
                        }
                           

                        {/* hospitalName */}
                        {
                            role === "hospital" && (
                            <InputType 
                                labelText={'Hospital Name'}
                                labelFor={"ForHospitalName"}
                                inputType={'text'}
                                name={'hospitalName'}
                                value={hospitalName}
                                onChange={(e) => setHospitalName(e.target.value)}
                            />
                            )
                        }
                           

                        {/* website */}
                            <InputType 
                            labelText={'Website'}
                            labelFor={"ForWebsite"}
                            inputType={'text'}
                            name={'website'}
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            />

                        {/* address */}
                            <InputType 
                            labelText={'Address'}
                            labelFor={"ForAddress"}
                            inputType={'text'}
                            name={'address'}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            />

                        {/* phone */}
                            <InputType 
                            labelText={'Phone'}
                            labelFor={"ForPhone"}
                            inputType={'text'}
                            name={'phone'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </>
                    )
                }
                }
            })()}
        

            

                <div className='d-flex justify-content-between'>
                {
                    formType === 'Login' ? (
                        <p>Not registered yet ? Register
                        <Link to={"/Register"}> Here !</Link>
                        </p>
                    ) : (
                        <p>
                            Already user please
                            <Link to={"/Login"}> Login</Link>
                        </p>
                    )
                }
                    <button className='btn btn-success' type='submit'>
                        {submitBtn}
                    </button>
                </div> 
            </form>
        </div>
    );
}

export default Form;