import React from 'react'
import { useForm } from "react-hook-form";
import './MyForm.css'

const MyForm = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div id='form'>
      <form onSubmit={handleSubmit(onSubmit)} id='frm'>
        <h2 id='heading'> React Form</h2>
        <div className="input">
            <label>First Name : </label>
            <input className='inp' {...register('fname', { required: "First Name is required*" })}/>
            {errors.fname && <p>{errors.fname.message}</p>}
        </div>
        <div className="input">
            <label>Last Name : </label>
            <input className='inp' {...register('lname', { required: "Last Name is required*" })}/>
            {errors.lname && <p>{errors.lname.message}</p>}
        </div>
        <div className="input">
            <label>Email : </label>
            <input type='email' className='inp' {...register('email', { required: "Email is required*" })}/>
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="input">
            <label>Contact Number : </label>
            <input type='tel' className='inp' {...register('contact', { required: "Contact is required*" })}/>
            {errors.contact && <p>{errors.contact.message}</p>}
        </div>
        <div className="input">
            <label>Address : </label>
            <input className='inp' {...register('address', { required: "Address is required*" })}/>
            {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div className='btn'>
            <button id='submit' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MyForm
