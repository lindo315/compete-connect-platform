
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DUMMY_COMPETITIONS = [
  {
    id: "comp-1",
    title: "Web Development Challenge 2025",
    category: "Development",
    deadline: "May 30, 2025",
    description: "Build innovative web applications that solve real-world problems.",
    prize: "$5,000",
    entryFee: "Free",
    status: "Open",
  },
  {
    id: "comp-2",
    title: "Data Science Hackathon",
    category: "Data Science",
    deadline: "June 15, 2025",
    description: "Analyze complex datasets and create insightful visualizations.",
    prize: "$3,500",
    entryFee: "$10",
    status: "Open",
  },
  {
    id: "comp-3",
    title: "Mobile App Innovation Contest",
    category: "Mobile Development",
    deadline: "July 20, 2025",
    description: "Design and develop cutting-edge mobile applications for iOS or Android.",
    prize: "$4,000",
    entryFee: "$15",
    status: "Open",
  },
  {
    id: "comp-4",
    title: "UX/UI Design Challenge",
    category: "Design",
    deadline: "August 10, 2025",
    description: "Create user-centered designs that enhance the user experience.",
    prize: "$2,500",
    entryFee: "Free",
    status: "Coming Soon",
  },
];

const Competitions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredCompetitions = DUMMY_COMPETITIONS.filter((competition) => {
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          competition.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || competition.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = ["all", ...new Set(DUMMY_COMPETITIONS.map(comp => comp.category.toLowerCase()))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-2">Competitions</h1>
              <p className="text-neutral-muted max-w-2xl mx-auto">
                Discover and join competitions to showcase your skills, learn from others, and win prizes.
              </p>
            </div>
            
            {/* Search and filter */}
            <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-muted" size={18} />
                  <Input
                    type="text"
                    placeholder="Search competitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-1 text-sm text-neutral-muted">
                    <Filter size={16} />
                    <span>Category:</span>
                  </div>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Competitions list */}
            {filteredCompetitions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCompetitions.map((competition) => (
                  <div key={competition.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-border hover:border-primary/30 transition-colors">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-semibold">{competition.title}</h2>
                        <span className={`text-xs px-2 py-1 rounded ${
                          competition.status === "Open" ? "bg-secondary text-white" : "bg-yellow-500 text-white"
                        }`}>
                          {competition.status}
                        </span>
                      </div>
                      
                      <p className="text-neutral-muted mb-4">{competition.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-neutral-muted">Category</p>
                          <p className="font-medium">{competition.category}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-muted">Deadline</p>
                          <p className="font-medium">{competition.deadline}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-muted">Prize</p>
                          <p className="font-medium">{competition.prize}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-muted">Entry Fee</p>
                          <p className="font-medium">{competition.entryFee}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>View Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">No competitions found</h3>
                <p className="text-neutral-muted">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Competitions;
