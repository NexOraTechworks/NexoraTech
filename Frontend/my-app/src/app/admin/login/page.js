
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Mail,
  UserRound,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  Terminal,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { cookies } from "next/headers";

export default function AdminSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // localStorage.setItem("pass", "mynameisAkash@69");

  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    password: "",
    token:"",
  });
  const router  = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus(null);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus(null);

  //   if (formData.name.trim().length < 2) {
  //     setStatus({
  //       type: "error",
  //       message: "Please enter your full name.",
  //     });
  //     return;
  //   }

  //   if (formData.password.length < 12) {
  //     setStatus({
  //       type: "error",
  //       message: "Your password must contain at least 12 characters.",
  //     });
  //     return;
  //   }

  //   if (formData.password !== formData.confirmPassword) {
  //     setStatus({
  //       type: "error",
  //       message: "Your passwords do not match.",
  //     });
  //     return;
  //   }

  //   if (!formData.invitationCode.trim()) {
  //     setStatus({
  //       type: "error",
  //       message: "An invitation code is required.",
  //     });
  //     return;
  //   }

  //   // UI preview only. No account is created here.
  //   setIsLoading(true);

  //   await new Promise((resolve) => setTimeout(resolve, 400));

  //   setIsLoading(false);
  //   setStatus({
  //     type: "info",
  //     message:
  //       "The interface is ready. Connect the registration API to verify your invitation and create the admin account.",
  //   });
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios.post(process.env.NEXT_PUBLIC_LOGIN_API_URL,formData,{withCredentials:true})
      router.push("/admin")
    }catch(error){
      console.log(error)
    }
  };
  const inputClass =
    "w-full rounded-xl border border-white/[0.09] bg-[#0D1016] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 text-white ">
      {/* Background effects */}
      

      <div className="relative z-10 flex justify-center   w-full max-w-xl overflow-hidden rounded-3xl border border-white/8 bg-light  dark:bg-[#0D0F14]/90 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:grid-cols-2">
       

        {/* Signup form */}
        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mb-9 flex items-center justify-between ">
            
            <Link href="/" className="flex items-center gap-2">
              <Terminal size={23} className="text-emerald-400" />
              <span className="text-lg font-semibold text-charcoal dark:text-white">
                Nexora<span className="text-emerald-400">.</span>
              </span>
            </Link>

            <ShieldCheck className="text-emerald-400" size={24} />
          </div>

          <div className="mb-8 dark:text-white text-charcoal">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/6 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                Admin Registration
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight">
              Create your account
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Register using an authorized invitation to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium text-slate-300"
              >
                Full name
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="name"
                  name="username"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={formData.username}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={50}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
        
         
            {/* Confirm password */}
      
            {/* Invitation code */}
            <div>
              <label
                htmlFor="invitationCode"
                className="mb-2 block text-xs font-medium text-slate-300"
              >
                Password
              </label>

              <div className="relative">
                <KeyRound
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="invitationCode"
                  name="password"
                  type="password"
                  autoComplete="off"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  maxLength={256}
                  required
                  className={inputClass}
                />
              </div>

          

            </div>
            {/* <div>
              <label
                htmlFor="token"
                className="mb-2 block text-xs font-medium text-slate-300"
              >
               Token
              </label>

              <div className="relative">
                <KeyRound
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="token"
                  name="token"
                  type="password"
                  autoComplete="off"
                  placeholder="Enter your token"
                  value={formData.token}
                  onChange={handleChange}
                  maxLength={256}
                  required
                  className={inputClass}
                />
              </div>

       
              
            </div>
             */}

            {/* Status message */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-start gap-2 rounded-xl border p-3 text-xs leading-5 ${
                  status.type === "error"
                    ? "border-red-400/20 bg-red-400/6 text-red-300"
                    : "border-emerald-400/20 bg-emerald-400/6 text-emerald-200"
                }`}
              >
                {status.type === "error" ? (
                  <AlertCircle
                    size={16}
                    className="mt-0.5 shrink-0"
                  />
                ) : (
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span>{status.message}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-[#07110D] transition duration-200 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Preparing preview..." : "Submit"}

              {!isLoading && (
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button> 
        
          </form>

         

          

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-slate-600">
            <LockKeyhole size={12} />
            <span>AUTHORIZED PERSONNEL ONLY</span>
          </div>
        </section>
      </div>
    </main>
  );
}
