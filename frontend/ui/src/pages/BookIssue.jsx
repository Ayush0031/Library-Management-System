import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
export default function BookIssue(props) {
    const location = useLocation();
    const book = location.state.book;
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const getReturnDate = () => {
        const returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 14);
        return returnDate.toISOString().split('T')[0];
    };
    const [returnDate,setReturnDate]=useState(getReturnDate());
    const handleReturnDate=(e)=>{
        e.preventDefault();
        const newReturnDate = new Date(returnDate);
        newReturnDate.setDate(newReturnDate.getDate() + 7);
        const newReturnDateStr = newReturnDate.toISOString().split('T')[0];
        setReturnDate(newReturnDateStr);
        setValue('returnDate', newReturnDateStr)
    }
    useEffect(()=>{
    
    },[returnDate])

    const onSubmit = async (data) => {
        const records={
            studentId:data.studentId,
            isbn:book.isbn,
            issueDate:data.issueDate,
            returnDate:data.returnDate
        }
        console.log(data);
        await axios.post("http://localhost:5001/api/records/issue",records)
        .then(()=>{
            alert("book issued to student ->"+data.name)
        }).catch((error)=>{
            alert(error)
        })
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div style={inputContainer}>
                                <label htmlFor="studentId" style={labelStyle}>Student ID</label>
                                <input required style={inputStyle} id="studentId" {...register("studentId", { required: true })} placeholder="Student ID" />
                              
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="studentName" style={labelStyle}>Student Name</label>
                                <input required style={inputStyle} id="studentName" {...register("name", { required: true })} placeholder="Name" />
                               
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="email" style={labelStyle}>Email</label>
                                <input required style={inputStyle} id="email" {...register("email", { required: true })} placeholder="Email" />
                              
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={inputContainer}>
                                <label htmlFor="isbn" style={labelStyle}>ISBN</label>
                                <input  readOnly value={book.isbn} required style={inputStyle} id="isbn" {...register("isbn", { required: true })} placeholder="ISBN" />
                              
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="bookName" style={labelStyle}>Book Name</label>
                                <input  readOnly value={book.title} required style={inputStyle} id="bookName" {...register("bookName", { required: true })} placeholder="Book Name" />
                               
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="issueDate" style={labelStyle}>Issue Date</label>
                                <input
                                    style={inputDateStyle}
                                    id="issueDate"
                                    defaultValue={getTodayDate()}
                                    {...register("issueDate")}
                                    placeholder="Issue Date"
                                    readOnly
                                />
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="returnDate" style={labelStyle}>Return Date</label>
                                <input
                                    style={inputDateStyle}
                                    id="returnDate"
                                    value={returnDate}
                                    {...register("returnDate")}
                                    placeholder="Return Date"
                                    readOnly
                                />
                                
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleReturnDate} style={{marginLeft:"100px"}} >Add 7 more days</button>
                        </div>
                    </div>
                    <div style={submitContainer}>
                        <input type="submit" style={submitButtonStyle} value="Issue Book" />
                    </div>
                </div>
            </form>
        </>
    );
}

const formStyle = {
    maxWidth: '800px',
    margin: '0 auto',
};

const inputContainer = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const inputStyle = {
    padding: '10px',
    marginLeft: '10px',
    flex: '1',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    
};

const inputDateStyle = {
    padding: '10px',
    marginLeft: '10px',
    flex: '1',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const labelStyle = {
    fontWeight: 'bold',
    width: '120px',
};

const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginLeft: '10px',
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

const submitContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};
