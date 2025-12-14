# Library CRUD Operation Using MERN(Mongo DB,Express,React js,Node js)

# First Step Create Two Folders **Server and Client** 
* Server For Backend 
* Client For Frontend

---
# Backend 
* create packeg.json file using `npm init`
* `import nodemon express cors moongose `
* nodemon - **It is use for auto restart Server using this we automaticaly restart our server so we can easily see changis we make in our srever** 
* express - **It is use for routing,create Server,middleware support etc.**
* mongoose - **It use for Schema Creation,Database connection etc.**

# 1 Create index.js in Server folder
```js
// console.log("Hello Word")
const express = require('express');
const databaseConnection = require('./database');
const bookRouter = require('./routes/book.route');
const cors = require('cors');
//database connection
databaseConnection();

const app = express();

app.use(express.json());//This is middleware which use to parse data wich tell our server that we gave json data
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Hello Word");
})

app.use('/book',bookRouter)

app.listen(8000,()=>{
    console.log('Port listening on 8000'); 
})
```
---
# Create Database File and define connection with DataBase

```js
const mongoose = require("mongoose");

const databaseConnection = async()=>{
       await mongoose.connect("mongodb://localhost:27017/bookStore")
       .then(()=>{
        console.log("Database connected successfully !");       
       }).catch((err)=>{
        console.log("Database connection failde ",err);
       });
}

module.exports = databaseConnection;
```
---

# 3 Create MVC Folder Structure 
/--server
 /--controller
  /--book.controller.js
 /--models
  /--book.model.js
 /--routes
  /--book.route.js

# 4 Write code in `book.model.js`
```js
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    BookName:{
        type:String,
        required:true
    },
    BookTitle:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    SellingPrice:{
        type:String,
        required:true
    },
    PublishDate:{
        type:String,
    }
},{timestamps:true});

const Book = mongoose.model("Books",bookSchema);

module.exports = {Book};
```
---
# 5 Write code in `book.route.js`
```js
const express = require("express")
const {handleBookStoreController,handleBookListController,handleDeleteController,handleBookUpdateController,handleGetByIdController} = require('../controllers/book.controller')
const router = express.Router();

router.post('/addbook',handleBookStoreController)
router.get('/booklists',handleBookListController)
router.post('/deletebook',handleDeleteController)
router.put('/updatebook',handleBookUpdateController)
router.get('/getById/:id',handleGetByIdController)
module.exports = router
```

# 6 Write code in `book.controller.js`
```js
const { Book } = require('../Models/book.model')
const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        if (
            !body.BookName ||
            !body.BookTitle ||
            !body.Author ||
            !body.SellingPrice ||
            !body.PublishDate
        ) {
            return res
                .status(400)
                .json({ Message: "All field.s are required", Success: false })
        }

        const bookAdd = await Book.insertOne(body);

        if (bookAdd) {
            return res
                .status(201)
                .json({ Message: "Data created Successfully !", Success: true, Id: bookAdd._id })
        }
        console.log("bookAdd ", bookAdd);
    } catch (err) {
        return res.status(500).json({ Message: err.message, Success: false });
    }
}

const handleBookListController = async (req, res) => {
    try {
        const bookList = await Book.find({});
        return res
            .status(200)
            .json({ Message: "All field's fetched successfully", Success: true, Totalcount: bookList.length, BookList: bookList })
    } catch (error) {
        return res.status(400).json({ Message: err.message, Success: false });
    }
}

const handleDeleteController = async (req, res) => {
    const body = req.body;
    try {
        const deleted = await Book.deleteOne({ _id: body.Id })
        console.log('deleted', deleted);
        if (deleted.acknowledged) {
            return res
                .json({ Message: "Deleted successfully", Success: true })
        }
    } catch (error) {
        return res.status(400).json({ Message: err.message, Success: false });
    }
}

const handleBookUpdateController = async (req, res) => {
    try {
        const body = req.body;
        const updating = await Book.updateOne({ _id: body.Id }, { $set: body });
        console.log("updating ", updating)
        if (updating.acknowledged) {
            return res
                .json({ Message: "Book updated successfully", Success: true })
        }
    } catch (err) {
        return res.status(400).json({ Message: err.message, Success: false });
    }
}

const handleGetByIdController = async (req, res) => {
    try {
        const id = req.params.id;

        const getById = await Book.findById(id);
        console.log("GetById:", getById);

        if (!getById) {
            return res.status(404).json({
                Message: "Data not found",
                Success: false
            });
        }

        return res.json({
            Message: "Data get successfully",
            Data: getById,
            Success: true
        });

    } catch (error) {
        return res.status(400).json({
            Message: error.message,
            Success: false
        });
    }
};

module.exports = { handleBookStoreController, handleBookListController, handleDeleteController, handleBookUpdateController, handleGetByIdController }
```

---

## This is Our Frontend code

---
# 1 Create app using `npm vite@latest client`

---
# 2 Import Tailwind Using Tailwind in react following Steps for React app

---
# 3 Create Home.jsx and Write in it

