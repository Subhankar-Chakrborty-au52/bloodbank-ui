import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../../services/API';
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk(
    'auth/login',
    async({role , email, password } , { rejectWithValue }) => {
        try {
            const {data} = await API.post('auth/login' , {role , email , password})

            // store token 
            if(data.success){
                localStorage.setItem('token' , data.token)
                toast.success(data.message);
                // alert("User logged-in successfully")
                setTimeout(() => {
                    window.location.replace("/");
                }, 2000);
            }
            return data ;
        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)

// Register
export const userRegister = createAsyncThunk(
    'auth/register' ,
    async({email , password , name , role , organisationName , hospitalName , website , address , phone} , { rejectWithValue }) => {
        try {
            const { data } = await API.post('auth/register' , {email , password , name , role , organisationName , hospitalName , website , address , phone})

            //store token
            if(data.success){
                alert("User registered successfully");
                // toast.success(data.message);
                
                // Delay the redirect by 2 seconds
                setTimeout(() => {
                    window.location.replace("/login");
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)


// getCurrentUser
export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async({rejectWithValue}) => {
        try {
            const res = await API.get('/auth/current=user');
            if(res?.data){
                return res?.data
            }

        } catch (error) {
            console.log(error)
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)