import React from "react";
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup.string().required('Enter firstname'),
  lastname: yup.string().required('Enter lastname'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  gender: yup.string().required('Select Gender'),
  city: yup.string().required('City is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const WithHooksForm = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      city: '',
      password: '',
      confirmpassword: '',
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div className="Registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" {...register('firstname')} />
          {errors.firstname && <span className="error">{errors.firstname.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" {...register('lastname')} />
          {errors.lastname && <span className="error">{errors.lastname.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" {...register('email')} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" {...register('gender')}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span className="error">{errors.gender.message}</span>}
        </div>

        <div>
          <Controller name="city"control={control}defaultValue="Mumbai"
          render={({ field }) => (
            <select {...field}>
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </select>
          )} />
          {errors.city && <span className="error">{errors.city.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" {...register('password')} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" id="confirmpassword" name="confirmpassword" {...register('confirmpassword')} />
          {errors.confirmpassword && <span className="error">{errors.confirmpassword.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WithHooksForm;