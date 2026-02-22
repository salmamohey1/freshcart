"use client";

import LoginHero from "../components/login/loginHero";
import LoginForm from "../components/login/loginForm";

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section - Hero (Visible on Desktop) */}
          <div className="hidden lg:block">
            <LoginHero />
          </div>

          {/* Right Section - Form */}
          <div className="flex justify-center lg:justify-end">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary-100 blur-[120px] rounded-full opacity-50 animate-pulse"></div>

     {/* Background decoration */}
<div className="fixed top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary-100 blur-[120px] rounded-full opacity-50"></div>
<div className="fixed bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-primary-200 blur-[100px] rounded-full opacity-30"></div>
    </div>
  );
}