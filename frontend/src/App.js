import { motion } from "framer-motion";
import "./App.css";
import { 
  TrophyIcon, 
  HeartIcon, 
  BoltIcon, 
  DevicePhoneMobileIcon,
  CheckIcon 
} from '@heroicons/react/24/outline';

// Hero Section Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629233650020-aa014ed76f8d"
          alt="Small Aircraft"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Professional Aircraft
          <span className="block text-blue-400">Detailing Services</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
        >
          Tailored aircraft care for Cessna, Piper, Cirrus, and light aircraft owners. 
          We're not a big company - we're your partner in quality and care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Free Quote
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Call (706) 699-3810
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section Component
const Services = () => {
  const services = [
    {
      title: "Exterior Detailing",
      description: "Complete exterior wash, polish, and protection for your aircraft's pristine appearance.",
      image: "https://planeandpilotmag.com/wp-content/uploads/sites/4/images/stories/photo-gallery/large/apr-09/Diamond-DA40-XLS---Marc-Lee.jpg",
      features: ["Paint restoration", "Surface protection", "Thorough cleaning", "Professional finish"]
    },
    {
      title: "Interior Detailing",
      description: "Deep cleaning and restoration of cockpit, cabin, and all interior surfaces.",
      image: "https://cirrusaircraft.com/wp-content/uploads/2025/05/titan-over-white-sr-series-g7-aircraft-2-1201x771-9aea37c-3-768x493.png",
      features: ["Leather treatment", "Carpet cleaning", "Surface sanitization", "Odor elimination"]
    },
    {
      title: "Wax Protection",
      description: "Advanced wax application for long-lasting protection and brilliant shine.",
      image: "https://images.unsplash.com/photo-1593938346024-7ee982d8224b?w=500w",
      features: ["UV protection", "Weather resistance", "Enhanced shine", "6-month guarantee"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Aircraft Care Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete exterior restoration to meticulous interior detailing, we provide personalized care for your light aircraft.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckIcon className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose JetRite Section
const WhyChoose = () => {
  const reasons = [
    {
      icon: TrophyIcon,
      title: "Small Aircraft Expertise",
      description: "Specialized experience with Cessna, Piper, Cirrus, and light aircraft"
    },
    {
      icon: HeartIcon,
      title: "Customer-First Approach",
      description: "Personal attention and trustworthy customer care every time"
    },
    {
      icon: BoltIcon,
      title: "Quick Turnaround",
      description: "Efficient service that respects your time and schedule"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Service",
      description: "We come to your hangar or preferred location for your convenience"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Small Aircraft Owners Choose JetRite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by aircraft owners and flight clubs for our personal approach and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <reason.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Target Audience Section
const TargetAudience = () => {
  const audiences = [
    {
      title: "Small Aircraft Owners",
      description: "Personalized detailing services to maintain your Cessna, Piper, or Cirrus investment",
      image: "https://images.unsplash.com/photo-1541611292906-15e4b710712f?q=80&w",
      benefits: ["Preserve aircraft value", "Personal attention", "Flexible scheduling"]
    },
    {
      title: "Flight Clubs",
      description: "Affordable group packages designed for shared aircraft ownership and club operations",
      image: "https://hartzellprop.com/wp-content/uploads/GettyImages-528318037-1200x800.jpg",
      benefits: ["Group discounts", "Club-friendly scheduling", "Member benefits"]
    },
    {
      title: "Local FBOs",
      description: "Partnership opportunities for small FBOs serving the general aviation community",
      image: "https://airbornavionics.com/uploads/3/4/4/1/34416072/n216ts-fbo_orig.jpg",
      benefits: ["Local partnership", "Quick service", "Reliable results"]
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Services for Every Client
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions for small aircraft owners and flight clubs with personalized service and fair pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600 mb-4">{audience.description}</p>
                <ul className="space-y-2 mb-6">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckIcon className="w-5 h-5 text-blue-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get {audience.title} Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Tom Anderson",
      role: "Cessna 172 Owner",
      image: "https://images.unsplash.com/photo-1444313431167-e7921088a9d3",
      quote: "JetRite gave my 172 the care it deserved. Their attention to detail is incredible, and they treat your aircraft like it's their own."
    },
    {
      name: "Linda Martinez",
      role: "Flight Club Manager",
      image: "https://images.unsplash.com/photo-1605590427165-3884d6aa6731",
      quote: "We've used JetRite for our club's Piper Cherokee for over a year. Their reliability and personal touch make all the difference."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by General Aviation Pilots
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See why small aircraft owners and flight clubs choose JetRite for their detailing needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Aircraft?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free quote today and experience the JetRite difference. Personal service you can trust for your aircraft.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Call (706) 699-3810
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-blue-100">(706) 699-3810</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Email</h4>
              <p className="text-blue-100"><a href="https://mail.google.com/mail/u/0/?fs=1&to=jetritedetailing@gmail.com&su=Plane%20Detailing&body=Hi%20JetRite%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20scheduling%20aircraft%20detailing%20services.%20Here%20are%20the%20details%20of%20my%20aircraft%20and%20location%3A%0A%0A-%20Aircraft%20Type%3A%20%0A-%20Tail%20Number%20(N%23)%3A%20%0A-%20Location%20(Airport%20Name%20or%20FBO)%3A%20%0A-%20Preferred%20Date%2FTime%3A%20%0A-%20Requested%20Services%3A%20(e.g.%2C%20exterior%20wash%2C%20interior%20deep%20clean%2C%20leather%20treatment)%0A-%20Additional%20Notes%3A%20%0A%0APlease%20let%20me%20know%20availability%2C%20pricing%2C%20and%20any%20other%20information%20needed%20to%20confirm%20the%20appointment.%0A%0AThank%20you%2C%0A%5BYour%20Name%5D%0A%5BPhone%20Number%5D%0A%5BEmail%5D&tf=cm"
              target="_blank" 
              className="underline text-blue-100"
              rel="noopener noreferrer">JetRiteDetailing@gmail.com</a></p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Service Areas</h4>
              <p className="text-blue-100">Thompson | Augusta | Greene County</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">JetRite</h3>
            <p className="text-gray-300 mb-4">
              Professional aircraft detailing services for small aircraft owners and flight clubs. Personal attention, quality results.
            </p>
            <p className="text-gray-400">© 2024 JetRite. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Exterior Detailing</li>
              <li>Interior Detailing</li>
              <li>Wax Protection</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Clients</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Small Aircraft Owners</li>
              <li>Flight Clubs</li>
              <li>Local FBOs</li>
              <li>General Aviation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(706) 699-3810</li>
              <li>JetRiteDetailing@gmail.com</li>
              <li>Thompson | Augusta | Greene County </li>
              <li>Available by Appointment</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <WhyChoose />
      <TargetAudience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;