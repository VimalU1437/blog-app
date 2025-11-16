"use client"

import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { BsSearch } from 'react-icons/bs';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      console.log('Triggering API call for:', value);
      // API call logic here (e.g., fetch('/api/search?query=' + encodeURIComponent(value)))
    }
  };

  return (
    <TextField
      value={query}
      onChange={handleChange}
      placeholder="Search..."
      variant="standard"
      slotProps={{
        input: {
          className: 'text-white',
          startAdornment: (
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBar;
