"use client"
import React from 'react'
import SearchBar from "@/components/SearchBar";
import PasswordElement from '@/components/PasswordElement';

const page = () => {
  return (
    <div>
      <div>
      <div className="contents">
        <SearchBar></SearchBar>
        <PasswordElement></PasswordElement>
      </div>
    </div>
    </div>
  )
}

export default page
