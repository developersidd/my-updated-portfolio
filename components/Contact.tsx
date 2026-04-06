"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ContactCard from "./ContactCard";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <section
      id="contact"
      className="py-14 md:py-24 bg-black relative border-t border-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info & Vector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <section className="md:px-6 max-w-3xl mx-auto">
              <div className="space-y-4">
                <ContactCard
                  icon={Mail}
                  title="Email"
                  subtitle="siddik.prgmr@gmail.com"
                  isCopyable
                  copyValue="siddik.prgmr@gmail.com"
                />

                <ContactCard
                  icon={Github}
                  title="GitHub"
                  subtitle="https://github.com/developersidd/"
                  actionText="View my work"
                  actionHref="https://github.com/developersidd/"
                />

                <ContactCard
                  icon={MessageSquare}
                  title="WhatsApp"
                  subtitle="+880 1619397506"
                  actionText="Chat now"
                  actionHref="https://wa.me/8801619397506"
                />

                <ContactCard
                  icon={MapPin}
                  title="Location"
                  subtitle="Dhaka, Bangladesh — Available for remote worldwide"
                />
              </div>
            </section>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-5 md:p-7 lg:p-8  lg:max-w-lg md:mx-6 lg:mx-0"
          >
            {isSubmitSuccessful ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
                <button
                  onClick={() => reset()}
                  className="mt-8 px-6 py-2 rounded-full border border-gray-700 text-white hover:bg-gray-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
