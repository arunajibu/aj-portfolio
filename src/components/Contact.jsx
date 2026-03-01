import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qukilum",
        "template_0kg8grt",
        form.current,
        "DuIF0LhjG-q3Cu5WB"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0b1220] text-white flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 w-full">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Contact Me
        </h2>

        <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 shadow-lg">

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}