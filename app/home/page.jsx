"use client"
import React from 'react'
import SearchBar from "@/components/SearchBar";
import EntryCard from '@/components/EntryCard';
// import vaultentry from '@/backend/models/vaultentry';

const page = () => {
  return (
    <div>
      <div>
      <div className="contents">
        <SearchBar></SearchBar>
        <EntryCard></EntryCard>
      </div>
    </div>
    </div>
  )
}

export default page
