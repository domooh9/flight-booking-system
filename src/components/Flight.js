import React, { useState } from "react";
import jsPDF from "jspdf";

const Flight = ({
  airline,
  departureTime,
  departureGateNumber,
   price,
}) => {
  const [isBooked, setIsBooked] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  
  const [bookedDate, setBookedDate] = useState("");
  
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [paymentNumber, setPaymentNumber] = useState("");
  const [paymentOptionSelected, setPaymentOptionSelected] = useState(false); // new state variable

  const handleBook = () => {
    if (selectedPaymentOption === "") {
      alert("Please select a payment option.");
      return;
    }

    if (selectedPaymentOption === "M-Pesa") {
      if (paymentNumber === "") {
        alert("Please enter your M-Pesa number.");
        return;
      }
      const mpesaPrompt =`A Ussd will be sent to your number ${paymentNumber} 
      to confirm payment of KES ${price}.
       Or lipa na Mpesa, Paybill 1111 account number KQ`;
      if (window.confirm(mpesaPrompt)) {
        setIsBooked(true);
        setBookedDate(new Date().toLocaleString());

        // Wait 1 second to download the ticket
        setTimeout(() => {
          const doc = new jsPDF();
          doc.text(`Airline: ${airline}`, 10, 10);
          doc.text(`Departure Time: ${departureTime}`, 10, 20);
          doc.text(`Gate of Departure: ${departureGateNumber}`, 10, 30);
          doc.save("ticket.pdf");
        }, 1000);
      }
    } else {
      if (paymentNumber === "") {
        alert(`Please enter your ${selectedPaymentOption} number.`);
        return;
      }
      const paymentPrompt = `Please pay $${price} using ${selectedPaymentOption} number ${paymentNumber}.`;
      if (window.confirm(paymentPrompt)) {
        setIsBooked(true);
        setBookedDate(new Date().toLocaleString());

        // Wait 1 second to download the ticket
        setTimeout(() => {
          const doc = new jsPDF();
          doc.text(`Airline: ${airline}`, 10, 10);
          doc.text(`Departure Time: ${departureTime}`, 10, 20);
          doc.text(`Booked on: ${bookedDate}`, 10, 30)
          doc.text(`Gate of Departure: ${departureGateNumber}`, 10, 40);
          doc.save("ticket.pdf");
        }, 1000);
      }
    }
  };

  const handleCancel = () => {
    setIsCancelled(true);
  
  };

  
  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
    setPaymentOptionSelected(true); // set payment option selected to true when a radio button is clicked
  };

  const handlePaymentNumberChange = (event) => {
    setPaymentNumber(event.target.value);
  };

  return (
  <div>

    <div className="flight" >

   <div className="fligh">
    <h2 className="kq" style={{ color: "#003459", borderBottom: "black" }}>{airline}</h2>
    <p style={{ color: "red" }}>Departure Time: {departureTime}</p>
    <p style={{ color: "black" }}>Departure Gate: {departureGateNumber}</p>
   
    <p>Price: {price}</p>
</div>
    

    {!isBooked && (
      <div>
        <p>Select Payment Option:</p>
        <div>
          <label>
            <input
              type="radio"
              value="M-Pesa"
              checked={selectedPaymentOption === "M-Pesa"}
              onChange={handlePaymentOptionChange}
            />
            M-Pesa
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={selectedPaymentOption === "Credit Card"}
              onChange={handlePaymentOptionChange}
            />
            Credit Card
          </label>
        </div>
        {paymentOptionSelected && ( // show payment number input only if payment option has been selected
          <div>
            <label>
              {selectedPaymentOption} Account info:
              <input
                type="text"
                value={paymentNumber}
                onChange={handlePaymentNumberChange}
              />
            </label>
          </div>
        )}
        <button className="flg"  onClick={handleBook}>Book</button>
      </div>
    )}
    {isBooked && (
      <div >
        <p>Booked on: {bookedDate}</p>
        <button className="flg" onClick={handleCancel}>Cancel</button>
   
      </div>
    )}
    {isCancelled && (
      <div>
        <p style={{ color: "red" }}>Please wait for 48 hours for your request to be processed, Thanks for your patiance</p>
      </div>
    )}
    </div>
  </div>
  );
  };
  export default Flight;

// import React, { useState } from "react";

