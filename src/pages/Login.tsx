
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    
    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate login - in a real app, we would call an API here
      console.log("Login attempt:", formData);
      
      // For demo purposes, we'll just show a success message
      toast.success("Login successful! Redirecting to dashboard...");
      
      // Here we would typically navigate to dashboard after successful login
      // For demo purposes, we'll just redirect to dashboard after a brief delay
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-neutral-muted mt-2">
                Sign in to your account to continue
              </p>
            </div>
            
            <div className="card bg-white shadow-sm">
              <div className="px-4 py-5 sm:p-6">
                {errors.form && (
                  <div className="mb-4 p-3 bg-alert/10 border border-alert/20 rounded-lg text-alert text-sm">
                    {errors.form}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-alert" : ""}
                    />
                    {errors.email && (
                      <p className="text-alert text-sm">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? "border-alert pr-10" : "pr-10"}
                      />
                      <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-muted hover:text-neutral-text"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-alert text-sm">{errors.password}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => 
                        setFormData({
                          ...formData, 
                          rememberMe: checked === true
                        })
                      }
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-neutral-muted">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
