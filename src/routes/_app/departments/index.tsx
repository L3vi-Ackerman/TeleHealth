'use client'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import DepartmentList from '@/components/departments/list'
import CommonSearch from '@/components/common/common-search'

export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [search, setSearch] = useState('')

  return (
    <div className="container mx-auto px-6 pb-10 space-y-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
        <h1 className="text-4xl font-extrabold bg-primary bg-clip-text text-transparent tracking-tight">
          Departments
        </h1>
        <CommonSearch
          placeholder="Search departments..."
          onSearch={setSearch}
          className="mt-4 sm:mt-0 w-[400px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <DepartmentList searchQuery={search} />
      </motion.div>
    </div>
  )
}
