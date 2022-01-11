
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
export default function Add() {

  const router = useRouter();

  const [Name, setName] = useState("");
  const [Password, SetPw] = useState("");
  const [Url, setUrl] = useState<any>('');


  let value: string | ArrayBuffer | null;


  const onImageChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const body = new FormData();
      body.append("myfile", i);
      await fetch("http://localhost:3000/api/imagepost", {
        method: "POST",
        body
      })
        .then(r => r.json())
        .then(data => {
          console.log(data.path)
          setUrl(data.path) })
    }
  }

  //API for Insert Application data into Mongo DB
  const saveAppData = async () => {
    const response = await axios
      .post("http://localhost:3000/api/addapi", {
        Name: Name,
        Password: Password,
        Upload: Url
      })
      .then((response) => {
        console.log("res:", response);
        router.push("/list");
      });
  };

  return (
    <>

      <div className="c-container mt-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" >

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      value={Password}
                      onChange={(e) => SetPw(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="upload" className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <div className="mt-1">
                    <input
                      type="file"
                      name="myImage" onChange={onImageChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>


                <div>
                  <button
                    type="button"
                    onClick={saveAppData}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>


            </div>
          </div>



        </div>
      </div>

    </>

  )
}

