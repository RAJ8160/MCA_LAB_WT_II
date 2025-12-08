import React from 'react'
import FacultyCard from './FacultyCard'

const FacultyData = [
  {
    "FirstName": "Aarav",
    "Avatar": "https://picsum.photos/id/1005/300/300",
    "Email": "aarav.shah@example.com",
    "Position": "HOD",
    "Phone": "+91 98765 43210",
    "Experience": 12
  },
  {
    "FirstName": "Diya",
    "Avatar": "https://picsum.photos/id/1011/300/300",
    "Email": "diya.patel@example.com",
    "Position": "Senior",
    "Phone": "+91 91234 56780",
    "Experience": 8
  },
  {
    "FirstName": "Karan",
    "Avatar": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    "Email": "karan.mehta@example.com",
    "Position": "Junior",
    "Phone": "+91 90012 34567",
    "Experience": 2
  },
  {
    "FirstName": "Simran",
    "Avatar": "https://picsum.photos/id/1025/300/300",
    "Email": "simran.desai@example.com",
    "Position": "Team Lead",
    "Phone": "+91 99887 76655",
    "Experience": 6
  },
  {
    "FirstName": "Rohan",
    "Avatar": "https://picsum.photos/id/1001/300/300",
    "Email": "rohan.khanna@example.com",
    "Position": "Manager",
    "Phone": "+91 90909 80808",
    "Experience": 10
  },
  {
    "FirstName": "Nisha",
    "Avatar": "https://picsum.photos/id/1012/300/300",
    "Email": "nisha.more@example.com",
    "Position": "Senior",
    "Phone": "+91 98123 45678",
    "Experience": 7
  },
  {
    "FirstName": "Vikram",
    "Avatar": "https://picsum.photos/id/1035/300/300",
    "Email": "vikram.nair@example.com",
    "Position": "Assistant",
    "Phone": "+91 93030 22011",
    "Experience": 3
  },
  {
    "FirstName": "Priya",
    "Avatar": "https://picsum.photos/id/1015/300/300",
    "Email": "priya.singh@example.com",
    "Position": "HOD",
    "Phone": "+91 98700 11223",
    "Experience": 11
  },
  {
    "FirstName": "Manav",
    "Avatar": "https://picsum.photos/id/1021/300/300",
    "Email": "manav.trivedi@example.com",
    "Position": "Senior",
    "Phone": "+91 90910 22334",
    "Experience": 9
  },
  {
    "FirstName": "Anjali",
    "Avatar": "https://picsum.photos/id/1033/300/300",
    "Email": "anjali.gupta@example.com",
    "Position": "Junior",
    "Phone": "+91 95050 33778",
    "Experience": 1
  }
]





const Faculty = () => {
  return (
    <div className='container'>
      <h1>This is Faculty Details.</h1>
      <div className='p-3 d-flex flex-row justify-content-between flex-wrap d-grid gap-3'>
        {FacultyData.map((elem) => {
          return <FacultyCard data={elem} />
        })}
      </div>

    </div>
  )
}

export default Faculty