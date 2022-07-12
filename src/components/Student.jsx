import React, { useState } from "react";

export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const student = { name, address };

  async function submitStudent(e) {
    e.preventDefault();
    const result = await fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    console.log(result);
    setName("");
    setAddress("");
  }

  const [students, setStudents] = useState({});

  async function getStudentsList() {
    try {
      const result = await fetch("http://localhost:8080/student/getStudents");
      const data = await result.json();
      setStudents(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className="student-form">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            submitStudent(e);
            getStudentsList();
          }}
        >
          submit
        </button>
      </form>
      <div>
        <h2>Students List</h2>
        <ul>
          {students.forEach((std) => {
            <li>Name: {std.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
