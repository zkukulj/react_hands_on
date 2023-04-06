import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './SearchBarStyle'

const SearchBar = ({handleSearch,placeholder}) => {
  return (
    <>
        <Input placeholder={placeholder} onChange={handleSearch} />
    </>
  )
}

SearchBar.propTypes = {
    placeholder:PropTypes.string,
    handleSearch:PropTypes.func
}

export default SearchBar