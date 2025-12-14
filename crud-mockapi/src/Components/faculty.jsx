import React, { useEffect, useState } from "react";

function Faculty() {
  const API_URL = "https://693d4a39f55f1be793026821.mockapi.io/faculty";

  const [faculties, setFaculties] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
  });
  const [editId, setEditId] = useState(null);

  /* =========================
     READ (GET)
  ========================== */
  const fetchFaculties = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setFaculties(data);
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  /* =========================
     CREATE & UPDATE
  ========================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      // UPDATE (PUT)
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } else {
      // CREATE (POST)
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }

    setFormData({ name: "", email: "", department: "", designation: "" });
    setEditId(null);
    fetchFaculties();
  };

  /* =========================
     DELETE
  ========================== */
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchFaculties();
    }
  };

  /* =========================
     EDIT (Prefill Form)
  ========================== */
  const handleEdit = (faculty) => {
    setFormData({
      name: faculty.name,
      email: faculty.email,
      department: faculty.department,
      designation: faculty.designation,
    });
    setEditId(faculty.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Faculty CRUD – Single File (MockAPI)</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Designation"
          value={formData.designation}
          onChange={(e) =>
            setFormData({ ...formData, designation: e.target.value })
          }
        />

        <button type="submit">
          {editId ? "Update Faculty" : "Add Faculty"}
        </button>
      </form>

      <hr />

      {/* TABLE */}
      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((f) => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.email}</td>
              <td>{f.department}</td>
              <td>{f.designation}</td>
              <td>
                <button onClick={() => handleEdit(f)}>Edit</button>
                <button onClick={() => handleDelete(f.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Faculty;
