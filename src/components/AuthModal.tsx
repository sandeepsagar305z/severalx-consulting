"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, User, Building2, Eye, EyeOff, Mail } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BRAND_COLORS } from "@/lib/constants";

// Validation schemas
const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignUpForm = z.infer<typeof signUpSchema>;
type LoginForm = z.infer<typeof loginSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signUpForm = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      password: "",
    },
  });

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignUp = async (data: SignUpForm) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onSuccess();
      } else {
        const error = await response.json();
        signUpForm.setError("root", { message: error.message });
      }
    } catch {
      signUpForm.setError("root", { message: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onSuccess();
      } else {
        const error = await response.json();
        loginForm.setError("root", { message: error.message });
      }
    } catch {
      loginForm.setError("root", { message: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-2xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#63b583] via-[#4a9666] to-[#63b583] bg-clip-text text-transparent">
            Access Severalx Chat
          </DialogTitle>
          <DialogDescription className="text-gray-300 mt-2">
            Sign up or log in to access our AI consulting assistant
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signup" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 backdrop-blur-sm border border-white/10">
            <TabsTrigger
              value="signup"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#63b583]/20 transition-all duration-300"
            >
              Sign Up
            </TabsTrigger>
            <TabsTrigger
              value="login"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-[#63b583]/20 transition-all duration-300"
            >
              Login
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signup" className="space-y-5 mt-6">
            <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User className="h-4 w-4 text-[#63b583]" />
                  Full Name
                </label>
                <Input
                  {...signUpForm.register("name")}
                  placeholder="Enter your full name"
                  className="bg-gray-800/50 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#63b583] focus:ring-[#63b583]/20 transition-all duration-300"
                />
                {signUpForm.formState.errors.name && (
                  <p className="text-sm text-red-400">{signUpForm.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#63b583]" />
                  Email Address
                </label>
                <Input
                  {...signUpForm.register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-gray-800/50 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#63b583] focus:ring-[#63b583]/20 transition-all duration-300"
                />
                {signUpForm.formState.errors.email && (
                  <p className="text-sm text-red-400">{signUpForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#63b583]" />
                  Company Name
                </label>
                <Input
                  {...signUpForm.register("company")}
                  placeholder="Enter your company name"
                  className="bg-gray-800/50 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#63b583] focus:ring-[#63b583]/20 transition-all duration-300"
                />
                {signUpForm.formState.errors.company && (
                  <p className="text-sm text-red-400">{signUpForm.formState.errors.company.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#63b583]" />
                  Password
                </label>
                <div className="relative">
                  <Input
                    {...signUpForm.register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                    className="bg-gray-800/50 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#63b583] focus:ring-[#63b583]/20 transition-all duration-300 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#63b583] transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {signUpForm.formState.errors.password && (
                  <p className="text-sm text-red-400">{signUpForm.formState.errors.password.message}</p>
                )}
              </div>

              {signUpForm.formState.errors.root && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-sm text-red-400 text-center">{signUpForm.formState.errors.root.message}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full ${BRAND_COLORS.gradient.primary} text-white border-0 shadow-lg hover:shadow-xl hover:shadow-[#63b583]/30 transition-all duration-300 hover:-translate-y-1 py-3 font-semibold`}
              >
                {isLoading ? "Creating Account..." : "Sign Up & Access Chat"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="login" className="space-y-5 mt-6">
            <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#63b583]" />
                  Email Address
                </label>
                <Input
                  {...loginForm.register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-gray-800/50 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#63b583] focus:ring-[#63b583]/20 transition-all duration-300"
                />
                {loginForm.formState.errors.email && (
                  <p className="text-sm text-red-400">{loginForm.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#63b583]" />
                  Password
                </label>
                <div className="relative">
                  <Input
                    {...loginForm.register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-gray-800/50 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#63b583] focus:ring-[#63b583]/20 transition-all duration-300 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#63b583] transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-sm text-red-400">{loginForm.formState.errors.password.message}</p>
                )}
              </div>

              {loginForm.formState.errors.root && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-sm text-red-400 text-center">{loginForm.formState.errors.root.message}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full ${BRAND_COLORS.gradient.primary} text-white border-0 shadow-lg hover:shadow-xl hover:shadow-[#63b583]/30 transition-all duration-300 hover:-translate-y-1 py-3 font-semibold`}
              >
                {isLoading ? "Signing In..." : "Login & Access Chat"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