```jsx
import React, { useEffect, useState } from 'react'
import { bookbaseUrl } from '../axiosInstance';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Home = () => {
    const [bookForm, setBookForm] = useState({
        BookName: "",
        BookTitle: "",
        Author: "",
        SellingPrice: "",
        PublishDate: "",
        Id: ""
    });
    const [bookList, setBookList] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setBookForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    console.log(bookForm)

    const handleSubmit = async () => {
        try {
            if (!isUpdating) {
                if (!bookForm?.BookName || !bookForm.BookTitle || !bookForm.Author || !bookForm.SellingPrice || !bookForm.PublishDate) {
                    alert("All fields are required !");
                    setBookForm({
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                        Id: ""
                    })
                    return;
                }
                const { data } = await bookbaseUrl.post('/addbook', bookForm);
                if (data?.Success) {
                    alert(data?.Message)
                    setBookForm({
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                        Id: ""
                    })
                getAllbookList();

                }
                console.log(data);
            } else {
                const { data } = await bookbaseUrl.put('/updatebook', bookForm);
                if (data?.Success) {
                    alert(data?.Message)
                    setBookForm({
                        BookName: "",
                        BookTitle: "",
                        Author: "",
                        SellingPrice: "",
                        PublishDate: "",
                        Id: ""
                    })
                    getAllbookList();
                    setIsUpdating(false)
                }
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllbookList = async () => {
        try {
            const { data } = await bookbaseUrl.get('booklists')
            setBookList(data?.BookList);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteController = async (id) => {
        try {
            const { data } = await bookbaseUrl.post('deletebook', { Id: id });
            if (data.Success) {
                alert(data.Message)
                getAllbookList();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getBookById = async (id) => {
        try {
            const { data } = await bookbaseUrl.get(`/getById/${id}`);

            if (data?.Success) {
                const book = data.Data;

                // fill form with fetched data
                setBookForm({
                    BookName: book.BookName,
                    BookTitle: book.BookTitle,
                    Author: book.Author,
                    SellingPrice: book.SellingPrice,
                    PublishDate: book.PublishDate,
                    Id: book._id
                });

                setIsUpdating(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllbookList();
    }, [])//empty dependency array
    return (
        <div className='w-full px-5 min-h-[calc(100vh-60px)]'>
            <div className='w-full grid grid-cols-5 gap-3 my-4'>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Book Name</label>
                    <input
                        type="text"
                        placeholder='Book name'
                        name='BookName'
                        value={bookForm.BookName}
                        onChange={handleFormChange}
                        className='w-full border-2 border-gray-300 rounded-sm outline-1 outline-none h-8 px-2 text-gray-800' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Book Title</label>
                    <input
                        type="text"
                        placeholder='Book Title'
                        name='BookTitle'
                        value={bookForm.BookTitle}
                        onChange={handleFormChange}
                        className='w-full border-2 border-gray-300 rounded-sm outline-1 outline-none h-8 px-2 text-gray-800' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Author</label>
                    <input
                        type="text"
                        placeholder='Author'
                        name='Author'
                        value={bookForm.Author}
                        onChange={handleFormChange}
                        className='w-full border-2 border-gray-300 rounded-sm outline-1 outline-none h-8 px-2 text-gray-800' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Selling Price</label>
                    <input
                        type="text"
                        placeholder='Selling Price'
                        name='SellingPrice'
                        value={bookForm.SellingPrice}
                        onChange={handleFormChange}
                        className='w-full border-2 border-gray-300 rounded-sm outline-1 outline-none h-8 px-2 text-gray-800' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Publish Date</label>
                    <input
                        type="date"
                        placeholder='Publish Date'
                        name='PublishDate'
                        value={bookForm.PublishDate}
                        onChange={handleFormChange}
                        className='w-full border-2 border-gray-300 rounded-sm outline-1 outline-none h-8 px-2 text-gray-800' />
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button
                    className='bg-gray-700 text-white h-9 w-22 rounded-md cursor-pointer'
                    onClick={handleSubmit}
                >
                    {isUpdating ? "UPDATE" : "SUBMIT"}
                </button>
            </div>
            <div className='w-full mt-10'>
                <div className='w-full'>
                    <table className='w-full bg-white divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='tracking-wider px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase'>Book Name</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase'>Book Title</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase'>Author</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase'>Selling Price</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase'>Publish Date</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {
                                bookList.map((book, index) => (
                                    <tr className='hover:bg-gray-200' key={index}>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.BookName}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.BookTitle}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.Author}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.SellingPrice}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.PublishDate}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>
                                            <div className='flex gap-2'>

                                                <div
                                                    className='h-8 w-8 flex justify-center items-center bg-red-50 text-red-600 cursor-pointer rounded'
                                                    onClick={() => handleDeleteController(book._id)}
                                                >
                                                    <MdDelete />
                                                </div>

                                                <div
                                                    className='h-8 w-8 flex justify-center items-center bg-green-50 text-green-600 cursor-pointer rounded' onClick={() => getBookById(book._id)}
                                                >
                                                    <CiEdit />
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default Home
```
---
# 4 import axios for api fetch from backend it is third party tool which is populare in now days.

* Create axios Instance.js
```js
import axios from 'axios';

export const bookbaseUrl = axios.create({
    baseURL : "http://localhost:8000/book/"
});

```

---
# Create Navbar.jsx and Write in this

```jsx
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-20 items-center shadow px-5 bg-gray-50'>
        <div className='w-[10%] h-full flex items-center'>
            <h1 className='font-bold text-zinc-800'>LOGO</h1>
        </div>
        <div className='w-[50%]'>
            <ul className='w-full flex gap-6 list-none items-center font-medium text-zinc-800 cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
```
