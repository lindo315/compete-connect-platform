
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CompetitionCard from "../components/CompetitionCard";
import { ArrowRight, TrendingUp, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample featured competitions
  const featuredCompetitions = [
    {
      id: "comp-1",
      title: "Global Innovation Challenge 2023",
      organizer: "TechForward Foundation",
      category: "Technology",
      deadline: "May 15, 2023",
      teamSize: "1-4 members",
      imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "comp-2",
      title: "Sustainable Solutions Hackathon",
      organizer: "EcoInnovate",
      category: "Environment",
      deadline: "June 2, 2023",
      teamSize: "2-5 members",
      imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "comp-3",
      title: "AI for Good Challenge",
      organizer: "DataScience Alliance",
      category: "Artificial Intelligence",
      deadline: "July 10, 2023",
      teamSize: "1-3 members",
      imgSrc: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Elevate Your Competitive Journey"
          subtitle="Register, compete, and connect with the world's most innovative competitions. Our platform streamlines the process, so you can focus on what matters - winning."
          imgSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
          primaryButtonText="Get Started"
          primaryButtonLink="/register"
          secondaryButtonText="Browse Competitions"
          secondaryButtonLink="/competitions"
        />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-neutral-muted max-w-2xl mx-auto">
                Our platform makes competition registration simple and efficient, 
                connecting participants with opportunities worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Account</h3>
                <p className="text-neutral-muted">
                  Register your personal or team account to get started with our platform.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Verify Credentials</h3>
                <p className="text-neutral-muted">
                  Connect with our partner competition providers to verify your eligibility.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compete & Win</h3>
                <p className="text-neutral-muted">
                  Register for competitions, manage your entries, and track your progress.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Competitions */}
        <section className="py-16 bg-neutral-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-baseline mb-8">
              <div>
                <h2 className="text-3xl font-bold">Featured Competitions</h2>
                <p className="text-neutral-muted mt-2">
                  Explore the top competitions currently open for registration
                </p>
              </div>
              <Link to="/competitions" className="hidden md:flex items-center text-primary hover:text-primary/80">
                View all
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCompetitions.map((competition) => (
                <CompetitionCard
                  key={competition.id}
                  id={competition.id}
                  title={competition.title}
                  organizer={competition.organizer}
                  category={competition.category}
                  deadline={competition.deadline}
                  teamSize={competition.teamSize}
                  imgSrc={competition.imgSrc}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/competitions">
                <Button variant="outline">View All Competitions</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Driving Competitive Excellence</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join thousands of competitors taking their skills to the next level
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
                <p className="text-white/80">Active Competitions</p>
              </div>
              
              <div className="text-center p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2">25K+</p>
                <p className="text-white/80">Registered Users</p>
              </div>
              
              <div className="text-center p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2">120+</p>
                <p className="text-white/80">Partner Organizations</p>
              </div>
              
              <div className="text-center p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2">$2M+</p>
                <p className="text-white/80">Prize Money Awarded</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-neutral-background rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
              <p className="text-neutral-muted mb-8 max-w-2xl mx-auto">
                Join our platform today and discover new opportunities to showcase your skills, win prizes, and advance your career.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg">Create Account</Button>
                </Link>
                <Link to="/competitions">
                  <Button variant="outline" size="lg">
                    Explore Competitions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
