import { useState } from 'react';

// Sample data for the accordion items
const accordionData = [
  {
    title: 'What is TutorHunt?',
    content: 'TutorHunt is an online platform that connects students with experienced tutors from around the world to help them master any subject, from math and science to languages and arts.'
  },
  {
    title: 'How do I find a tutor?',
    content: 'You can easily find a tutor by using our "Find Tutors" section. You can filter tutors by subject, language, and country to find the perfect match for your learning needs.'
  },
  {
    title: 'Is there a cost to join?',
    content: 'Joining TutorHunt as a student is completely free. You only pay for the tutoring sessions you book with a tutor. We offer a variety of payment options for your convenience.'
  },
  {
    title: 'Can I become a tutor on TutorHunt?',
    content: 'Yes! We are always looking for passionate and knowledgeable individuals to join our community of tutors. You can apply through the "Add Tutor" section on our website, and our team will review your application.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-9/12 mx-auto my-10">
      <h2 className="text-4xl text-center font-extrabold mb-6 text-black/85 dark:text-gray-100">Frequently <span className='text-violet-dark dark:text-violet-light'>Asked</span> Questions</h2>
      <div className="overflow-hidden">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
              <svg
                className={`w-6 h-6 text-violet-dark dark:text-violet-light transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-0 text-gray-600 animate-fadeIn transition-max-h duration-500 ease-in-out">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;