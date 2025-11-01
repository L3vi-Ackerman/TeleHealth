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
  heading = 'Frequently Asked Questions',
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
    <section
      id="faq"
      className="w-full flex justify-center items-start p-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans"
    >
      <div className="max-w-6xl w-full space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-green-400">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Explore common questions about rural health emergencies. Click each
            item to get practical solutions and insights.
          </p>
        </div>

        {/* Accordion in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <Accordion
              key={item.id}
              type="single"
              collapsible
              className="space-y-4"
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="flex justify-between items-center p-4 font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-b-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq1
