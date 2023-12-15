import React, { useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { fetchCompanys } from './companySlice';
import Items from '../../Items';



const CompanysView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts
    );
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCompanys())
       
    }, [])


   



  
    let { companys } = posts;

// Use the data array directly:
console.log("Companies:", companys);




    //---------------------------------------------------------------------
 




  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}.</h3>}
      {/* {companys && companys.data.map((dat) => {
        return 
      })} */}

      <div>
        {companys && companys.data.map((dat) => <Items dat={dat} key={dat.id} ></Items>)}


        
            
      </div>
    </div>
  )
}

export default CompanysView




{/* <article>
            <h5>{dat.company_name}</h5>
            <h5>{dat.company_phone}</h5>
        </article> */}





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




















    //     <table class="table-fixed">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Company Name</th>
    //         <th>Company Phone</th>
    //         <th>Address 1</th>
    //         <th>City</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>{dat.id}</td>
    //         <td>{dat.company_name}</td>
    //         <td>{dat.address1} </td>
    //         <td>{dat.city} </td>
    //         <td>{dat.address1} </td>
    //       </tr>
        
    //     </tbody>
    //   </table>