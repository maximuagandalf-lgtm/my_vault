"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';

export default function showpassword () {

    const {id} = useParams();

    const [entry, setEntry] = useState(null)
     // not an empty array cause we a expecting only one entry not a set of multiple entries
    const [Loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)

   //using useEffect hook so that fetchentry function runs as soon as this page is loaded
  useEffect(()=>{
    async function fetchentry (){
        try{
            const res = await fetch(`${process.env.backend_api}/vault/${id}`);
            if(!res.ok) throw new Error("Couldn't find that entry");
            const data = await res.json();
            setEntry(data);
        }catch(err){
            seterror(err.message);
        }finally{
            setLoading(false)
        }
    }

    fetchentry();
  }, [id])

  if(Loading) return <p className='text-gray-400 p-6'>Loading...</p>

  if(error) return <p className="text-red-500 p-6">{error}</p>

  return (
    <div className="p-6 max-w-md mx-auto mt-10 border border-gray-600 rounded-lg">
      <h2 className="text-lg font-bold mb-4">{entry.sitename}</h2>
      <p className="text-sm text-gray-300 mb-2">Username/email: {entry.username_email}</p>
      <p className="text-sm text-gray-300">Password: {entry.password}</p>
      </div>
  )
}