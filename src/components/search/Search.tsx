
import React, { FC, useState } from 'react'

interface SearchProps {
  data: { name: string }[];
  placeholder?: string;
}

const Search: FC<SearchProps> = ({
  data,
  placeholder = '',
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ name: string }[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = data.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }


  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={placeholder}
      />
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion.name}>{suggestion.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Search;
