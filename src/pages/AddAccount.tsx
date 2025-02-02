import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { theme } from "@/config/theme";
import { Loading } from "@/components/ui/loading";
import { X } from "lucide-react";
import "../styles.css"; // Ensure this CSS is added to your project

const AddAccount = () => {
  const navigate = useNavigate();
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className="min-h-screen relative z-10"
      style={{
        backgroundColor: theme.colors.background,
        paddingTop: "80px", // Accounts for the fixed header
      }}
    >
      <Header />
      {isLoading && <Loading message="Discovering your financial accounts" />}

      <div className="max-w-[1200px] mx-auto p-6">
        <div className="w-full min-h-[calc(100vh-80px)] bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-8 py-6">
            {/* Header + Close Button */}
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
                Add a New Account
              </h1>
              <button
                onClick={() => navigate("/vault")}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                style={{ color: theme.colors.text.primary }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Toggle and Search Bar */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between px-4 py-3 bg-violet-50 rounded-lg">
                <span className="text-sm font-medium">Select All Institutions</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={showAllInstitutions}
                    onChange={(e) => setShowAllInstitutions(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                    after:left-[2px] after:bg-white after:border-gray-300 after:border 
                    after:rounded-full after:h-5 after:w-5 after:transition-all 
                    peer-checked:bg-violet-500"
                  />
                </label>
              </div>

              {/* Only show search if NOT showing all institutions */}
              {!showAllInstitutions && (
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search institutions..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none 
                      focus:ring-2 focus:ring-violet-500 transition-all"
                  />
                </div>
              )}
            </div>

            {/* Security Note */}
            <div className="bg-violet-50 p-4 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-violet-500 mt-1">
                  security
                </span>
                <div>
                  <h2 className="font-semibold mb-1">Bank-Grade Security</h2>
                  <p className="text-sm text-gray-600">
                    Your data is encrypted and protected using RBI licensed Finvu technology.
                  </p>
                </div>
              </div>
            </div>

            {/* History Toggle */}
            <div className="flex items-center gap-3 mb-8 bg-gray-50 p-4 rounded-xl">
              <span className="material-symbols-outlined text-violet-500">history</span>
              <p className="text-sm flex-1">Include last 12 months history</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div
                  className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                  peer-checked:after:translate-x-full peer-checked:after:border-white 
                  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                  peer-checked:bg-violet-500"
                />
              </label>
            </div>

            {/* Connect Button */}
            <button
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 
                rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                onClick={() => navigate('/add-account-step2')}
            >
              Connect Securely
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
