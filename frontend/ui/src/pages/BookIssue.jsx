import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';

export default function BookIssue() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add logic to handle form submission (e.g., issue the book)
    };

    return (
        <>
        <Header/>
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <div style={inputContainer}>
                <input style={inputStyle} defaultValue="" {...register("studentId")} placeholder="Student ID" />
            </div>
            <div style={inputContainer}>
                <input style={inputStyle} defaultValue="" {...register("name")} placeholder="Name" />
                {errors.name && <span style={errorStyle}>This field is required</span>}
            </div>
            <div style={inputContainer}>
                <input style={inputStyle} defaultValue="" {...register("email")} placeholder="Email" />
                {errors.email && <span style={errorStyle}>This field is required</span>}
            </div>
            <div style={inputContainer}>
                <input style={inputStyle} defaultValue="" {...register("isbn")} placeholder="ISBN" />
                {errors.isbn && <span style={errorStyle}>This field is required</span>}
            </div>
            <div style={inputContainer}>
                <input style={inputStyle} defaultValue="" {...register("bookName")} placeholder="Book Name" />
                {errors.bookName && <span style={errorStyle}>This field is required</span>}
            </div>
            <input type="submit" style={submitButtonStyle} />
        </form>
        </>
    );
}
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
};

const inputContainer = {
    marginBottom: '10px',
};

const inputStyle = {
    padding: '10px',
    width: '100%',
};

const errorStyle = {
    color: 'red',
    fontSize: '12px',
};

const submitButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
};

