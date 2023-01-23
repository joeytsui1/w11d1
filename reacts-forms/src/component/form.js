import React, {useState, useRef} from 'react'

function Form(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: ""
        // signUp: ""
    })

    const [errors, setErrors] = useState([])

    const Dropdown = ({placeHolder}) => {
        const getDisplay = () => {
            return placeHolder;
        }
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
                />
                <br/>
                <input
                    type="text"
                    placeholder="Email"
                    value={user.email}
                />
                <br />
                <input
                    type="integer"
                    placeholder="Phone Number"
                    value={user.phoneNumber}
                />
                <br />
                <select>
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

                <label for="instructors">instructors</label>
                <br />
                <textarea rows="4" cols="50"></textarea>
            </form>
        </div>
    )
}

export default Form