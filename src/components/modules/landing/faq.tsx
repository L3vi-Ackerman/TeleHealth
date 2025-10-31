import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type AccordionItemProps = {
  question: string
  answer: string
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      className="border border-border rounded-xl overflow-hidden mb-4 shadow-md bg-card"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 flex justify-between items-center font-sans text-foreground bg-card hover:bg-accent/10 transition-colors duration-300 text-lg font-semibold"
      >
        <span>{question}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 py-4 text-card-foreground text-base bg-card"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Faq = () => {
  const information = [
    {
      question: 'What are the most common health emergencies in rural areas?',
      answer:
        'Snakebites, maternal complications during childbirth, trauma from road or farm accidents, dehydration, and untreated infections.',
    },
    {
      question:
        'Why do rural communities face delays in emergency medical care?',
      answer:
        'Limited transportation, poor road access, shortage of ambulances, lack of nearby hospitals, and weak communication networks.',
    },
    {
      question:
        'How can rural health posts handle emergencies without doctors on-site?',
      answer:
        'By training health workers in basic emergency response, using teleconsultation to connect with remote doctors, and maintaining essential first-aid and life-support kits.',
    },
    {
      question: 'What is the role of telemedicine in rural emergencies?',
      answer:
        'Enables real-time video consultation with doctors for diagnosis and management guidance before patient transfer.',
    },
    {
      question: 'How can communities prepare for medical emergencies?',
      answer:
        'Establish local emergency committees, maintain first-aid supplies, educate residents on recognizing critical symptoms, and create transport links to the nearest hospital.',
    },
    {
      question:
        'What challenges do health workers face during rural emergencies?',
      answer:
        'Shortage of trained staff, inadequate medical equipment, unreliable electricity, limited medicines, and communication breakdowns.',
    },
    {
      question:
        'How can maternal and child emergencies be reduced in rural regions?',
      answer:
        'Through regular antenatal checkups, early referral systems, skilled birth attendance, and 24-hour teleconsultation access.',
    },
    {
      question:
        'What are effective ways to improve emergency response systems in rural settings?',
      answer:
        'Implement community-based emergency transport schemes, train local volunteers, and integrate mobile communication with health post networks.',
    },
  ]

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-start justify-center gap-12 p-8 bg-[var(--background)] text-[var(--foreground)] font-sans">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)] mb-8 leading-relaxed">
          Here are the common questions regarding health emergencies in rural
          areas. Expand each to see detailed guidance and practical solutions.
        </p>
        <div>
          {information.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Faq
