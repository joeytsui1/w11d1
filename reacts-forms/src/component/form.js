import React, {useState, useRef} from 'react'

function Form(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        signUp: ""
    })

    const [errors, setErrors] = useState([])

    const validate = () => {
        let errors = [];
        if (user.name.length === 0) {
            errors.push("Name can't be blank")
        }
        if (!user.email) {
            errors.push("Invalid email")
        }

        if(!user.phoneNumber) {
            errors.push("Phone number cant be blank")
        }

        if (user.phoneNumber && !(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(user.phoneNumber))) {
            errors.push("Invalid Phone Number")
        }

        if (user.phoneNumber && !user.phoneType) {
            errors.push("Phone type must present")
        }
        if (user.bio.length > 280) {
            errors.push("Max 280 characters")
        }
    }

    const handleChange = (field) => {
        return (e) => {
            const newObj = Object.assign({}, user, {[field]: e.target.value})
            setUser(newObj)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        console.log(user);
        if (errors.length) {
            setErrors(errors);
        }
    }

    const showErrors = () => {
        if (!errors.length) return null;
        return (
            <ul>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
        )
    }

    return(
        <div>
            {showErrors()}
            <form className='form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Full name"
                    value={user.name}
                    onChange={handleChange('name')}
                />
                <br/>
                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange('email')}

                />
                <br />
                <input
                    type="integer"
                    placeholder="Phone Number"
                    value={user.phoneNumber}
                    onChange={handleChange('phoneNumber')}

                />
                <br />
                <select>
                    <option disabled selected>Select...</option>
                    <option>Home</option>
                    <option>Work</option>
                    <option>Mobile</option>
                </select>
                <br />
                <input
                    name="staff"
                    type="radio"
                    value={user.staff}
                    id="student"
                />
                <label for="student">Student</label>
                <input
                    name="staff"
                    type="radio"
                    value={user.staff}
                    id="instructors"
                />
                <label for="Instructors">Instructors</label>
                <br />
                <textarea rows="4" cols="50"></textarea>
                <br />
                <input type="checkbox" id="Yes" name="signUp" value={user.signUp} />
                <label for="Yes">Sign Up For Email Notification</label>
  
                <br />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Form