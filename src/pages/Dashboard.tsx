
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  Calendar, 
  Clock, 
  FileText, 
  Settings, 
  Bell, 
  User,
  LogOut,
  CheckCircle,
  AlertCircle,
  Clock3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample data for the dashboard
  const upcomingCompetitions = [
    {
      id: "comp-5",
      title: "Web Development Challenge",
      deadline: "June 15, 2023",
      status: "Registered",
      statusColor: "bg-secondary",
    },
    {
      id: "comp-6",
      title: "Mobile App Innovation Contest",
      deadline: "July 20, 2023",
      status: "Pending Verification",
      statusColor: "bg-yellow-500",
    },
  ];
  
  const pastCompetitions = [
    {
      id: "comp-1",
      title: "Data Science Hackathon",
      date: "March 10-12, 2023",
      result: "2nd Place",
      certificate: true,
    },
    {
      id: "comp-2",
      title: "UI/UX Design Challenge",
      date: "January 25, 2023",
      result: "Participant",
      certificate: true,
    },
    {
      id: "comp-3",
      title: "Blockchain Innovation",
      date: "November 5-7, 2022",
      result: "Finalist",
      certificate: true,
    },
  ];
  
  const notifications = [
    {
      id: "notif-1",
      type: "success",
      message: "Your registration for Web Development Challenge has been confirmed",
      time: "2 hours ago",
      icon: <CheckCircle size={16} className="text-secondary" />,
    },
    {
      id: "notif-2",
      type: "warning",
      message: "Verification pending for Mobile App Innovation Contest",
      time: "1 day ago",
      icon: <Clock3 size={16} className="text-yellow-500" />,
    },
    {
      id: "notif-3",
      type: "alert",
      message: "3 days left to complete your submission for Web Development Challenge",
      time: "3 days ago",
      icon: <AlertCircle size={16} className="text-alert" />,
    },
  ];
  
  // User profile data
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    joinDate: "January 15, 2023",
    competitions: 5,
    awards: 2,
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome, {user.firstName}!</h1>
              <p className="text-neutral-muted">
                Manage your competitions and track your progress
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Bell size={16} />
                <span className="sr-only sm:not-sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Settings size={16} />
                <span className="sr-only sm:not-sr-only">Settings</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1 text-alert">
                <LogOut size={16} />
                <span className="sr-only sm:not-sr-only">Logout</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.firstName[0]}{user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-neutral-muted text-sm">{user.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-neutral-background rounded-lg">
                    <p className="text-2xl font-bold text-primary">{user.competitions}</p>
                    <p className="text-sm text-neutral-muted">Competitions</p>
                  </div>
                  <div className="text-center p-3 bg-neutral-background rounded-lg">
                    <p className="text-2xl font-bold text-primary">{user.awards}</p>
                    <p className="text-sm text-neutral-muted">Awards</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-border">
                  <Link to="/profile">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <User size={16} />
                      <span>Edit Profile</span>
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex gap-3 pb-3 border-b border-neutral-border last:border-0 last:pb-0">
                      <div className="mt-0.5">{notification.icon}</div>
                      <div>
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-neutral-muted mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {notifications.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-neutral-border text-center">
                    <Link to="/notifications" className="text-sm text-primary hover:underline">
                      View All Notifications
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="card mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-xl font-semibold mb-2 sm:mb-0">Dashboard</h2>
                  <div className="flex space-x-2">
                    <Button
                      variant={activeTab === "overview" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </Button>
                    <Button
                      variant={activeTab === "current" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("current")}
                    >
                      Current
                    </Button>
                    <Button
                      variant={activeTab === "past" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("past")}
                    >
                      Past
                    </Button>
                  </div>
                </div>
                
                {/* Action cards */}
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <Link
                      to="/competitions"
                      className="bg-primary/10 p-4 rounded-lg hover:bg-primary/15 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-full bg-primary/20">
                          <Award size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Find Competitions</h3>
                          <p className="text-sm text-neutral-muted">
                            Browse open competitions and register
                          </p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link
                      to="/submission/new"
                      className="bg-secondary/10 p-4 rounded-lg hover:bg-secondary/15 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-full bg-secondary/20">
                          <FileText size={20} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Submit Entry</h3>
                          <p className="text-sm text-neutral-muted">
                            Upload and manage your submissions
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                
                {/* Upcoming competitions */}
                {(activeTab === "overview" || activeTab === "current") && upcomingCompetitions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {activeTab === "overview" ? "Upcoming Competitions" : "Current Competitions"}
                    </h3>
                    <div className="space-y-4">
                      {upcomingCompetitions.map((competition) => (
                        <div
                          key={competition.id}
                          className="border border-neutral-border rounded-lg p-4 hover:border-primary/30 hover:bg-neutral-background transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{competition.title}</h4>
                              <div className="flex items-center text-sm text-neutral-muted mt-1">
                                <Calendar size={14} className="mr-1" />
                                <span>Deadline: {competition.deadline}</span>
                              </div>
                            </div>
                            <div className={`px-2 py-1 rounded text-xs text-white ${competition.statusColor}`}>
                              {competition.status}
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Link to={`/competitions/${competition.id}`}>
                              <Button size="sm" variant="outline">View Details</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Past competitions */}
                {(activeTab === "overview" || activeTab === "past") && pastCompetitions.length > 0 && (
                  <div className={activeTab === "overview" ? "mt-6 pt-6 border-t border-neutral-border" : ""}>
                    <h3 className="text-lg font-semibold mb-4">
                      Past Competitions
                    </h3>
                    <div className="space-y-4">
                      {pastCompetitions.map((competition) => (
                        <div
                          key={competition.id}
                          className="border border-neutral-border rounded-lg p-4 hover:border-primary/30 hover:bg-neutral-background transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{competition.title}</h4>
                              <div className="flex items-center text-sm text-neutral-muted mt-1">
                                <Clock size={14} className="mr-1" />
                                <span>{competition.date}</span>
                              </div>
                            </div>
                            <div className="px-2 py-1 rounded text-xs text-primary bg-primary/10">
                              {competition.result}
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end space-x-2">
                            {competition.certificate && (
                              <Button size="sm" variant="outline">Download Certificate</Button>
                            )}
                            <Link to={`/competitions/${competition.id}/results`}>
                              <Button size="sm" variant="outline">View Results</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Register CTA */}
                <div className="mt-8 text-center bg-neutral-background p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Ready for your next challenge?</h3>
                  <p className="text-neutral-muted mb-4">
                    Discover open competitions and showcase your skills.
                  </p>
                  <Link to="/competitions">
                    <Button>Find Competitions</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
