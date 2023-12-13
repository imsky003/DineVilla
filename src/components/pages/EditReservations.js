import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './editform.css'


import BookingContext from '../../context/BookingContext'
function Reservations() {
  
  const { id } = useParams();
 
  let history = useNavigate();
  const context = useContext(BookingContext);
  const { editbooking } = context;
  const [note, setNote] = useState({
      id: "",
      namee: "",
    //   date:"",
      time:"",
      location:"",
      size:"",
       phone:"",
      email:"",
      table:"",
     
  });
  useEffect(() => {
     
          const getNotes = async () => {
              const response = await fetch(`http://localhost:3005/reserve/${id}`, {
                  method: "GET",

                  headers: {
                      "Content-Type": "application/json",
                      
                  }
              });
              const json = await response.json();
             
             
            //   setNote({ id: json._id, email: json.email,table: json.table,phone: json.phone });
              setNote({ id: json._id, namee: json.name,time: json.time, location: json.location,size: json.size,phone: json.phone,email: json.email,table: json.table });
          };
          getNotes();
      


      // eslint-disable-next-line
  }, []);




  const onChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
    //   editbooking(note.id, note.email,note.table,note.phone);
      editbooking(note.id, note.namee,note.time, note.location,note.size,note.phone,note.email,note.table);
      history("/menu");
  };
  return (
    
  <div>
  
    <div className="container">
        
<form>
    
    <fieldset>
        <legend>Table details</legend>
        {/* <div className="double-input">
            <div className="form-input-container">
              <label htmlFor="date">Date</label>
            	<input type="date" name="date" onChange={onChange}  value={note.date} />
            </div>
            <div className="form-input-container">
            	<label htmlFor="capacity">Time</label>
            	<input type="text" name="time" onChange={onChange}  value={note.time} />
            </div>
        </div>
        <div className="double-input">
            <div className="form-input-container">
              <label htmlFor="date">Location</label>
            	<input type="text" name="location" onChange={onChange}  value={note.location} />
            </div>
            <div className="form-input-container">
            	<label htmlFor="capacity">Size</label>
            	<input type="number" name="size" onChange={onChange}  value={note.size} />
            </div>
        </div>
        <div className="double-input">
            <div className="form-input-container">
              <label htmlFor="date">Name</label>
            	<input type="text" name="name" onChange={onChange}  value={note.name} />
            </div>
            <div className="form-input-container">
            	<label htmlFor="capacity">Phone</label>
            	<input type="text" name="phone" onChange={onChange}  value={note.phone} />
            </div>
        </div> */}
         <div className="double-input">
            <div className="form-input-container">
              <label htmlFor="date">Location</label>
            	<input type="text" name="location" onChange={onChange}  value={note.location} />
            </div>
            <div className="form-input-container">
            	<label htmlFor="capacity">Size</label>
            	<input type="number" name="size" onChange={onChange}  value={note.size} />
            </div>
        </div>
        <div className="double-input">
            <div className="form-input-container">
              <label htmlFor="date">Name</label>
            	<input type="text" name="namee" onChange={onChange}  value={note.namee} />
            </div>
            <div className="form-input-container">
            	<label htmlFor="capacity">Time</label>
            	<input type="text" name="time" onChange={onChange}  value={note.time} />
            </div>
        </div>
        
        <div className="form-input-container">
            	<label htmlFor="capacity">Phone</label>
            	<input type="text" name="phone" onChange={onChange}  value={note.phone} />
            </div>
        <div className="double-input">
            <div className="form-input-container">
              <label htmlFor="date">Email</label>
            	<input type="email" name="email" onChange={onChange}  value={note.email} />
            </div>
            <div className="form-input-container">
            	<label htmlFor="capacity">Table</label>
            	<input type="text" name="time" onChange={onChange}  value={note.table} />
            </div>
        </div>
    </fieldset>
    <button type="submit" onClick={handleSubmit}>Submit a request</button>
</form>
</div>

</div>

  )
}

export default Reservations