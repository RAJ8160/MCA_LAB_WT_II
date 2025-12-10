Here is the Step-By-Step explianed how `Hooks` Works in **react js**

---
## Your Folder Structure
/--Project
 |--public 
 |--app
 |--component
   |-UseStateDemo.jsx
   |-UseEffectDemo.jsx or |-Users.jsx
   |-Calculator.jsx
   |-User.jsx
---

### Why we Use useState hook?
* The useState hook is a fundamental hook in react that allow you to add state management to your functional components.
* It lets you Store and Update values that change over time.
* enabling dynamic and interactive user interfaces.

```
import React from 'react'
import { useState } from 'react'

const UseStateDemo = () => {
    const [count, setCount] = useState(0)
    // console.log(useState(5));

    const handleState = () => {
                    setCount(count + 1);
                    console.log("Inner:",count);
                };
    console.log("Ounter:",count);
    return (
        <div className='container' style={{ textAlign: "center" }}>
            <h1>useState Hook!</h1>
            <br />
            <p>Count :{count}</p>
            <button
                className='btn btn-success'
                onClick={handleState}>Increment</button>
        </div>
    )
}

export default UseStateDemo
```
---

# 2. Demonstrate useEffect hook in ReactJS.
`useEffect` is used in React to run side effects in a component.

## ✅ What is a side effect?

* Anything that happens outside the normal UI rendering process, such as:

* Fetching data from an API

* Reading/writing local storage

* Setting up subscriptions (WebSocket, events)

* Running timers (setTimeout, setInterval)

* Updating the document title

* Changing DOM manually

```
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Run once

  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user)=>(
           <Link to={`/user/${user.id}`}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
```

---

# 3. WAP to create a simple calculator using ReactJS
```
import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Simple Calculator</h2>

      <input
        className="form-control"
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <input
      className="form-control"
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <button onClick={() => calculate("+")} className="btn btn-primary m-2">+</button>
      <button onClick={() => calculate("-")} className="btn btn-primary m-2">-</button>
      <button onClick={() => calculate("*")} className="btn btn-primary m-2">*</button>
      <button onClick={() => calculate("/")} className="btn btn-primary m-2">/</button>

      <h3>Result: {result}</h3>
    </div>
  );
}
```

---

# 4. Demonstrate useParams hook in ReactJS to fetch parameters from url.

* If you use this code Make Sure you add Link like above useEffectDemo.jsx.
```
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const { id } = useParams();
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // Run once

  return (
    <>
      <h2>Detail of User with Id :{id}</h2>
      <ul>
          <div style={{ textAlign: "center" }}>
      <h1>User Details</h1>

      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>

      <h3>Address:</h3>
      <p>{user?.address?.street}, {user?.address?.city}</p>
    </div>
      </ul>
    </>
  );
}
```