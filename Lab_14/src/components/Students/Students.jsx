import React from 'react'
import StudentCard from './StudentCard'
const StudentsData = [
    {
        "Name": "Aarav Shah",
        "RollNumber": "STU001",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=AaravShah",
        "Address": "12 Green Park Society",
        "Phone": "+91 98765 10001",
        "Year": "1st Year",
        "City": "Ahmedabad"
    },
    {
        "Name": "Diya Patel",
        "RollNumber": "STU002",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=DiyaPatel",
        "Address": "45 Sunrise Residency",
        "Phone": "+91 98765 10002",
        "Year": "2nd Year",
        "City": "Surat"
    },
    {
        "Name": "Rohan Mehta",
        "RollNumber": "STU003",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=RohanMehta",
        "Address": "78 Harmony Apartment",
        "Phone": "+91 98765 10003",
        "Year": "3rd Year",
        "City": "Vadodara"
    },
    {
        "Name": "Kritika Desai",
        "RollNumber": "STU004",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=KritikaDesai",
        "Address": "22 Lotus Avenue",
        "Phone": "+91 98765 10004",
        "Year": "Final Year",
        "City": "Rajkot"
    },
    {
        "Name": "Harsh Verma",
        "RollNumber": "STU005",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=HarshVerma",
        "Address": "90 Hill View",
        "Phone": "+91 98765 10005",
        "Year": "2nd Year",
        "City": "Jamnagar"
    },
    {
        "Name": "Priya Nair",
        "RollNumber": "STU006",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=PriyaNair",
        "Address": "5 Marine Residency",
        "Phone": "+91 98765 10006",
        "Year": "1st Year",
        "City": "Mumbai"
    },
    {
        "Name": "Yash Kumar",
        "RollNumber": "STU007",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=YashKumar",
        "Address": "34 Green Valley",
        "Phone": "+91 98765 10007",
        "Year": "3rd Year",
        "City": "Pune"
    },
    {
        "Name": "Sneha Joshi",
        "RollNumber": "STU008",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=SnehaJoshi",
        "Address": "77 Maple Residency",
        "Phone": "+91 98765 10008",
        "Year": "Final Year",
        "City": "Nashik"
    },
    {
        "Name": "Aditya Gupta",
        "RollNumber": "STU009",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=AdityaGupta",
        "Address": "18 Silver Heights",
        "Phone": "+91 98765 10009",
        "Year": "2nd Year",
        "City": "Indore"
    },
    {
        "Name": "Riya Singh",
        "RollNumber": "STU010",
        "avatar": "https://api.dicebear.com/6.x/initials/svg?seed=RiyaSingh",
        "Address": "55 Lake View",
        "Phone": "+91 98765 10010",
        "Year": "1st Year",
        "City": "Bhopal"
    }
]
const Students = () => {
    return (
        <div className='container'>
            <div><h1>This is Students Details</h1></div>
            <div className='p-3 d-flex flex-row justify-content-between flex-wrap d-grid gap-3'>
                {StudentsData.map(function getDetail(elem) {
                    return (
                        <StudentCard stuData={elem} />
                    )
                })}
            </div>
        </div>
    )
}

export default Students