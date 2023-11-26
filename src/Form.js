import React, { useState } from "react";

const Form = () => {
  const[formdata, setformdata] = useState({
    date:'',
    description:'',
    category:'',
    amount:''
  });

  //update the form
  const updateform =(e) => {
    const{name, value} =e.target;
    setformdata((previousformdata) => ({
         ...previousformdata,
         [name]:value
    }));
  };

  //handle form submit
   const handlesubmit =(e) => {
    e.preventDefault();

    //fetch data
       fetch('https://bank-api-opou.onrender.com/transactions',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(formdata)
       })
       .then(res => {
        if(!res.ok){
          throw new Error('Failed')
        }
        return res.json();
       })
       .then(data => {
        console.log(formdata);
        //reset form input after submission
          setformdata({
            date:'',
            description:'',
            category:'',
            amount:''
          })
          alert('data added successfully');
       })
       .catch(error => console.log('Failed',error));
   }
  return (
    <div className="formgroup">
      <form onSubmit={handlesubmit}>
      <label>
       Date:
        <input type="date"  name="date" onChange={updateform}/>
      </label>
      <input type="text" placeholder="description..."  name="description" value={formdata.description} onChange={updateform}/>
      <input type="text" placeholder="category"  name="category" value={formdata.category} onChange={updateform}/>
      <input type="text" placeholder="Amount..."  name="amount" value={formdata.amount} onChange={updateform}/>
      <button className="button"  >Add Transaction</button>
      </form>
    </div>
  );
};

export default Form;