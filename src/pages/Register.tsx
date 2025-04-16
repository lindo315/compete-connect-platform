
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StepIndicator from "../components/StepIndicator";
import { toast } from "sonner";

const Register = () => {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    acceptTerms: false,
    acceptMarketing: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    acceptTerms: "",
  });

  const steps = ["Personal Info", "Account Setup", "Confirmation"];

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
    
    // Calculate password strength
    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  };

  const validateStep = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (step === 0) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
        valid = false;
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
        valid = false;
      }
    } else if (step === 1) {
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
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
        valid = false;
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        valid = false;
      }
      
      if (!formData.acceptTerms) {
        newErrors.acceptTerms = "You must accept the Terms of Service";
        valid = false;
      }
    }
    
    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep()) {
      // In a real app, we would submit the data to the server here
      console.log("Form submitted:", formData);
      toast.success("Registration successful! Redirecting to login...");
      
      // Here we would typically navigate to login page after successful registration
      // For demo purposes, we'll just advance to the confirmation step
      setStep(2);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "border-alert" : ""}
                />
                {errors.firstName && (
                  <p className="text-alert text-sm">{errors.firstName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "border-alert" : ""}
                />
                {errors.lastName && (
                  <p className="text-alert text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="+1 (123) 456-7890"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            
            <div className="pt-4">
              <Button type="button" onClick={nextStep} className="w-full">
                Continue
              </Button>
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-4">
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
              <Label htmlFor="password">Password</Label>
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
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex space-x-1 h-1">
                    <div
                      className={`h-full w-1/4 rounded-full ${
                        passwordStrength >= 1 ? "bg-alert" : "bg-neutral-border"
                      }`}
                    />
                    <div
                      className={`h-full w-1/4 rounded-full ${
                        passwordStrength >= 2 ? "bg-orange-400" : "bg-neutral-border"
                      }`}
                    />
                    <div
                      className={`h-full w-1/4 rounded-full ${
                        passwordStrength >= 3 ? "bg-yellow-400" : "bg-neutral-border"
                      }`}
                    />
                    <div
                      className={`h-full w-1/4 rounded-full ${
                        passwordStrength >= 4 ? "bg-secondary" : "bg-neutral-border"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-neutral-muted mt-1">
                    {passwordStrength === 0 && "Very weak"}
                    {passwordStrength === 1 && "Weak"}
                    {passwordStrength === 2 && "Fair"}
                    {passwordStrength === 3 && "Good"}
                    {passwordStrength === 4 && "Strong"}
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "border-alert" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-alert text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData({
                      ...formData, 
                      acceptTerms: checked === true
                    })
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="acceptTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
              {errors.acceptTerms && (
                <p className="text-alert text-sm">{errors.acceptTerms}</p>
              )}
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptMarketing"
                  name="acceptMarketing"
                  checked={formData.acceptMarketing}
                  onCheckedChange={(checked) => 
                    setFormData({
                      ...formData, 
                      acceptMarketing: checked === true
                    })
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="acceptMarketing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I want to receive updates about competitions and promotions
                  </label>
                </div>
              </div>
            </div>
            
            <div className="pt-4 space-y-2">
              <Button type="submit" className="w-full">
                Create Account
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="w-full"
              >
                Back
              </Button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold">Registration Successful!</h2>
            
            <p className="text-neutral-muted">
              Thank you for registering, {formData.firstName}! Your account has been created successfully.
            </p>
            
            <div className="card bg-neutral-background p-6 max-w-sm mx-auto">
              <p className="text-sm text-neutral-muted mb-2">Your account details:</p>
              <p className="font-medium">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-neutral-text">{formData.email}</p>
            </div>
            
            <div className="pt-4">
              <Link to="/login">
                <Button className="w-full sm:w-auto">
                  Proceed to Login
                </Button>
              </Link>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="text-neutral-muted mt-2">
                Join thousands of competitors on our platform
              </p>
            </div>
            
            <div className="card bg-white shadow-sm">
              <div className="px-4 py-5 sm:p-6">
                <StepIndicator steps={steps} currentStep={step} />
                
                <form onSubmit={handleSubmit} className="mt-6">
                  {renderStep()}
                </form>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-neutral-muted">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Log in
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

export default Register;
