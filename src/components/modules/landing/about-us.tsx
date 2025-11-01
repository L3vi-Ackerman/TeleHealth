import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20"
    >
      <motion.img
        src="/consult.jpg"
        alt="Vite logo"
        className="md:w-52 lg:w-[45rem] drop-shadow-md rounded-br-[300px]"
        initial={{ opacity: 0, x: -60, rotate: -8 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      />

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center md:text-right max-w-xl"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-green-400">
          About Us
        </h1>
        <p className="text-lg text-[var(--foreground)] leading-relaxed">
          We are a team of developers building technology to empower rural
          health workers and make healthcare more accessible across all regions.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutUs
