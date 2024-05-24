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
      <Header />
            <div className="container-fluid">
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
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((record) => (
                                    <tr key={record.isbn}>
                                        <td>{record.studentId}</td>
                                        <td>{record.borrowing_date}</td>
                                        <td>{record.return_date}</td>
                                        <td>{record.fine}</td>
                                        
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
