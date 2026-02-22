"use client";

import React from "react";
import { Lock, Mail, Send } from "lucide-react";
import Link from "next/link";
import { RecoveryCard, SecurityNotice, HelpSection } from "../../RecoveryShared";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen flex items-center justify-center py-16">
      <RecoveryCard icon={<Lock size={36} />}>
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-bold text-[#1A1A1A] mb-3">
            Forgot your password?
          </h1>
          <p className="text-[14px] text-[#666666] leading-relaxed max-w-[400px] mx-auto">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-[14px] font-medium text-[#333333] mb-2 text-left">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Your registered email address"
                className="w-full h-[48px] border border-[#E5E5E5] rounded-md px-4 pr-12 text-[14px] focus:border-2 focus:border-[#7c1aff] outline-none transition-all"
              />
              <Mail
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]"
              />
            </div>
          </div>

          <button className="w-full h-[48px] bg-[#7c1aff] hover:bg-[#6b21a8] text-white rounded-md font-semibold text-[15px] flex items-center justify-center gap-2 transition-colors mt-4">
            <Send size={18} className="rotate-15" />
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-[14px] text-[#666666]">
            Remember your password?{" "}
            <Link
              href="/auth/login"
              className="text-[#7c1aff] hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>

        <SecurityNotice />
      </RecoveryCard>

      <HelpSection />
    </div>
  );
}