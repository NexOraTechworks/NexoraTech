
"use client";

import {
  User,
  ChevronDown,
  ChevronUp,
  LogOut,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { PopUp } from "@/app/components/PopUp";
import AuthLoader from "../components/AuthLoader";

export function ProfileOpt({ username }) {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const [popUp, setPopUp] = useState({
    show: false,
    message: "",
  });

  const router = useRouter();

  const toggleOptions = () => {
    if (loading) return;
    setToggle((prev) => !prev);
  };

  const logOut = async () => {
    if (loading) return;

    setLoading(true);
    setToggle(false);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`,
        {},
        { withCredentials: true }
      );

      // Keep loader visible during navigation
      router.replace("/admin/login");

    } catch (error) {
      console.error(
        "Logout failed:",
        error.response?.data || error.message
      );

      setLoading(false);

      setPopUp({
        show: true,
        message:
          error.response?.data?.message ||
          "Unable to logout. Please try again.",
      });
    }
  };

  return (
    <>
      {/* Fullscreen logout loader */}
      {loading && (
        <AuthLoader
          title="Signing out"
          description="Ending your secure session..."
        />
      )}

      <div className="relative">

        {/* Profile trigger */}
        <button
          type="button"
          onClick={toggleOptions}
          disabled={loading}
          aria-expanded={toggle}
          aria-haspopup="true"
          className="flex items-center gap-1.5 cursor-pointer text-white transition-colors hover:text-emerald-400 disabled:opacity-50"
        >
          <User size={16} />

          <span className="text-sm">
            {username || "User"}
          </span>

          {toggle ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* Dropdown */}
        <div
          className={`
            absolute right-0 top-full z-50 mt-3
            w-40 rounded-xl
            border border-[#1A2A48]
            bg-[#020B18] p-1.5
            shadow-xl shadow-black/30
            transition-all duration-200 ease-out
            ${
              toggle
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-2 opacity-0 pointer-events-none"
            }
          `}
        >
          <button
            type="button"
            onClick={logOut}
            disabled={loading}
            className="
              flex w-full items-center gap-3
              rounded-lg px-3 py-2.5
              text-sm text-red-400
              transition-colors duration-200
              hover:bg-red-500/10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-red-400
              disabled:opacity-50
            "
          >
            <LogOut size={16} />

            <span>Logout</span>
          </button>
        </div>

      </div>

      <PopUp
        text={popUp.message}
        show={popUp.show}
      />
    </>
  );
}
