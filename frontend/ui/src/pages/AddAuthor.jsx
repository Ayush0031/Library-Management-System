import React from 'react'

export default function AddAuthor() {
  const [formData, setFormData] = useState({
    authorId: '',
    name: '',
    address: '',
    email: '',
    borrowed_books: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.authorId || !formData.name || !formData.address || !formData.email) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('/api/author', formData);
      if (response.status === 201) {
        setSuccess('Author added successfully!');
        setFormData({
          authorId: '',
          name: '',
          address: '',
          email: '',
          borrowed_books: '',
        });
      }
    } catch (err) {
      setError('Failed to add student. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Author</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Author ID:</label>
          <input
            type="text"
            name="authorId"
            value={formData.authorId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
};

