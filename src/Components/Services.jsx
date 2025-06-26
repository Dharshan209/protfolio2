import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';
import Button from './UI/Button';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Cloud Deployment'],
      price: 'From $2,000'
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Responsive web applications that work seamlessly across all devices with modern UI/UX principles.',
      features: ['Responsive Design', 'Progressive Web Apps', 'Cross-Platform', 'Performance Optimization'],
      price: 'From $1,500'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Boost your website speed and user experience with advanced optimization techniques.',
      features: ['Speed Optimization', 'SEO Enhancement', 'Code Splitting', 'Image Optimization'],
      price: 'From $800'
    },
    {
      icon: '🛠️',
      title: 'Technical Consulting',
      description: 'Expert advice on technology stack, architecture decisions, and best practices for your project.',
      features: ['Architecture Review', 'Technology Selection', 'Code Review', 'Performance Audit'],
      price: 'From $150/hour'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Security Updates', 'Feature Enhancements', '24/7 Support'],
      price: 'From $500/month'
    },
    {
      icon: '🎓',
      title: 'Training & Mentoring',
      description: 'Personalized training sessions and mentoring for developers looking to improve their skills.',
      features: ['One-on-One Sessions', 'Code Review', 'Career Guidance', 'Skill Development'],
      price: 'From $100/hour'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <SectionTitle 
          title="Services & Solutions"
          subtitle="Professional development services to bring your ideas to life with modern technology and best practices"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} padding="lg" className="text-center group h-full flex flex-col">
              <div className="text-6xl mb-6 group-hover:animate-bounce">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-yellow-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="text-2xl font-bold text-yellow-400 mb-4">
                  {service.price}
                </div>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card padding="lg" className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Let's discuss your ideas and find the perfect solution for your needs. 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule a Call
              </Button>
              <Button variant="secondary" size="lg">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;