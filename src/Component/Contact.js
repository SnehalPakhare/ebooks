import { useState } from "react";

function Contact(){

    const[error,setError]=useState({});

const[formdata,setformdata]=useState({
"uname":'',
"email":'',
"password":'',
"address":'',
"country":'USA',
"subscribe":false
});

const handlechange=(event)=>{
   setformdata({
        ...formdata,
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
}
    const handlesubmit = (event) => {
        event.preventDefault();
        let errors = {};

        if (formdata.uname === '' || formdata.uname === null) {
            errors.uname = 'Name can not be blank or null';
        }

        if (formdata.password.length <= 3 || formdata.password.length >= 9||formdata.password===''||formdata.password===null) {
            errors.password = 'Password should be in range or cant be blank';
        }

        if (formdata.subscribe === false) {
            errors.subscribe = 'Please Subscribe';
        }

        setError(errors);

    };

    return(
        <>
            <p>Contact</p>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="enter name"
                    name="uname"
                    value={formdata.uname}
                    onChange={handlechange}
                />
                <span style={{color:'red'}}>{error && error.uname}</span>
                <br></br>
                <input type="text" placeholder="enter email"
                    name="email"
                    value={formdata.email}
                    onChange={handlechange}
                /><br></br>
                <input type="text" placeholder="enter password"
                    name="password"
                    value={formdata.password}
                    onChange={handlechange}
                />
                <span style={{color:'red'}}>{error && error.password}</span>
                <br></br>
                <textarea
                    rows={4}
                    cols={10}
                    name="address"
                    value={formdata.address}
                    onChange={handlechange}
                />
                <br></br>
                <select
                    name="country"
                    value={formdata.country}
                    onChange={handlechange}
                >
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="INDIA">INDIA</option>
                    <option value="JAPAN">JAPAN</option>
                </select>
                <br></br>
                <input type="checkbox"
                    name="subscribe"
                    checked={formdata.subscribe}
                    onChange={handlechange}
                /> Subscribe
                <span style={{color:'red'}}>{error && error.subscribe}</span>
                <br></br>
                <button>Submit</button>
            </form>
        </>
    );
}
export default Contact;