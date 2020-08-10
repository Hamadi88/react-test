import React from "react";

const Listcount = ({ listcount }) => {
  return listcount.map(item => {
    return (
      <div key={item.id}>
          <ul>
                <li>{item.name}</li>
          </ul>
      </div>
    );
  });

};


export default Listcount;