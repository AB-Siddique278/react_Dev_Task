import React from 'react';



const Items = ({dat}) => {
    const { company_name , id, company_phone, company_size_id, address1, city } = dat;


    
    




    return (
        <div>
          

<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>ID</th> 
        <th>Company Name</th> 
        <th>Company Phone</th> 
        <th>Address1</th> 
        <th>City</th> 
     
      </tr>
    </thead> 
    <tbody>
      
      <tr>
        <th>{id}</th> 
        <th>{company_name}</th> 
        <td>{company_phone} </td> 
        <td>{address1} </td> 
        <td>{city}</td> 
        
      </tr>
    </tbody> 
   
  </table>
</div>

            
        </div>
    );
};

export default Items;











































        // "id": 2,
        // "company_name": "APEX Homes",
        // "company_phone": "469-299-5537",
        // "company_size_id": 1,
        // "address1": "2451 W Grapevine Mills Cir # 1024",
        // "address2": "Grapevine, TX 76051-2096",
        // "city": "C",
        // "country_id": 1,
        // "state_id": 1,
        // "time_zone_id": 1,
        // "zip": "5840",
