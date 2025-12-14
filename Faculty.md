# Faculty CRUD Using Static Array (React)

This file demonstrates **Create, Read, Update, Delete (CRUD)** operations on a **static faculty array** using **React Hooks** and **React Router**. No backend or API is used.

---

## 1. Static Faculty Data

Create a file `faculty.js` to store faculty records.

```js
export const FacultyData = [
  {
    id: 1,
    FirstName: "Aarav",
    Avatar: "https://picsum.photos/id/1005/300/300",
    Email: "aarav.shah@example.com",
    Position: "HOD",
    Phone: "+91 98765 43210",
    Experience: 12
  },
  {
    id: 2,
    FirstName: "Diya",
    Avatar: "https://picsum.photos/id/1011/300/300",
    Email: "diya.patel@example.com",
    Position: "Senior",
    Phone: "+91 91234 56780",
    Experience: 8
  }
  // ...more data
];
```

---

## 2. FacultyDetail.jsx (Add, Edit, Delete, List)

```jsx
import React, { useEffect, useState } from 'react'
import { FacultyData } from './faculty'
import { useNavigate } from 'react-router-dom'

const FacultyDetail = () => {
  const [faculty, setFaculty] = useState([])
  const [FirstName, setFirstName] = useState("")
  const [Email, setEmail] = useState("")
  const [Position, setPosition] = useState("")
  const [Phone, setPhone] = useState("")
  const [Experience, setExperience] = useState(0)
  const [editId, setEditId] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    setFaculty(FacultyData)
  }, [])

  const handleClear = () => {
    setFirstName("")
    setEmail("")
    setPosition("")
    setPhone("")
    setExperience(0)
    setEditId(null)
  }

  const handleSave = () => {
    if (!FirstName || !Email || !Position || !Phone || Experience <= 0) {
      alert('Please fill all fields')
      return
    }

    const facultyData = {
      id: editId ? editId : Date.now(),
      FirstName,
      Email,
      Position,
      Phone,
      Experience,
      Avatar: `https://api.dicebear.com/6.x/initials/svg?seed=${FirstName}`
    }

    if (editId) {
      setFaculty(faculty.map(f => f.id === editId ? facultyData : f))
    } else {
      setFaculty([...faculty, facultyData])
    }

    handleClear()
  }

  const handleEdit = (f) => {
    setFirstName(f.FirstName)
    setEmail(f.Email)
    setPosition(f.Position)
    setPhone(f.Phone)
    setExperience(f.Experience)
    setEditId(f.id)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      setFaculty(faculty.filter(f => f.id !== id))
    }
  }

  return (
    <div className="container mt-4">
      <h3 className="text-center">Faculty List</h3>

      {/* Form */}
      <div className="d-flex gap-2 mb-3 flex-wrap">
        <input className="form-control" placeholder="First Name" value={FirstName} onChange={e => setFirstName(e.target.value)} />
        <input className="form-control" placeholder="Email" value={Email} onChange={e => setEmail(e.target.value)} />
        <input className="form-control" placeholder="Position" value={Position} onChange={e => setPosition(e.target.value)} />
        <input className="form-control" placeholder="Phone" value={Phone} onChange={e => setPhone(e.target.value)} />
        <input className="form-control" type="number" placeholder="Experience" value={Experience} onChange={e => setExperience(Number(e.target.value))} />

        <button className="btn btn-primary" onClick={handleSave}>{editId ? 'Update' : 'Save'}</button>
        <button className="btn btn-secondary" onClick={handleClear}>Clear</button>
      </div>

      {/* Table */}
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map(f => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td><img src={f.Avatar} width={40} height={40} className="rounded-circle" /></td>
              <td>{f.FirstName}</td>
              <td>{f.Email}</td>
              <td>{f.Position}</td>
              <td>{f.Phone}</td>
              <td>{f.Experience} yrs</td>
              <td>
                <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(f)}>Edit</button>{' '}
                <button className="btn btn-sm btn-outline-success" onClick={() => navigate('/view-faculty', { state: f })}>View</button>{' '}
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(f.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FacultyDetail
```

---

## 3. FacultyDemo.jsx (View Faculty Details)

```jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FacultyDemo = () => {
  const { state } = useLocation()
  const faculty = state

  if (!faculty) return <h3>No Faculty Data Found</h3>

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={faculty.Avatar} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Name: {faculty.FirstName}</h5>
        <p>Email: {faculty.Email}</p>
        <p>Position: {faculty.Position}</p>
        <p>Phone: {faculty.Phone}</p>
        <p>Experience: {faculty.Experience} yrs</p>
        <Link to="/faculty" className="btn btn-primary">Go Back</Link>
      </div>
    </div>
  )
}

export default FacultyDemo
```

---

## Summary

* CRUD implemented using **useState**
* Single form for **Add & Update**
* Static data source
* Routing handled via **React Router state**

This setup is ideal for **learning React CRUD concepts** without backend complexity.
