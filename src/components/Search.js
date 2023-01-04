import React, { useState, useEffect } from 'react'

import style from "./search.module.css"

const Search = (props) => {
  const [searchText, setSearchText]= useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText])
  

  return (
    <div className={style.search}>
      <input type="text" placeholder="Search here...." value={searchText} onChange={handleChange} />
    </div>
  )
}

export default Search
