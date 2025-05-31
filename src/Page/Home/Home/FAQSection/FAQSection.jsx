import { useState } from "react";
import SectionHeader from "../../../../component/SectionHeader/SectionHeader";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    
  {
    question: "What features does the Employee Management System offer?",
    answer:
      "The system provides tools for managing employee records, tracking attendance, handling leave requests, and generating performance reports.",
  },
  {
    question: "How can I change my account password?",
    answer:
      "To change your password, go to your profile settings and select 'Change Password', or use the 'Forgot Password' option on the login page.",
  },
  {
    question: "Is it possible to edit my contact or address information?",
    answer:
      "Yes, you can update your contact details and address from the 'My Profile' section after logging into your account.",
  },
  {
    question: "What is the process to request a leave?",
    answer:
      "You can request a leave by going to the 'Leave Application' menu, selecting the leave type and duration, and submitting it for approval.",
  },
  {
    question: "Where can I get help if I face technical issues?",
    answer:
      "For any technical difficulties, please reach out to the IT support team through the in-app chat, email, or the dedicated support ticket system.",
  }


  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mxw mx-auto px-4">
      <div className="md:my-10 my-5">
        <SectionHeader title={"FAQ "}></SectionHeader>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 dark:border-gray-600 rounded-lg shadow-md border">
            <button
              className="flex justify-between w-full p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
