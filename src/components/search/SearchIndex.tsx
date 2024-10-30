
import { useState} from 'react'
import Search from '../search/Search'
import mockData from './mockData'

const SearchIndex = () => {


  return (
    <>
      <h2>Search</h2>
      <Search data={mockData} placeholder="Search Fruits" />
    </>
  )
}

export default SearchIndex
