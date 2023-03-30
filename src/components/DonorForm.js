import React from 'react'


const DonorForm = () => {
  const data={name:"", phone:"", aadhar:"", password:""}
  return (

    <form className="container">
        <div className="header">
            <h1>Donor Form</h1>
        </div>
        <div>
        <input type="text" placeholder='Your Full Name' name='name'/>
        </div>
        <div>
        <input type="text" placeholder='Your Phone Number' phone='phone'/>
        </div>
        <div>
        <input type="text" placeholder='Your Aadhar Number' aadhar='aadhar'/>
        </div>
        <div>
        <input type="text" placeholder='Your password' password='password'/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default DonorForm