import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import axios from 'axios';

export default function ReturnBook() {
    const location = useLocation();
    const record = location.state.record;
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    const [fine, setFine] = useState(0);
    const [days,setDays]  = useState(0);
    const calculateFine = (actualReturnDate) => {
        const returnDate = new Date(record.return_date);
        const actualDate = new Date(actualReturnDate);
        if (actualDate > returnDate) {
            const diffTime = actualDate - returnDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setFine(diffDays * 50);
            setDays(diffDays);
        } else {
            setFine(0);
        }
    };

    const actualReturnDate = watch('actualReturnDate');

    useEffect(() => {
        if (actualReturnDate) {
            calculateFine(actualReturnDate);
        }
    }, [actualReturnDate]);

    useEffect(() => {
        setValue("fine", fine);
    }, [fine, setValue]);

    const onSubmit =async (data) => {
        const rec={
            isbn:record.isbn,
            actualReturnDate:actualReturnDate,
            fine:fine
        }
        console.log(data);
        await axios.post("http://localhost:5001/api/records/return",rec)
        .then(()=>{
            alert("book returned successfully")

        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div style={inputContainer}>
                                <label htmlFor="studentId" style={labelStyle}>Student ID</label>
                                <input readOnly value={record.studentId} style={inputStyle} id="studentId" {...register("studentId", { required: true })} placeholder="Student ID" />
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="issueDate" style={labelStyle}>Issued Date</label>
                                <input
                                    style={inputDateStyle}
                                    id="issueDate"
                                    defaultValue={record.borrowing_date}
                                    {...register("issueDate")}
                                    placeholder="Issue Date"
                                    readOnly
                                />
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="returnDate" style={labelStyle}>Expected Return Date</label>
                                <input
                                    style={inputDateStyle}
                                    id="returnDate"
                                    defaultValue={record.return_date}
                                    {...register("returnDate")}
                                    placeholder="Return Date"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div style={inputContainer}>
                                <label htmlFor="isbn" style={labelStyle}>ISBN</label>
                                <input readOnly value={record.isbn} style={inputStyle} id="isbn" {...register("isbn", { required: true })} placeholder="ISBN" />
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="actualReturnDate" style={labelStyle}>Actual Return Date</label>
                                <input
                                    style={inputDateStyle}
                                    id="actualReturnDate"
                                    type="date"
                                    defaultValue={getTodayDate()}
                                    {...register("actualReturnDate", { required: true })}
                                    placeholder="Actual Return Date"
                                />
                            </div>
                            <div style={inputContainer}>
                                <label htmlFor="fine" style={labelStyle}>Fine</label>
                                <input
                                    style={inputDateStyle}
                                    id="fine"
                                    value={fine}
                                    {...register("fine")}
                                    readOnly
                                />
                                
                            </div>
                            {fine>=1?<p style={{color:"red",marginLeft:"100px"}}>Fine for {days} days ₹50/day </p>:""}
                        </div>
                    </div>
                    <div style={submitContainer}>
                        <input type="submit" style={submitButtonStyle} value="Return Book" />
                    </div>
                </div>
            </form>
        </div>
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
