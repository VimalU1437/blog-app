"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
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
    <div className="relative">
      <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="pl-10 text-white"
      />
    </div>
  );
};

export default SearchBar;
