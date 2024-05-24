import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const [books, setBooks] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        const fetchBooks = async () => {
            const data = await axios.get("http://localhost:5001/api/books/all")
            setBooks(data.data)
        }
        fetchBooks()
    }, [])
    const handleIssueBook = (book) => {
        console.log(book)
        navigate("/bookIssue",{state:{book}})
        
    };

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
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>No of Volumes Available</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.isbn}>
                                        <td>{book.isbn}</td>
                                        <td>{book.title}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.qty}</td>
                                        {
                                            book.qty>0?
                                            <td>
                                            
                                            <button className="btn btn-success" onClick={() => handleIssueBook(book)}>Issue Book</button>
                                            </td>:<td>
                                               <p style={{color:"red"}}>No books left to issue</p>
                                            </td>
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
