import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <header className="container mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-green-400">
          Welcome to TeleHealth
        </h1>
        <p className="text-xl text-[var(--foreground)] leading-relaxed">
          Bridging the gap between patients and doctors through remote
          healthcare solutions — accessible, reliable, and secure.
        </p>
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
        className="rounded-l-lg flex justify-center"
      >
        <img
          src="/banner.jpg"
          alt="TeleHealth Banner"
          width={150}
          height={150}
          className="rounded-bl-[300px] drop-shadow-lg w-[45rem]"
        />
      </motion.div>
    </header>
  )
}

export default HeroSection
