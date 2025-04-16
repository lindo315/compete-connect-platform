
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  imgSrc,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroSectionProps) => {
  return (
    <div className="relative bg-neutral-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg text-neutral-muted mb-8 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={primaryButtonLink}>
                <Button size="lg" className="flex items-center gap-2">
                  {primaryButtonText}
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink}>
                  <Button variant="outline" size="lg">
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <img
              src={imgSrc}
              alt="Hero"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,144C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
