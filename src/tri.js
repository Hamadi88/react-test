import React, { useState, useEffect,} from "react";
import Select from "react-select";
import { data } from "./data";


const options = [
        {value : 'ordrecroissant', label :'tri pays de A à Z'},
        {value : 'ordredecroissant', label :'tri pays de Z à A'},
        {value : 'capital_OC', label :'tri capital de A à Z'},
        {value : 'captial_OD', label :'tri capital de Z à A'},
];



function Tri (){
            const [country,Setcountry] = useState(data)
    useEffect(() =>{
        function handleclick(e){
            e.preventDefault();
            if(value='ordrecroissant'){      // 
                e.country(data.name.sort(asc))
                Setcountry(e.country)
            }

            if(value='ordredecroissant'){
                e.country(data.name.sort(desc))
                Setcountry(e.country)
            }

            if(value='capital_OC'){
                e.country(data.capital.sort(asc))
                Setcountry(e.country)
            }

            if(value='capital_OD'){
                e.country(data.capital.sort(desc))
                Setcountry(e.country)
            }
            

        }

    })
    
        return (
            <Select
                    value={country}
                    onChange={this.handleclick}
                    options={options}
            />
        )
    

}


export default Tri;



