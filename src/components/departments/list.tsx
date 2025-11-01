import { useGetDepartmentsList } from '@/hooks/department/queries'
import { useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import type { ListDepartment } from '@/core/types/department.type'

interface DepartmentListProps {
  searchQuery?: string
}

const DepartmentList = ({ searchQuery = '' }: DepartmentListProps) => {
  const navigate = useNavigate()

  // Only include the filter if searchQuery is non-empty
  const queryParams = searchQuery ? { name__icontains: searchQuery } : {}
  const { data, isLoading, isError } = useGetDepartmentsList(queryParams)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading departments</div>

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {data?.data?.results?.map((dept: ListDepartment) => (
        <motion.div
          key={dept.id}
          className="flex items-center p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in-up"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          onClick={() => navigate({ to: `/departments/${dept.id}` })}
        >
          <img
            src={dept.image}
            alt={dept.name}
            className="w-12 h-12 rounded-full object-cover border border-border mr-4"
          />
          <div className="flex-1">
            <h2 className="text-md font-semibold text-foreground">
              {dept.name}
            </h2>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default DepartmentList
