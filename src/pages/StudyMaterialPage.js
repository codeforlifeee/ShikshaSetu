
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudyMaterialPage = () => {
  const [materials, setMaterials] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchMaterials = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5000/api/materials', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMaterials(response.data);
    } catch (err) {
      console.error('Error fetching materials:', err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      const token = localStorage.getItem('authToken');
      await axios.post('http://localhost:5000/api/materials', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchMaterials(); // Refresh materials after upload
    } catch (err) {
      console.error('Error uploading material:', err);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div>
      <h1>Study Materials</h1>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>

      <h2>Uploaded Materials</h2>
      <ul>
        {materials.map((material) => (
          <li key={material._id}>
            <h3>{material.title}</h3>
            <p>{material.description}</p>
            <a href={`http://localhost:5000/${material.file}`}>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyMaterialPage;
