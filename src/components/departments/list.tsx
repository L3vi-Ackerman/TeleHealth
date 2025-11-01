import { useQueryState } from 'nuqs'
import { useGetDepartmentsList } from '@/hooks/department/queries'
import { useNavigate } from '@tanstack/react-router'
import type { ListDepartment } from '@/core/types/department.type'
import { motion } from 'framer-motion'

const DepartmentList = () => {
  const navigate = useNavigate()
  const [search] = useQueryState('departments', { defaultValue: '' })
  const { data, isLoading, isError } = useGetDepartmentsList({
    name__icontains: search ?? '',
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading departments</div>

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
          className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-in-up"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          onClick={() => navigate({ to: `/departments/${dept.id}` })}
        >
          <h2 className="text-lg font-semibold text-foreground mb-1">
            {dept.name}
          </h2>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default DepartmentList
