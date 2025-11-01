import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface Faq1Props {
  heading?: string
  items?: FaqItem[]
}

const Faq1 = ({
  heading = 'Frequently asked questions',
  items = [
    {
      id: 'faq1',
      question: 'What are the most common health emergencies in rural areas?',
      answer:
        'Snakebites, maternal complications during childbirth, trauma from road or farm accidents, dehydration, and untreated infections.',
    },
    {
      id: 'faq2',
      question:
        'Why do rural communities face delays in emergency medical care?',
      answer:
        'Limited transportation, poor road access, shortage of ambulances, lack of nearby hospitals, and weak communication networks.',
    },
    {
      id: 'faq3',
      question:
        'How can rural health posts handle emergencies without doctors on-site?',
      answer:
        'By training health workers in basic emergency response, using teleconsultation to connect with remote doctors, and maintaining essential first-aid and life-support kits.',
    },
    {
      id: 'faq4',
      question: 'What is the role of telemedicine in rural emergencies?',
      answer:
        'Enables real-time video consultation with doctors for diagnosis and management guidance before patient transfer.',
    },
    {
      id: 'faq5',
      question: 'How can communities prepare for medical emergencies?',
      answer:
        'Establish local emergency committees, maintain first-aid supplies, educate residents on recognizing critical symptoms, and create transport links to the nearest hospital.',
    },
    {
      id: 'faq6',
      question:
        'What challenges do health workers face during rural emergencies?',
      answer:
        'Shortage of trained staff, inadequate medical equipment, unreliable electricity, limited medicines, and communication breakdowns.',
    },
    {
      id: 'faq7',
      question:
        'How can maternal and child emergencies be reduced in rural regions?',
      answer:
        'Through regular antenatal checkups, early referral systems, skilled birth attendance, and 24-hour teleconsultation access.',
    },
    {
      id: 'faq8',
      question:
        'What are effective ways to improve emergency response systems in rural settings?',
      answer:
        'Implement community-based emergency transport schemes, train local volunteers, and integrate mobile communication with health post networks.',
    },
  ],
}: Faq1Props) => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-start justify-center gap-12 p-8 bg-[var(--background)] text-[var(--foreground)] font-sans">
      <div className="container max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
          {heading}
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)] mb-8 leading-relaxed">
          Here are the common questions regarding health emergencies in rural
          areas. Expand each to see detailed guidance and practical solutions.
        </p>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base bg-card">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq1
