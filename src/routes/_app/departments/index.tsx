import { createFileRoute } from '@tanstack/react-router'
import DepartmentList from '@/components/departments/list'
import DepartmentSearch from '@/components/departments/filter'
import { motion } from 'framer-motion'
export const Route = createFileRoute('/_app/departments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent tracking-tight">
          Departments
        </h1>
        <div className="mt-4 sm:mt-0">
          <DepartmentSearch />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <DepartmentList />
      </motion.div>
    </div>
  )
}
