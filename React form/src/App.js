import './App.css';
import { useState } from 'react';

function App() {

  const[formData,setData] = useState ( {
    fname : "",
    lname : "",
    email : "",
    address : "",
    city : "",
    state : "",
    zip : "",
    comments : true,
    candidates : true,
    offers : true,
    notifications : ""
  });

  function filldata (event) {
    const {name, value, checked, type} = event.target;
    setData( (prevdata) => {
      return {
        ...prevdata,
        [name] : type==="checkbox" ? checked: value
      }
    })
  }

  function finaldata(event){
    event.preventDefault();
    console.log("Finally printing form ka data ")
    console.log(formData)
  }

  return (
    <div className='container'>

      <form onSubmit={finaldata} className='formcontainer'>
        <label  htmlFor='fname'>First Name</label>   
        <br></br>  
        <input className='texti' type='text' placeholder='Enter first name' id='fname' name='fname' onChange={filldata} value={formData.fname}></input>
        <br></br>

        <label htmlFor='lname'>Last Name</label>   
        <br></br>  
        <input className='texti' type='text' placeholder='Enter last name' id='lname' name='lname' onChange={filldata} value={formData.lname}></input>
        <br></br>

        <label htmlFor='email'>Email Address</label>   
        <br></br>  
        <input className='texti' type='email' placeholder='Enter email' id='email' name='email' onChange={filldata} value={formData.email}></input>
        <br></br>

        <label htmlFor='country'>Country</label>   
        <br></br>  
        <select className='texti' id='country' name='country' onChange={filldata}>
         <option value="india">India</option>
         <option value="usa">USA</option>
         <option value="canada">Canada</option>
         <option value="brazil">Brazil</option>
        </select>
        <br></br>

        <label htmlFor='address'>Street address</label>
        <br></br>
        <textarea className='texti textu' id='address' placeholder='Enter address' name='address' onChange={filldata} value={formData.address}></textarea>
        <br></br>

        <label htmlFor='city'>City</label>   
        <br></br>  
        <input className='texti' type='text' placeholder='Enter city' id='city' name='city' onChange={filldata} value={formData.city}></input>
        <br></br>

        <label htmlFor='state'>State / Province</label>   
        <br></br>  
        <input className='texti' type='text' placeholder='Enter state' id='state' name='state' onChange={filldata} value={formData.state}></input>
        <br></br>

        <label htmlFor='zip'>ZIP / Postal Code</label>   
        <br></br>  
        <input className='texti' type='text' placeholder='Enter zip code' id='zip' name='zip' onChange={filldata} value={formData.zip}></input>
        <br></br>


        <p className='hp'>By Email</p>
        <div className='cbox'>

        <input type='checkbox' name='comments' id='comments' checked={formData.comments} onChange={filldata}></input>
        <label htmlFor='comments' className='hp'>Comments
        <span><br/>Get notifed when somone posts a comment on posting. <br/></span>
        </label>
        

        <input type='checkbox' name='candidates' id='candidates' checked={formData.candidates} onChange={filldata}></input>
        <label htmlFor='candidates' className='hp'>Candidates
        <span> <br/>Get notifed when a candidate applies for a job. <br/></span>
        </label>
        

        <input type='checkbox' name='offers' id='offers' checked={formData.offers} onChange={filldata}></input>
        <label htmlFor='offers' className='hp'>Offers
        <span><br/>Get notifed when a candidate excepts or rejects an offer. <br/></span>
        </label>

        </div>
        

        <p className='hp'>Push Notifications
        <span><br></br>These are deliverd via SMS to your mobile phone.</span>
        </p>

        <div className='cbox'>
        <input type='radio' value="Everything" id='Everything' name='notifications' checked={formData.notifications === "Everything"} onChange={filldata}></input>
        <label htmlFor='Everything' className='hp'>Everything</label>
        <br></br>

        <input type='radio' value="Same as email" id='Sae' name='notifications' checked={formData.notifications === "Same as email"} onChange={filldata}></input>
        <label htmlFor='Sae' className='hp'>Same as email</label>
        <br></br>

        <input type='radio' value="No push notification" id='npn' name='notifications' checked={formData.notifications === "No push notification"} onChange={filldata}></input>
        <label htmlFor='npn' className='hp'>No push notification</label>
        <br></br>
        </div>

        <button className='btn'>Save</button>
      </form>

    </div>
  );
}

export default App;
