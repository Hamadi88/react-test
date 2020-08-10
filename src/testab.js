import React from "react";
import "./App.css";
import countries from "./countries.json";  
import ReactDOM from 'react-dom'



const Table = () => {
  return (
        <table>
            {
              countries.map(i=> {
                return(
                      <thead key={i}>
                          <th>Nom{i.name}</th>
                          <th>Code{i.country_code}</th>
                          <th>Capital{i.capital}</th>
                          <th>Lontitude{i.latlng}</th>
                          <th>Lagitude{i.timezones}</th>
                      </thead>

                )

              })

            }
        </table>
  )
}

ReactDOM.render(
  <Table/> , document.getElementById("root")
)


export default Table
