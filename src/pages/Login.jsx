import React,{useState} from 'react'
import {Link} from "react-router-dom"

function Login() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
        <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
          <text className="text-2xl ">Log in</text>

          {/* First Name Last Name */}
          <div className="flex mt-7">
            {/* Email */}
            <input
              className="border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 mt-2 w-[100%]"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              required
            />
          </div>
          {/* Password */}
          <div className="flex mt-7">
            <input
              className="border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 w-[100%] "
              name="pass"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
              required
            />
          </div>
          {/* Submit button */}
          <input
            type="button"
            className="btn mt-7 hover:scale-[1.02]"
            value="Log in"
            disabled
          />
          <Link to="/signup" type="button" className="btn hover:scale-[1.02] mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 ease-linear duration-200">signup</Link>
        </div>
      </div>
  )
}

export default Login
