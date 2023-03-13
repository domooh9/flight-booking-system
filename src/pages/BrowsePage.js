import React from 'react';
import Flight from "../components/Flight";
import "./BrowsePage.css"

import { Link } from "react-router-dom";

const BrowsePage = (props) => {
  const { flights } = props;
  
  return (
    <>
  
    <h2 className="half-underline" style={{color: '#00171F'}}>Available flights for your route </h2>
    <Link  to="/" className="fiig">Go back</Link>
    <Link  to="/page" className="iig">Track Your Flights</Link> 
     <div className="flight-list">
      {flights.map((flight, index) => (
        <Flight key={index} {...flight} />
      ))}
    </div>
    
    </>
   
  );
};

export default BrowsePage;



// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import "./BrowsePage.css"

// const BrowsePage = () => {
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [flights, setFlights] = useState([
//     {
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },{
//       airline: "Kenya Airways",
//       departureTime: "5:00 PM",
//       departureGateNumber: "1",
//       price: "$150",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//     {
//       airline: "Kenya Airways",
//       departureTime: "8:00 PM",
//       departureGateNumber: "14",
//       price: "$100",
//       isBooked: false,
//       isCancelled: false,
//       isRescheduled: false,
//       bookedDate: "",
//       cancelledDate: "",
//       rescheduledDate: "",
//     },
//   ]);
  

//     const handlePaymentMethodChange = (event) => {
//       setPaymentMethod(event.target.value);
//       };

//   const handleBook = (index) => {
//     if (paymentMethod === "") {
//       alert("Please select a payment method.");
//       return;}
//     const newFlights = [...flights];
//     newFlights[index].isBooked = true;
//     newFlights[index].bookedDate = new Date().toLocaleString();
//     setFlights(newFlights);
//   };

//   const handleCancel = (index) => {
//     const newFlights = [...flights];
//     newFlights[index].isCancelled = true;
//     newFlights[index].cancelledDate = new Date().toLocaleString();
//     setFlights(newFlights);
//   };

//   const handleReschedule = (index) => {
//     const newFlights = [...flights];
//     newFlights[index].isRescheduled = true;
//     newFlights[index].rescheduledDate = new Date().toLocaleString();
//     setFlights(newFlights);
//   };

//   return (
//     <>
//       <h2 className="half-underline" style={{ color: "#00171F" }}>
//         Available flights for your route
//       </h2>
//       <Link to="/" className="fiig">
//         Go back
//       </Link>
//       <Link to="/page" className="iig">
//         Track Your Flights
//       </Link>
//       <div className="flight-list">
//         {flights.map((flight, index) => (
//           <div key={index} className="flight">
//             <div className="fligh">
//               <h2 style={{ color: "#003459", borderBottom: "black" }}>
//                 {flight.airline}
//               </h2>
//               <p style={{ color: "red" }}>
//                 Departure Time: {flight.departureTime}
//               </p>
//               <p style={{ color: "#244D61" }}>
//                 Gate of Departure: {flight.departureGateNumber}
//               </p>
//               <p>Price: {flight.price}</p>
//               <div className="payment-method">

// <select  id="payment-method-select" onChange={handlePaymentMethodChange}>
// <option value="">Select a payment method</option>
// <option value="credit-card">Credit Card</option>
// <option value="paypal">PayPal</option>
// <option value="apple-pay">Apple Pay</option>
// <option value="other">Other</option>
// </select>

// </div>
//             </div>
//             {flight.isBooked ? (
//               <p>
//                 Booked on {flight.bookedDate}.{" "}
//                 <button className="flg" onClick={() => handleCancel(index)}>
//                   Cancel
//                 </button>{" "}
//                 <button
//                   className="flg"
//                   onClick={() => handleReschedule(index)}
//                 >
//                   Reschedule
//                 </button>
//               </p>
//             ) : (
//               <button className="flig" onClick={() => handleBook(index)}>
//                 Book Now
//               </button>
//             )}
//             {flight.isCancelled && (
//               <p style={{ color: "red", fontStyle: "italic" }}>
//                 Cancelled on {flight.cancelledDate}.
//               </p>
//             )}
//                  {flight.isRescheduled && (
//               <p style={{ color: "blue", fontStyle: "italic" }}>
//                 Rescheduled on {flight.rescheduledDate}.
//               </p>
//             )}
//             {flight.isCancelled ? null : (
//               <p style={{ fontStyle: "italic" }}>
//                 This flight can be cancelled for free within 24 hours of booking.
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default BrowsePage;
