import React from "react";
import { useNavigate } from "react-router-dom";
import { sampleAccounts } from '@/data/accounts';
import AccountCard from '@/components/vault/AccountCard';

export const VaultExpanded: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="webcrumbs"> 
      <div className="w-full md:w-[1200px] min-h-screen bg-white rounded-lg shadow-sm flex flex-col relative">
        <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 bg-white rounded-full shadow-sm text-neutral-950"
              onClick={() => navigate(-1)}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-3xl font-title text-neutral-950">Your Vault</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full shadow-sm text-neutral-950">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 bg-white rounded-full shadow-sm text-neutral-950">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </header>
      
        <div className="p-6 flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-neutral-50 py-4 px-6 rounded-md shadow-sm flex flex-col gap-2 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-950">Bank {i + 1}</h3>
                  <button className="flex items-center gap-1 px-3 py-1 text-sm font-semibold bg-primary-100 border border-primary-300 rounded-full text-primary-700 hover:bg-primary-200">
                    <span className="material-symbols-outlined text-sm">person_off</span> No Nominee
                  </button>
                </div>
                <div>
                  <p className="text-xl font-semibold text-primary-950">₹25,000</p>
                  <p className="text-sm text-neutral-700">
                    <span className="material-symbols-outlined text-base align-middle">event</span> Last transaction: 20/12/2024
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-red-700 bg-red-50 border border-red-300 rounded-full">
                    <span className="material-symbols-outlined text-sm">link</span> Reauthorise
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-red-700 bg-red-50 border border-red-300 rounded-full">
                    <span className="material-symbols-outlined text-sm">warning</span> Dormant
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      
        <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center rounded-t-lg">
          <button className="text-neutral-700 flex flex-col items-center">
            <span className="material-symbols-outlined text-lg">home</span>
            <span className="text-sm">Home</span>
          </button>
          <button className="text-primary-700 flex flex-col items-center">
            <span className="material-symbols-outlined text-lg">lock</span>
            <span className="text-sm">Vault</span>
          </button>
          <button className="text-neutral-700 flex flex-col items-center">
            <span className="material-symbols-outlined text-lg">explore</span>
            <span className="text-sm">Discover</span>
          </button>
          <button className="text-neutral-700 flex flex-col items-center">
            <span className="material-symbols-outlined text-lg">track_changes</span>
            <span className="text-sm">Track</span>
          </button>
        </nav>
      </div> 
    </div>
  );
};