// const Flight = ({
//   airline,
//   departureTime,
//   departureGateNumber,
//   boardingLocation,
//   price,
// }) => {
//   const [isBooked, setIsBooked] = useState(false);
//   const [isCancelled, setIsCancelled] = useState(false);
//   const [isRescheduled, setIsRescheduled] = useState(false);
//   const [bookedDate, setBookedDate] = useState("");
//   const [cancelledDate, setCancelledDate] = useState("");
//   const [rescheduledDate, setRescheduledDate] = useState("");
//   const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
//   const [paymentNumber, setPaymentNumber] = useState("");
//   const [paymentOptionSelected, setPaymentOptionSelected] = useState(false); // new state variable

//   const handleBook = () => {
//     if (selectedPaymentOption === "") {
//       alert("Please select a payment option.");
//       return;
//     }

//     if (selectedPaymentOption === "M-Pesa") {
//       if (paymentNumber === "") {
//         alert("Please enter your M-Pesa number.");
//         return;
//       }
//       const mpesaPrompt = `A Ussd will be sent to your number ${paymentNumber} 
//       to confirm payment of KES ${price}.
//        Or lipa na Mpesa, Paybill 1111 account number KQ`;
//       if (window.confirm(mpesaPrompt)) {
//         setIsBooked(true);
//         setBookedDate(new Date().toLocaleString());
//       }
//     } else {
//       if (paymentNumber === "") {
//         alert(`Please enter your ${selectedPaymentOption} number.`);
//         return;
//       }
//       const paymentPrompt = `Please pay $${price} using ${selectedPaymentOption} number ${paymentNumber}.`;
//       if (window.confirm(paymentPrompt)) {
//         setIsBooked(true);
//         setBookedDate(new Date().toLocaleString());
//       }
//     }
//   };

//   const handleCancel = () => {
//     setIsCancelled(true);
//     setCancelledDate(new Date().toLocaleString());
//   };

//   const handleReschedule = () => {
//     setIsRescheduled(true);
//     setRescheduledDate(new Date().toLocaleString());
//   };

//   const handlePaymentOptionChange = (event) => {
//     setSelectedPaymentOption(event.target.value);
//     setPaymentOptionSelected(true); // set payment option selected to true when a radio button is clicked
//   };

//   const handlePaymentNumberChange = (event) => {
//     setPaymentNumber(event.target.value);
//   };

//   return (
//     <div>
//       <div className="flight">
//         <div className="fligh">
//           <h2 style={{ color: "#003459", borderBottom: "black" }}>{airline}</h2>
//           <p style={{ color: "red" }}>Departure Time: {departureTime}</p>
//           <p style={{ color: "black" }}>Boarding Location: {boardingLocation}</p>
//           <p style={{ color: "#244D61" }}>Gate of Departure: {departureGateNumber}</p>
//           <p>Price: {price}</p>
//         </div>
//         {isBooked ? (
//           <p>
//             Booked on {bookedDate}.{" "}
//             <button className="flg" onClick={handleCancel}>
//               Cancel
//             </button>{" "}
//             <button className="flg" onClick={handleReschedule}>
//               Reschedule
//               </button>
//       </p>
//     ) : (
//       <>
//         <div className="payment">
//           <h7>Select Payment Method:</h7>
//           <div className="radio-buttons">
//             <label>
//               <input
//                 type="radio"
//                 value="M-Pesa"
//                 checked={selectedPaymentOption === "M-Pesa"}
//                 onChange={handlePaymentOptionChange}
//               />
//               M-Pesa
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="credit card"
//                 checked={selectedPaymentOption === "credit card"}
//                 onChange={handlePaymentOptionChange}
//               />
//               Credit Card
//             </label>
//           </div>
//           {paymentOptionSelected && (
//             <div className="payment-number">
//               <label htmlFor="paymentNumber">
//                 {selectedPaymentOption === "M-Pesa"
//                   ? "Enter M-Pesa Number:"
//                   : `Enter ${selectedPaymentOption} Number:`}
//               </label>
//               <input
//                 type="text"
//                 id="paymentNumber"
//                 value={paymentNumber}
//                 onChange={handlePaymentNumberChange}
//               />
//             </div>
//           )}
//         </div>
//         <button className="flg" onClick={handleBook}>
//           Book Flight
//         </button>
//       </>
//     )}
//     {isCancelled && (
//       <p style={{ color: "red" }}>
//         Flight Cancelled on {cancelledDate}.{" "}
//       </p>
//     )}
//     {isRescheduled && (
//       <p style={{ color: "blue" }}>
//         Flight Rescheduled on {rescheduledDate}.{" "}
//       </p>
//     )}
//   </div>
// </div>
// );
// };

// export default Flight;