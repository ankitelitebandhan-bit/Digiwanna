import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const jobListings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $160k",
    new: true,
    description:
      "We’re looking for an  frontend developer to join our growing team and help build amazing user experiences.",
    requirements: [
      "5+ years frontend experience",
      "JavaScript proficiency",
      "Design system experience",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    new: false,
    description:
      "Join our design team to create intuitive and beautiful digital experiences for our clients.",
    requirements: [
      "3+ years design experience",
      "Figma/Sketch proficiency",
      "User research skills",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $100k",
    new: true,
    description:
      "Help drive growth for our clients through innovative digital marketing strategies and campaigns.",
    requirements: [
      "2+ years marketing experience",
      "SEO/SEM knowledge",
      "Analytics expertise",
    ],
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "San Francisco",
    type: "Full-time",
    salary: "$90k - $120k",
    new: false,
    description:
      "Lead cross-functional teams to deliver exceptional projects on time and within budget.",
    requirements: [
      "3+ years PM experience",
      "Agile methodology",
      "Client management skills",
    ],
  },
];

const Careers = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-50 py-12 px-6 italic">
      <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
      <p className="text-center text-gray-600 mb-12">
        Explore our current openings and find the perfect role to advance your
        career.
      </p>

      <div className="space-y-6 max-w-5xl mx-auto">
        {jobListings.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  {job.title}
                  {job.new && (
                    <span className="ml-2 text-xs text-white bg-red-600 px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  🏢 {job.department} &nbsp;|&nbsp; 📍 {job.location}{" "}
                  &nbsp;|&nbsp; ⏰ {job.type} &nbsp;|&nbsp; 💰 {job.salary}
                </p>
                <p className="mt-3 text-gray-700">{job.description}</p>
                <div className="mt-2">
                  <h4 className="font-medium">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <a
                  href="#resume-form"
                  className="bg-blue-900 w-[100]px text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Submission Form */}
      <div
        id="resume-form"
        className="bg-white p-8 mt-16 max-w-xl mx-auto shadow rounded-lg text-center"
      >
        <h3 className="text-2xl font-semibold mb-2">
          Don't see a perfect match?
        </h3>
        <p className="text-gray-600 mb-6">
          We're always interested in connecting with talented individuals. Send
          us your resume and let us know how you'd like to contribute to our
          team.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="file"
            name="resume"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white w-full py-2 rounded-md hover:bg-blue-800 transition"
          >
            {loading ? "Sending..." : "Send Your Resume"}
          </button>
          {submitted && (
            <p className="text-green-600 mt-2">
              Resume submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Careers;
