import { motion } from 'framer-motion'

const TrustedBy = () => {
  const information = [
    {
      name: 'Dr. Arjun Shrestha',
      image: '/faces/face1.jpeg',
      position: 'Chief Medical Officer, Rural Health Nepal',
    },
    {
      name: 'Dr. Sita Gurung',
      image: '/faces/face2.jpeg',
      position: 'Telemedicine Specialist, HealthLink',
    },
    {
      name: 'Dr. Ramesh Adhikari',
      image: '/faces/face3.jpeg',
      position: 'Public Health Advisor, MedAccess',
    },
  ]

  return (
    <section
      id="trusted"
      className="w-full mt-6 py-16 flex flex-col items-center justify-center bg-[var(--card)]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[var(--foreground)] mb-8"
      >
        Trusted By
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {information.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center text-center bg-[var(--background)] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-40 h-56 object-cover mb-3 shadow-sm rounded-lg"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
            />
            <div className="text-lg font-semibold text-[var(--foreground)]">
              {item.name}
            </div>
            <div className="text-[var(--muted-foreground)] text-sm">
              {item.position}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TrustedBy
