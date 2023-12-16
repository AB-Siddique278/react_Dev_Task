import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompanys } from './companySlice';



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


  return (
    <div>
      <h1 className='text-center font-bold text-xl text-gray-700 uppercase mt-5'>Task-1</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}.</h3>}

<div class="relative overflow-x-auto px-20 py-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                ID
                </th>
                <th scope="col" class="px-6 py-3">
                Company Logo
                </th>
                <th scope="col" class="px-6 py-3">
                Company Name
                </th>
                <th scope="col" class="px-6 py-3">
                Company Phone
                </th>
                <th scope="col" class="px-6 py-3">
                Address 1
                </th>
                <th scope="col" class="px-6 py-3">
                Zip Code 
                </th>
                <th scope="col" class="px-6 py-3">
                City
                </th>
            </tr>
        </thead>
        <tbody>

        {companys && companys.data.map((dat) =>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {dat.id}
        </th>
        <td class="px-6 py-4">

        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={dat.company_logo_link} alt="Avatar Tailwind CSS Component" />
              </div>

        </div>

        </td>
        <td class="px-6 py-4">
        {dat.company_name}
        </td>
        <td class="px-6 py-4">
        {dat.company_phone}
        </td>
        <td class="px-6 py-4">
        {dat.address1}
        </td>
        <td class="px-6 py-4">
        {dat.zip}
        </td>
        <td class="px-6 py-4">
        {dat.city}
        </td>
        </tr>

       )}

        </tbody>

        
    </table>
    <div className='grid justify-items-end'>
        <div className="join py-5 ">
  <button className="join-item btn btn-active">1</button>
  <button className="join-item btn ">2</button>
  <button className="join-item btn">3</button>
  <button className="join-item btn">4</button>
</div>

        </div>




</div>
    </div>
  )
}
export default CompanysView





























