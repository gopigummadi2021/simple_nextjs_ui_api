import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
export default function List({ appdata }: { appdata: any }){
  return(
   <>
   
   <div className="c-container mt-5">

   <a className="mt-4 w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex" href="/add">Add</a>


  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>            
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Password
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Upload
              </th>             
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {appdata.map((listdata: any) => {
                    return (
            <tr key={listdata._id}>
              
              <td className="px-6 py-4 whitespace-nowrap">
              {listdata.Name}
              </td>            
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {listdata.Password}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                 {<img src={"srv/"+listdata.Upload} /> }
              </td>            
            </tr>
             );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
   
   </>

  )
}

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3000/api/listapi");
  const appsdata = await response.data;
  //console.log(appsdata);
  return {
    props: {
      appdata: appsdata
    }
  };
}