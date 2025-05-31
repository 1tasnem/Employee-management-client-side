import SectionHeader from "../../../../component/SectionHeader/SectionHeader";

const News = () => {
  const newsUpdates = [
    [
  {
    id: 1,
    title: "Remote Work Policy Update",
    date: "January 12, 2025",
    description:
      "Our updated remote work policy outlines new hybrid work options, eligibility criteria, and support for home office setups.",
    link: "/news/remote-work-policy",
  },
  {
    id: 2,
    title: "Monthly Performance Highlights",
    date: "February 8, 2025",
    description:
      "Celebrate our team's recent achievements! View the monthly performance dashboard and key contributor recognitions.",
    link: "/news/performance-highlights",
  },
  {
    id: 3,
    title: "Cybersecurity Awareness Week",
    date: "March 5, 2025",
    description:
      "Join our cybersecurity awareness sessions this week. Learn how to keep your data safe and protect company resources.",
    link: "/news/cybersecurity-awareness",
  },
  {
    id: 4,
    title: "New Training Portal Launch",
    date: "April 2, 2025",
    description:
      "We're launching a new learning portal with skill development courses, certifications, and career growth resources.",
    link: "/news/training-portal-launch",
  },
  {
    id: 5,
    title: "Spring Town Hall Meeting",
    date: "May 14, 2025",
    description:
      "Attend the Spring Town Hall for executive updates, open Q&A, and insights into upcoming projects and goals.",
    link: "/news/spring-townhall",
  }
]

  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-4">
      <div className="mxw mx-auto text-center">
        <div className="md:mb-10 mb-5">
          <SectionHeader title={"News and Updates"}></SectionHeader>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsUpdates.map((update) => (
            <div key={update.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {update.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{update.date}</p>
              <p className="text-gray-600 dark:text-gray-200 mb-4">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
