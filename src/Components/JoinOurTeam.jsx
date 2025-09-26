import React from "react";

const JoinOurTeam = () => {
  return (
    <div className="italic bg-gray-50">
      <header className="bg-white  text-gray-600 text-center py-10">
        <h1 className="text-3xl font-bold">Join Our Amazing Team</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We're always looking for talented individuals who are passionate about
          creating exceptional digital experiences. Join us in shaping the
          future of digital innovation.
        </p>
      </header>

      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-8">Why Work With Us?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We believe in creating an environment where our team can do their best
          work while maintaining a healthy work-life balance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="block text-5xl text-blue-600">❤️</span>
            <h3 className="text-xl font-semibold mt-4">Health & Wellness</h3>
            <p className="text-sm text-gray-600">
              Comprehensive health resources, mental health support, and
              wellness stipends.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="block text-5xl text-blue-600">🌍</span>
            <h3 className="text-xl font-semibold mt-4">Remote-First</h3>
            <p className="text-sm text-gray-600">
              Work from anywhere with flexible hours and home office allowances.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="block text-5xl text-blue-600">📈</span>
            <h3 className="text-xl font-semibold mt-4">Growth & Learning</h3>
            <p className="text-sm text-gray-600">
              Professional development blogs, conference attendances, and
              skill-building opportunities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="block text-5xl text-blue-600">👥</span>
            <h3 className="text-xl font-semibold mt-4">Great Culture</h3>
            <p className="text-sm text-gray-600">
              Regular team events, coffee chats, and a supportive, collaborative
              environment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="block text-5xl text-blue-600">💼</span>
            <h3 className="text-xl font-semibold mt-4">Competitive Package</h3>
            <p className="text-sm text-gray-600">
              Competitive salary, equity options, performance bonuses, and
              annual reviews.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="block text-5xl text-blue-600">🌎</span>
            <h3 className="text-xl font-semibold mt-4">Inclusive Team</h3>
            <p className="text-sm text-gray-600">
              Diverse inclusive workplace where everyone’s voice is heard and
              valued.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurTeam;
