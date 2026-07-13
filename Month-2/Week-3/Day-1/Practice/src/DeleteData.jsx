import React from 'react'
import { useState } from 'react'

function DeleteData() {
    const [users, setUsers] = useState([
        { id: 1, name: "Amit", age: 21 },
        { id: 2, name: "Nitya", age: 24 },
        { id: 3, name: "Priya", age: 20 },
    ]);

    const handleDelete = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };
  return (
    <div style={{ width: "700px", margin: "30px auto" }}>
        <h2>User List</h2>

       {users.length === 0 ? (
        <h3>No users available.</h3>
      ) : (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      )}  
    </div>
  )
}

export default DeleteData
