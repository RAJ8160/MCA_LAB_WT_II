Here We Do Step-By-Step CRUD in Static Array Of Student

---
## First make Static Array for Display data
```
export const data = [
    {
        "id":1,
        "name":'Raj Rabadiya',
        "avatar":"https://api.dicebear.com/6.x/initials/svg?seed=RajRabadiya",
        "rollNumber":101,
        "age":19,
        "course":"B.Tech."
    },
    {
        "id":2,
        "name":'Kavyam',
        "avatar":"https://api.dicebear.com/6.x/initials/svg?seed=Kavyam",
        "rollNumber":102,
        "age":19,
        "course":"B.Tech."
    },
    {
        "id":3,
        "name":'Mayur Bhai',
        "avatar":"https://api.dicebear.com/6.x/initials/svg?seed=MayurBhai",
        "rollNumber":103,
        "age":20,
        "course":"MCA"
    }
]
```
---
## Select All Student Data
```
import React, { useEffect, useState } from 'react'
import { data } from "./stuData.js"
const StudentDetail = () => {
    const [student, setStudent] = useState([]);

     useEffect(() => {
        setStudent(data);
    }, [])

return (
        <div>
          <h1 className='text-center'>Student List</h1>
            <table className="table table-hover border table-border text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Avatar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((elem, key) => (
                        <tr key={key}>
                            <td scope="row">{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.rollNumber}</td>
                            <td>{elem.age}</td>
                            <td>{elem.course}</td>
                            <td>
                                <img src={elem.avatar} className='rounded-circle' style={{ width: "40px", height: "40px" }} />
                            </td>
                            <td>
                                <div className='d-flex gap-2 justify-content-center'>
                                    <button type="button" className="btn btn-outline-primary" onClick={()=>handleEdit(elem)}>Edit</button>
                                    <button type="button" className="btn btn-outline-success" onClick={() => navigate("/view-student", { state: elem })}>View</button>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(elem.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentDetail

```
---
# Delete Esxisting Student Data
* First Write Delete logic using Student Id
```
 const handleDelete = (id) => {
        if (window.confirm(`You are sure to delete This ${id}`)) {
            const updated = student.filter(s => s.id !== id);
            setStudent(updated);
        }
    }
```
* This function called when Some one click on `Delet` Button
```
<button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(elem.id)}>Delete</button>
```
---
# Update Student and Add Student
* We use same form for updation and addition operation
* here we past This code in above of table
* write logic for Edit and Save and Clear Button
* we create different useState for all field of Student for add ,Edit
```
const StudentDetail = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [rollNumber,setRollNumber] = useState(0);
    const [course,setCourse] = useState("");
    const [avatar, setAvatar] = useState("");
    const [editId, setEditId] = useState(null); // for editing


 const handleClear = () => {
        setAge(0);
        setCourse('');
        setName('');
        setRollNumber(0);
        setAvatar('');
        setEditId(null);
    }

    const handleSave = () => {
        if (!name || !rollNumber || !age || !course) {
            alert("Please fill all fields!");
            return;
        }

        const studentData = {
            id: editId ? editId : student.length+1,
            name,
            rollNumber,
            age,
            course,
            avatar: `https://api.dicebear.com/6.x/initials/svg?seed=${name}`
        }

        if (editId) {
            // update existing
            const updated = student.map(s => s.id === editId ? studentData : s);
            setStudent(updated);
        } else {
            // add new
            setStudent([...student, studentData]);
        }

        handleClear();
    }

    const handleEdit = (s) => {
        setName(s.name);
        setRollNumber(s.rollNumber);
        setAge(s.age);
        setCourse(s.course);
        setAvatar(s.avatar);
        setEditId(s.id);
    }

return (
<div>
 <div className='d-flex gap-2 mb-3'>
                <div>
                    <label>Name :</label>
                    <input type="text" placeholder='Enter First Name' onChange={(e)=>{setName(e.target.value); setAvatar(`https://api.dicebear.com/6.x/initials/svg?seed=${e.target.value}`)}} value={name}/>
                </div>
                <div>
                    <label>Roll Number :</label>
                    <input type="Number" placeholder='Enter Roll Number'  onChange={(e)=>setRollNumber(e.target.value)} value={rollNumber}/>
                </div>
                <div>
                    <label>Age :</label>
                    <input type="Number" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} value={age} />
                </div>
                <div>
                    <label>Course :</label>
                    <input type="text" placeholder='Enter Course'  onChange={(e)=>setCourse(e.target.value)} value={course} />
                </div>
                <div className='d-flex flex-column justify-content-end'>
                    <button type="button" className="btn btn-outline-primary mb-1" onClick={handleSave}>{editId ? "Update" : "Save"}</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleClear}>Clear</button>
                </div>
            </div>

            //This is Table Component
            <table className="table table-hover border table-border text-center">
            {*/ Select All Data/*}
            </table>

</div>
)
}
```
---
# We want  Student Detail GetById
* We use `useNavigate()` for navigate user from `StudentDetail.jsx` to `StudentDemo.jsx`
* put `View` button in table and pass data of student as state
```
<button type="button" className="btn btn-outline-success" onClick={() => navigate("/view-student", { state: elem })}>View</button>
```
# Code of StudentDemo.jsx
```
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const StudentDemo = (props) => {
    const { state } = useLocation();  // <-- receives elem
    const student = state;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={student.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name : {student.name}</h5>
                <p className="card-text">Roll Number:{student.rollNumber}</p>
                <p className="card-text">Roll Number:{student.age}</p>
                <p className="card-text">Roll Number:{student.course}</p>
                <Link to="/student" className="btn btn-primary">Go Back</Link>
            </div>
        </div>
    )
}

export default StudentDemo
```
* we get data using `useLocation()` and display this data 


