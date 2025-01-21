import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { theme } from '@/config/theme';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { OrangeToggle } from '@/components/ui/toggle';

const AddAccount = () => {
  const navigate = useNavigate();
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);
  const [addTransactionHistory, setAddTransactionHistory] = useState(false);

  return (
    <div 
      className="min-h-screen relative z-10" 
      style={{ 
        backgroundColor: theme.colors.background,
        paddingTop: '80px' // Added to account for fixed header
      }}
    >
      <Header />
      <div className="max-w-[1200px] mx-auto p-6">
        <div className="w-full min-h-[calc(100vh-80px)] bg-white rounded-lg shadow-sm flex flex-col">
          {/* Page Header */}
          <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm rounded-t-lg">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/vault')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                style={{ color: theme.colors.text.primary }}
              >
                <X className="h-5 w-5" />
              </button>
              <h1 
                className="text-3xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                Add a New Account
              </h1>
            </div>
            <Button 
              variant="ghost"
              style={{ color: theme.colors.text.primary }}
            >
              Profile
            </Button>
          </header>

          {/* Main Content */}
          <div className="p-6 flex flex-col gap-8">
            {/* Institution Selection */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 
                  className="text-lg font-semibold"
                  style={{ color: theme.colors.text.primary }}
                >
                  Institution Selection
                </h2>
                <div className="flex items-center gap-2">
                  <span 
                    className="text-sm"
                    style={{ color: theme.colors.text.primary }}
                  >
                    ALL
                  </span>
                  <OrangeToggle
                    checked={showAllInstitutions}
                    onChange={(e) => setShowAllInstitutions(e.target.checked)}
                  />
                </div>
              </div>

              {!showAllInstitutions && (
                <div className="relative w-full max-w-md flex items-center">
                  <Search 
                    className="absolute left-3"
                    style={{ color: theme.colors.text.secondary }}
                  />
                  <input
                    type="text"
                    className="pl-10 pr-3 py-2 border-2 rounded-md w-full"
                    style={{ 
                      borderColor: theme.colors.background,
                      color: theme.colors.text.primary
                    }}
                    placeholder="Search institutions..."
                  />
                </div>
              )}
            </section>

            {/* Consent Explanation */}
            <section>
              <h2 
                className="text-lg font-semibold"
                style={{ color: theme.colors.text.primary }}
              >
                Consent Explanation
              </h2>
              <p 
                className="mb-2"
                style={{ color: theme.colors.text.secondary }}
              >
                We will fetch your account details and a summary of your accounts, using aggregator <strong>Finvu</strong>.
              </p>
              <Button 
                variant="link"
                style={{ color: theme.colors.primary }}
              >
                Read More
              </Button>
            </section>

            {/* Add Transaction History */}
            <section>
              <div className="flex items-center justify-between">
                <h2 
                  className="text-lg font-semibold"
                  style={{ color: theme.colors.text.primary }}
                >
                  Add Transaction History
                </h2>
                <OrangeToggle
                  checked={addTransactionHistory}
                  onChange={(e) => setAddTransactionHistory(e.target.checked)}
                />
              </div>
              <p 
                className="text-sm"
                style={{ color: theme.colors.text.secondary }}
              >
                If ON, last 12 months of transaction data will be fetched.
              </p>
            </section>

            {/* Confirm Button */}
            <section>
              <Button 
                className="w-full py-3 text-lg font-semibold rounded-md transition-transform hover:scale-105"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.surface
                }}
                disabled
              >
                Confirm & Link
              </Button>
            </section>
          </div>

          {/* Footer */}
          <footer className="p-4 border-t rounded-b-lg" style={{ borderColor: theme.colors.background }}>
            <div className="flex items-center justify-between">
              <div 
                className="h-[4px] w-full rounded-md"
                style={{ backgroundColor: theme.colors.background }}
              >
                <div 
                  className="h-full rounded-md"
                  style={{ 
                    width: '33%',
                    backgroundColor: theme.colors.primary
                  }}
                />
              </div>
              <p 
                className="text-sm ml-4"
                style={{ color: theme.colors.text.secondary }}
              >
                Step 1 of 3
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;