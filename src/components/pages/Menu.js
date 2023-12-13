import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';


import BookingContext from '../../context/BookingContext'
function Menu() {
    const context = useContext(BookingContext);
    const {  notes,getBooking,deletebooking } = context;
    useEffect(() => {
        
        getBooking();
    
       
    
    
        // eslint-disable-next-line
      }, []);
var record = notes;
console.log(record);
 
  return (
    <>
   
   <div className="container">

   
     <div className="row mt-4" style={{marginTop: '100px'}}>
                    <div className="col-12" style={{marginTop: '100px',padding:'0px 10px'}}>
                        <table className="table table-striped table-hover text-center table-sm table-bordered bg-black " style={{fontSize:'medium'}}>
                            <thead>
                                <tr>
                                    <th >Sr.no</th>
                                    <th >Date</th>
                                    <th >Time</th>
                                    <th >Location</th>
                                    <th >No. People</th>
                                    <th >Name</th>
                                    <th >Phone</th>
                                    <th >Email</th>
                                    <th >Edit</th>
                                    <th >Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map((note, i) => (
                                    <tr key={i}>
                                        <td >{i}</td>
                                        <td >{note.date}</td>
                                        <td >{note.time}</td>
                                        <td >{note.location}</td>
                                        <td >{note.size}</td>
                                        <td >{note.name}</td>
                                        <td >{note.phone}</td>
                                        <td >{note.email}</td>
                                        <td ><Link to={`/edit/${note._id}`}><i className="fa fa-edit"></i></Link></td>
                                        <td ><i className="fa fa-trash" onClick={() => deletebooking(note._id)}></i></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                
    </>
  )
}

export default Menu