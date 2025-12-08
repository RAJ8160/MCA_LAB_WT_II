import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='p-3'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faculties">Faculties</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/students">Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/event">EventEmmiters</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/conditional">ConditionalRendering</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/demo'>PropsDemo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar