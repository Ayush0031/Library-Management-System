import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await axios.get("http://localhost:5001/api/books/all");
            setBooks(data.data);
        };
        fetchBooks();
    }, []);

    const handleIssueBook = (book) => {
        console.log(book);
        navigate("/bookIssue", { state: { book } });
    };

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
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
                                    <tr key={book.isbn} onClick={() => handleBookClick(book)} style={{ cursor: 'pointer' }}>
                                        <td>{book.isbn}</td>
                                        <td>{book.title}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.qty}</td>
                                        {
                                            book.qty > 0 ? 
                                            <td>
                                                <button className="btn btn-success" onClick={(e) => { e.stopPropagation(); handleIssueBook(book); }}>Issue Book</button>
                                            </td> : 
                                            <td>
                                                <p style={{ color: "red" }}>No books left to issue</p>
                                            </td>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBook && (
                        <>
                            <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
                            <p><strong>Title:</strong> {selectedBook.title}</p>
                            <p><strong>Genre:</strong> {selectedBook.genre}</p>
                            <p><strong>Author:</strong> {selectedBook.author}</p>
                            <p><strong>Publisher:</strong> {selectedBook.publisher}</p>
                            <p><strong>Quantity:</strong> {selectedBook.qty}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
