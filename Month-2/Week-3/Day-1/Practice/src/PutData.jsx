import React from 'react'
import { useState } from 'react'

function PutData() {
    const [formData, setFormData] = useState({
        name: "",
        age: 0
    });

    const [user, setUser] = useState({
        name: "Amit",
        age: 21
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setUser(formData);

        setFormData({
            name: "",
            age: 0
        })
    }

  return (
    <div style={{width: "400px", margin: "30px auto"}}>
      
      <h2>React Update Form</h2>
      <form onSubmit={handleUpdate}>
      <label>Name:</label>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br/>

        <label> Age: </label>
        <input
            type='number'
            name='age'
            value={formData.age}
            onChange={handleChange}
            required
        />
        <br />

        <button type='submit'>
            Update
        </button>

      </form>
      <hr />

      <h3>Updated User Details</h3>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  )
}

export default PutData
