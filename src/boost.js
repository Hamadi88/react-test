const Table = () => 
{
return (
<Table striped bordered hover variant="dark">
   
               <thead>
                <tr>
                    <th>Nom</th>
                    <th>Code</th>
                    <th>Capital</th>
                    <th>Longitude</th>
                    <th>Lagitude</th>
                 </tr>
               </thead>
            {
                countries.map(i=> {
                    return (
                    <tbody key={i}>
                        <tr>
                      <td>{i.name}</td>
                      <td>{i.country_code}</td>
                      <td>{i.capital}</td>
                      <td>{i.latlng}</td>
                      <td>{i.timezones}</td>
                        </tr>
                        
                    </tbody>     

                    )}
               
                )}      
    
    
</Table>

)}
