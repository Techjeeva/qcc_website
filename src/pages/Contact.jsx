// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Get in Touch
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            Have questions or want to collaborate? We'd love to hear from you.
            Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* --- Main Gold Glassmorphism Container --- */}
        <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide border-b border-amber-900/20 pb-3">
                Contact Details
              </h3>
              <div className="space-y-8">
                
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg flex items-center justify-center transition-all group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-amber-400 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      Centre for Quantum Communication and Computing, Dept. of Computing Technologies<br />
                      SRM Institute of Science and Technology<br />
                      Kattankulathur, Chengalpattu, Tamil Nadu – 603203
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg flex items-center justify-center transition-all group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-amber-400 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:quantumlab@srmist.edu.in" className="text-white text-base font-semibold hover:text-amber-400 transition-colors break-all">
                      quantumlab@srmist.edu.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg flex items-center justify-center transition-all group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-amber-400 uppercase tracking-wider mb-1">Phone</h4>
                    <a href="tel:+914427455510" className="text-white text-base font-semibold hover:text-amber-400 transition-colors">
                      +91-44-2745 5510
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide border-b border-amber-900/20 pb-3">
                Send Us a Message
              </h3>
              
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-amber-100/50">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="mt-1 block w-full bg-transparent border-b border-amber-900/60 text-white focus:outline-none focus:border-amber-400 transition-colors py-2 font-medium" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-amber-100/50">Email Address</label>
                  <input 
                    type="type" 
                    id="email" 
                    name="email" 
                    required
                    className="mt-1 block w-full bg-transparent border-b border-amber-900/60 text-white focus:outline-none focus:border-amber-400 transition-colors py-2 font-medium" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-amber-100/50">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required
                    className="mt-1 block w-full bg-transparent border-b border-amber-900/60 text-white focus:outline-none focus:border-amber-400 transition-colors py-2 resize-none font-medium"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 text-xs font-black uppercase tracking-wider rounded-xl text-black bg-amber-500 hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 focus:outline-none transform hover:-translate-y-0.5"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-8 uppercase tracking-wide">
            Our Location
          </h3>
          <div className="rounded-xl shadow-2xl overflow-hidden border border-amber-900/30 bg-[#0a0904]/40 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3890.0407833077797!2d80.04169527592471!3d12.82128741846175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b8117db9%3A0xc6de9e011681f21a!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1716389201934!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(0.6) invert(0.92) contrast(1.1) brightness(0.95)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRMIST Location Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}