import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
export default function Home() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const data = await axios.get("http://localhost:5001/api/books/all")
            setBooks(data.data)
        }
        fetchBooks()
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
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Details</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.isbn}>
                                        <td>{book.isbn}</td>
                                        <td>{book.title}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.details}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => handleIssueBook(book.isbn)}>Issue Book</button>
                                        </td>
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
