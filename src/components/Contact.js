import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="p-6">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>Email: <a href="mailto:cusherahkugan@gmail.com" className="text-blue-500">cusherahkugan@gmail.com</a></p>
        <p>Phone: <a href="tel:+94766741405" className="text-blue-500">+94 766741405</a></p>
      </motion.div>
    </section>
  );
};

export default Contact;
