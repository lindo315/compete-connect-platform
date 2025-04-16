
import { Briefcase, Users, Award, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Jane founded CompeteConnect with a vision to create the most accessible competition platform for creators and innovators worldwide."
    },
    {
      name: "John Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "With over 15 years of tech experience, John leads our engineering team and ensures the platform runs smoothly for all users."
    },
    {
      name: "Emily Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Emily manages our day-to-day operations and works closely with competition partners to create amazing opportunities."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-neutral-background">
        {/* Hero section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About CompeteConnect</h1>
            <p className="text-lg max-w-2xl mx-auto">
              We're on a mission to connect talented individuals with life-changing competition opportunities around the world.
            </p>
          </div>
        </section>
        
        {/* Our story section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4">
                <p>
                  CompeteConnect was founded in 2023 with a simple but powerful idea: make competitions accessible to everyone. Our founders recognized that while there were many incredible competition opportunities around the world, they were often difficult to discover, track, and manage.
                </p>
                <p>
                  What began as a small platform connecting a few dozen competitions with eager participants has grown into a comprehensive ecosystem where thousands of creators, innovators, and organizations come together to showcase their talents and ideas.
                </p>
                <p>
                  Today, CompeteConnect is trusted by individuals and organizations across the globe, from independent creators to Fortune 500 companies looking to tap into global talent. Our platform has helped launch careers, fund startups, and bring innovative ideas to life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">Accessibility</h3>
                <p className="text-neutral-muted">
                  We believe everyone should have equal access to opportunities regardless of background or location.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">Excellence</h3>
                <p className="text-neutral-muted">
                  We celebrate and promote excellence in all forms, across all disciplines and industries.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">Integrity</h3>
                <p className="text-neutral-muted">
                  We maintain the highest standards of fairness, transparency, and ethical conduct.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">Innovation</h3>
                <p className="text-neutral-muted">
                  We constantly evolve our platform to better serve creators and competition organizers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-neutral-muted">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p>Competitions Hosted</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">50,000+</h3>
                <p>Registered Users</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">$2M+</h3>
                <p>Prize Money Awarded</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
