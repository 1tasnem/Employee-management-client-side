import {
  FaUserTie,
  FaTasks,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";
import SectionHeader from "../../../../component/SectionHeader/SectionHeader";
const Services = () => {
  const services = [
    
  {
    id: 1,
    icon: <FaUserTie className="text-4xl text-blue-500" />,
    title: "New Hire Integration",
    description:
      "Ensure a smooth transition for new employees with step-by-step guidance and digital onboarding tools.",
  },
  {
    id: 2,
    icon: <FaTasks className="text-4xl text-green-500" />,
    title: "Project & Workflow Tracking",
    description:
      "Organize team responsibilities and monitor progress with structured task flows and deadlines.",
  },
  {
    id: 3,
    icon: <FaFileInvoiceDollar className="text-4xl text-yellow-500" />,
    title: "Salary & Benefits Management",
    description:
      "Automate salary disbursement, generate pay slips, and manage employee benefits with ease.",
  },
  {
    id: 4,
    icon: <FaChartLine className="text-4xl text-red-500" />,
    title: "Growth & Productivity Insights",
    description:
      "Track team performance metrics and gain actionable insights to boost organizational efficiency.",
  },
];


  return (
    <section className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <div className="mxw px-4 mx-auto  text-center">
        <div>
          <SectionHeader title="Services"></SectionHeader>
        </div>
        <p className="text-gray-600 md:text-2xl dark:text-gray-200 mt-4">
          Simplify your HR processes with our comprehensive employee management
          solutions.
        </p>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white dark:bg-gray-800  rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold dark:text-gray-200 text-gray-700">
                {service.title}
              </h3>
              <p className="dark:text-gray-200 text-gray-500 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
