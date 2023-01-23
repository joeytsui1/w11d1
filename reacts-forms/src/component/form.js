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
        if (user.email.length === 0) {
            errors.push("Email ")
        }
        if (user.phoneNumber ) {
            errors.push()
        }
        if (!user.phoneNumber) {
            errors.push("Phone number must be present")
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
            {/* {showErrors()} */}
            <form className='form'>
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
                <h3>Sign Up For Email Notification</h3>
                <input type="checkbox" id="Yes" name="signUp" value={user.signUp} />
                <label for="Yes">Yes</label>
                <input type="checkbox" id="No" name="signUp" value={user.signUp} />
                <label for="No">No</label>
                <br />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Form