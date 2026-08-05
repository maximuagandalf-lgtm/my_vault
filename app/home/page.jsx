"use client"
import { useRef, useState, useEffect } from "react";
import searchAnim from "@/public/animations/search-icon-transition.json"
import EntryCard from "@/components/EntryCard";
import Lottie from "lottie-react";

export default function Home() {
  const search = useRef()

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //written under useEffect() hook so that this code block executes the moment site is loaded.
  useEffect(() => {
    //this function fetches data from get request of server and stores them into entries state
    async function fetchEntries() {
      try {
        const res = await fetch(`${process.env.backend_api}/vault`);
        if (!res.ok) throw new Error("Failed to fetch vault entries");
        const data = await res.json();
        setEntries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        //Loading is set to false once we data is returned upon our reques to the server.
        setLoading(false);
      }
    }

    fetchEntries();
  }, []);

  const handleDeleteEntry = (_id) => {
    //update the entries state again according to the changes in database
    setEntries(prevEntries => prevEntries.filter(entry=> entry._id !== _id));
    // filter() returns a new array where true is returned according to the condition defined in the parenthesis,

    //above, entry is an object which loops over the entries state and checks if the _id of entry is not equal to the _id of deleted entry, if true, it is returned in the new array and setEntries() updates the state with this new array, thus removing the deleted entry from the UI.
  }

  const filteredEntries = entries.filter((entry) =>
    //sitename form the entries are accesses one by one then with a loop lowercased and checked every time user makes changes into 
    entry.sitename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="contents">

        <div className="search border border-gray-600 mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-20 w-[90vw] min-w-fit rounded-md h-[7vh] flex gap-2 items-center px-3"
        onMouseEnter={()=> search.current?.goToAndPlay(0, true)}
        onMouseLeave={()=> search.current?.goToAndStop(0, true)}
        >

          <Lottie
          animationData = {searchAnim}
          lottieRef={search}
          loop={true}
          autoplay={false}
          style={{height: 30, width: 30}}
          />

          <input
            type="text"
            value={searchTerm}
            // used to make the search bar work
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-gray-300 w-full h-full bg-transparent outline-none"
            placeholder="Search vault..."
          />
        </div>
      </div>

{/* if fetching entries takes time, this loading message is displayed */}
      <div className="entries flex flex-col items-center gap-3 mt-6">
        {loading && <p className="text-gray-400">Loading your vault...</p>}

{/* displaying error message under  */}
        {error && <p className="text-red-500">{error}</p>}

{/* displaying "no entries found" message in search bar */}
        {!loading && !error && filteredEntries.length === 0 && (
          <p className="text-gray-400">No entries found</p>
        )}

{/* rendering each card on the home page one by one and prop drilling every saved credentials to be displayed and accessed from frontend*/}
        {!loading && !error && filteredEntries.map((entry) => (
          <EntryCard
            key={entry._id}
            _id={entry._id}
            sitename={entry.sitename}
            siteurl={entry.siteurl}
            username_email={entry.username_email}
            onDelete = {handleDeleteEntry}// connects the onDelete function in EntryCard.jsx to the handleDeleteEntry function in this file 
          />
        ))}
      </div>
    </div>
  );
  }