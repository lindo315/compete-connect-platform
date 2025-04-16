
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-neutral-background">
        <div className="container px-4 py-16 text-center">
          <div className="space-y-6 max-w-md mx-auto">
            <h1 className="text-8xl font-bold text-primary">404</h1>
            
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            
            <p className="text-neutral-muted">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
              <Link to="/">
                <Button className="w-full sm:w-auto flex items-center gap-2">
                  <Home size={16} />
                  <span>Go to Homepage</span>
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                <span>Go Back</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
