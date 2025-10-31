import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

const JoinUs = () => {
  return (
    <section className="w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-12 bg-[var(--card)]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
          Join Us
        </h1>
        <p className="text-xl text-[var(--foreground)] leading-relaxed mb-8">
          Become part of the TeleHealth initiative. Help us bring healthcare
          access to every corner through innovation and compassion.
        </p>
        <Link
          to="/login"
          className="inline-block bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: 'spring',
          stiffness: 120,
        }}
        className="flex justify-center"
      >
        <img
          src="/join-us.jpg"
          alt="TeleHealth Join Us"
          width={150}
          height={150}
          className="drop-shadow-lg w-[35rem]"
        />
      </motion.div>
    </section>
  )
}

export default JoinUs
