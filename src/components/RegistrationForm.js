import React,{useState} from 'react'

const RegistrationForm = () => {
    
    // const [firstName,setFirstName] = useState("");
    // const [firstLast,setLastName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setFPassword] = useState("");
    // const [cpassword,setCPassword] = useState("");

    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        cpassword:""
    })

    const createUser = (evt)=>{

        evt.preventDefault(); //prevent the default behaviour of the form to jump when the submit button is pressed
        //alert("Testing")
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body : JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(()=>{
            alert(`A record was successfully added for ${user.firstName} ${user.lastName}`)

            setUser({
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                cpassword:""
            })
        })
        
    }

    return (
        <section id="register-section">

            <div className= "container">

                <h1>Register</h1>

                <form onSubmit={createUser}>

                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={user.firstName} onChange={(e)=>{
                            
                            // change the state
                            setUser({...user,firstName:e.target.value})
                        }}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={user.lastName}  onChange={(e)=>{
                            
                            // change the state
                            setUser({...user,lastName:e.target.value})
                        }}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={user.email}  onChange={(e)=>{
                            
                            // change the state
                            setUser({...user,email:e.target.value})
                        }}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" value={user.password}  onChange={(e)=>{
                            
                            // change the state
                            setUser({...user,password:e.target.value})
                        }}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="text" id="cpassword" value={user.cpassword}  onChange={(e)=>{
                            
                            // change the state
                            setUser({...user,cpassword:e.target.value})
                        }}/>
                    </div>

                    <div className="form-control">
                        <button class="btn" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </section>
        
    )
}

export default RegistrationForm
