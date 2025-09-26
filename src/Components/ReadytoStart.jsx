import React from "react";
import { Link } from "react-router-dom";

const ReadytoStart = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2 underline decoration-indigo-600 decoration-2 italic underline-offset-8">
            Ready to start Your Project
          </h2>
          <p className="text-gray-600 mb-10 text-lg font-bold mt-6 ">
            Let us discuss your ideas and turn them into reality. Get a free
            consultation today!
          </p>
          <Link to="/contact">
            <button className="bg-black text-white px-6 py-3 italic rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-b-gray-950 text-2xl transition">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReadytoStart;
