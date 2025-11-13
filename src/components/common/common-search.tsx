'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface CommonSearchProps {
  onSearch: (value: string) => void
  placeholder?: string
  className?: string
}

export default function CommonSearch({
  onSearch,
  placeholder = 'Search...',
  className = '',
}: CommonSearchProps) {
  const [search, setSearch] = useState('')

  const handleClear = () => {
    setSearch('')
    onSearch('')
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <Input
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          onSearch(e.target.value)
        }}
      />
      <Button onClick={handleClear}>Clear</Button>
    </div>
  )
}
