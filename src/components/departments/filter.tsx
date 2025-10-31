'use client'
import { useQueryState } from 'nuqs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function DepartmentSearch() {
  const [search, setSearch] = useQueryState('name', {
    defaultValue: '',
  })

  return (
    <div className="space-y-4 w-[400px]">
      <div className="flex gap-2">
        <Input
          placeholder="Search Department..."
          value={search ?? ''}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => setSearch('')}>Clear</Button>
      </div>
    </div>
  )
}
