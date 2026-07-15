import React from "react";
import "./App.css";

function App() {

  // Office Object
  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "MG Road, Bangalore",
    image: "/office.jpg"
  };

  // List of Office Objects
  const officeList = [

    office,

    {
      name: "Tech Park",
      rent: 75000,
      address: "Electronic City, Bangalore",
      image: "/office.jpg"
    },

    {
      name: "Global Hub",
      rent: 45000,
      address: "Whitefield, Bangalore",
      image: "/office.jpg"
    }

  ];

  return (

    <div className="container">

      <h1>Office Space Rental App</h1>

      {

        officeList.map((item, index) => (

          <div className="card" key={index}>

            <img
              src={item.image}
              alt="Office"
              width="350"
              height="220"
            />

            <h2>{item.name}</h2>

            <h3
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              Rent : ₹ {item.rent}
            </h3>

            <h3>{item.address}</h3>

            <hr />

          </div>

        ))

      }

    </div>

  );

}

export default App;