import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
export default function Records() {
    const [records,setRecords]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchRecords = async () => {
            const data = await axios.get("http://localhost:5001/api/records/all")
            setRecords(data.data)
            console.log(data)
        }
        fetchRecords()
    }, [])
  return (
    <>
     <Header/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <Table striped bordered hover>
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ISBN</th>
                                    <th>STUDENT ID</th>
                                    <th>ISSUED DATE</th>
                                    <th>RETURN DATE</th>
                                    <th>FINE</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((record) => (
                                        <tr key={record._id}>
                                        <td>{record.isbn}</td>
                                        <td>{record.studentId}</td>
                                        <td>{record.borrowing_date}</td>
                                        <td>{record.return_date}</td>
                                        <td>{record.fine}</td>
                                        {
                                            record.return_status==="Pending"?<td style={{color:"red",fontSize:"20px"}}>{record.return_status} <button className="btn btn-danger">Return Book</button></td>
                                            :<td style={{color:"green"}}>{record.return_status}</td>
                                        }
                                        
                                        
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
    </>
  )
}
