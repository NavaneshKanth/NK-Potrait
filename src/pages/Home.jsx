import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-section d-flex align-items-center" id="home">
      <div className="container text-center text-white">
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Navanesh Kanth
        </motion.h1>

        <motion.h3
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          React JS Developer | 3+ Years Experience
        </motion.h3>

        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate about crafting responsive UIs and integrating seamless backend services. Currently seeking a React Developer opportunity in Dubai.
        </motion.p>

        <Link to="/contact" className="btn btn-warning btn-lg mt-4 px-5">Hire Me</Link>
      </div>

      <style jsx>{`
        .home-section {
          height: 100vh;
          background: linear-gradient(135deg, #43cea2, #185a9d); /* Gradient */
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </section>
  );
};

export default Home;
