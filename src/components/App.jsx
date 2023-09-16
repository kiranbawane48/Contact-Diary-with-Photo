
import React from "react";
import Card from "../components/card";
import contacts from "../contacts";
import Avator from "../components/Avatar";

// function createCard(contacts) {
//   return (
//     <Card
//       key={contacts.id}
//       name={contacts.name}
//       img={contacts.imgURL}
//       tel={contacts.phone}
//       email={contacts.email}
//     />
//   );
// }

function App() {

  console.log(contacts);
  return (
    <div className="app">
      <h1 className="heading">My Contacts</h1>
      <Avator img="https://th.bing.com/th/id/OIP.U2uCeiW6hCBREv3X7GhsmgHaE8?pid=ImgDet&w=474&h=316&rs=1.jpg" />
      <p>Kittu B</p>
    
      <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
       <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
       <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> 
         <Card 
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
      /> 
         <Card 
        name={contacts[4].name}
        img={contacts[4].imgURL}
        tel={contacts[4].phone}
        email={contacts[4].email}
      /> 
      
    </div>
  );
}

export default App;
