import React from 'react'


const DonorForm = () => {
  const data={name:"", phone:"", aadhar:"", password:""};
  const [inputData, setInputData] = useState(data)
  return (

    <form className="container">
        <div className="header">
            <h1>Donor Form</h1>
        </div>
        <div>
        <input type="text" placeholder='Your Full Name' name='name' value={inputData.name} onChange={handleData}/>
        </div>
        <div>
        <input type="text" placeholder='Your Phone Number' phone='phone'value={inputData.phone} onChange={handleData}/>
        </div>
        <div>
        <input type="text" placeholder='Your Aadhar Number' aadhar='aadhar' value={inputData.aadhar} onChange={handleData}/>
        </div>
        <div>
        <input type="text" placeholder='Your password' password='password' value={inputData.aadha} onChange={handleData}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default DonorForm