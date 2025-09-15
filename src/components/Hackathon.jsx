import React from "react";

const Hackathon = () => {
  return (
    <section id="hackathon" className="bg-[#000F1F] text-white py-20 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hackathon Registration</h2>
        <p className="mb-6">
          Join the Exodia Hackathon to showcase your coding skills and win exciting prizes!
        </p>
        <button className="bg-yellow-400 text-[#000F1F] px-6 py-3 rounded font-bold hover:bg-yellow-300 transition">
          Register for Hackathon
        </button>
      </div>
    </section>
  );
};

export default Hackathon;
