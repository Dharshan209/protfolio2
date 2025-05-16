import React, { useRef, useState, FormEvent } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, ExternalLink, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactInfo } from '../../data';

type ContactSectionProps = {
  contactInfo: ContactInfo;
};

// 3D rotating contact icon
const ContactIconCard = ({ 
  icon: Icon, 
  label, 
  value, 
  link, 
  delay = 0
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string;
  link: string;
  delay?: number;
}) => {
  return (
    <motion.a
      href={link}
      className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="w-14 h-14 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.7 }}
      >
        <Icon size={24} />
      </motion.div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{value}</p>
      </div>
    </motion.a>
  );
};

// Form with animations and validation
const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      
      // Reset form after success
      if (formRef.current) {
        formRef.current.reset();
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.form
      ref={formRef}
      className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`form-input ${formErrors.name ? 'border-red-500 dark:border-red-500' : ''}`}
            placeholder="Your name"
          />
          {formErrors.name && (
            <motion.p 
              className="mt-1 text-sm text-red-500" 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formErrors.name}
            </motion.p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`form-input ${formErrors.email ? 'border-red-500 dark:border-red-500' : ''}`}
            placeholder="Your email"
          />
          {formErrors.email && (
            <motion.p 
              className="mt-1 text-sm text-red-500" 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formErrors.email}
            </motion.p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          className="form-input"
          placeholder="Message subject"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formValues.message}
          onChange={handleChange}
          className={`form-input resize-none ${formErrors.message ? 'border-red-500 dark:border-red-500' : ''}`}
          placeholder="Your message"
        ></textarea>
        {formErrors.message && (
          <motion.p 
            className="mt-1 text-sm text-red-500" 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {formErrors.message}
          </motion.p>
        )}
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting || formStatus === 'success'}
        className={`w-full px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all
          ${isSubmitting || formStatus === 'success'
            ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
            : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
          }
        `}
        whileHover={isSubmitting || formStatus === 'success' ? {} : { scale: 1.02 }}
        whileTap={isSubmitting || formStatus === 'success' ? {} : { scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Send size={20} />
            </motion.span>
            Sending...
          </>
        ) : formStatus === 'success' ? (
          <>
            <CheckCircle size={20} />
            Message Sent!
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>
      
      <AnimatePresence>
        {formStatus === 'success' && (
          <motion.div
            className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CheckCircle size={18} />
            <p>Your message has been sent successfully. I'll get back to you soon!</p>
          </motion.div>
        )}
        
        {formStatus === 'error' && (
          <motion.div
            className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <AlertCircle size={18} />
            <p>There was an error sending your message. Please try again later.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

// Main component
const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const titleInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  return (
    <motion.section 
      ref={sectionRef}
      id="contact" 
      className="py-24 md:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container relative z-10">
        <div className="section-title">
          <motion.div 
            className="inline-block px-4 py-1 mb-6 rounded-full border border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30"
            initial={{ opacity: 0, y: -10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              Contact
            </span>
          </motion.div>
          
          <motion.h2 
            className="section-heading gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mt-6 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="section-subheading mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Have a project in mind or want to discuss opportunities? Let's talk!
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10 mt-16">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-4">
              <ContactIconCard 
                icon={Phone}
                label="Phone"
                value={contactInfo.phone}
                link={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                delay={0.1}
              />
              
              <ContactIconCard 
                icon={Mail}
                label="Email"
                value={contactInfo.email}
                link={`mailto:${contactInfo.email}`}
                delay={0.2}
              />
            </div>
            
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              
              <div className="flex gap-4">
                <motion.a
                  href={contactInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shadow-lg"
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                
                <motion.a
                  href={contactInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#181717] rounded-lg flex items-center justify-center text-white shadow-lg"
                  whileHover={{ y: -5, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Github size={24} />
                </motion.a>
                
                <motion.a
                  href={contactInfo.socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white shadow-lg"
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-100/20 dark:from-primary-900/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary-100/20 dark:from-secondary-900/10 to-transparent rounded-full blur-3xl -z-10"></div>
    </motion.section>
  );
};

export default ContactSection;