import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { theme } from '@/config/theme';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { OrangeToggle } from '@/components/ui/toggle';

const mockAccounts = [
  {
    institution: 'HDFC Bank',
    type: 'Savings Account',
    accountNumber: '****1234'
  },
  {
    institution: 'ICICI Bank',
    type: 'Fixed Deposit',
    accountNumber: '****5678'
  },
  {
    institution: 'SBI Life Insurance',
    type: 'Insurance',
    policyNumber: '****9012'
  }
];

export const AddAccountStep2 = () => {
  const navigate = useNavigate();
  const [linkedAccounts, setLinkedAccounts] = useState<string[]>([]);
  const [otpStates, setOtpStates] = useState<Record<string, boolean>>({});

  const handleLinkAll = () => {
    const allIds = mockAccounts.map(acc => `${acc.institution}-${acc.accountNumber || acc.policyNumber}`);
    setLinkedAccounts(allIds);
  };

  const [otpValues, setOtpValues] = useState<Record<string, string>>({});
  const [otpError, setOtpError] = useState<{id: string | null, message: string | null}>({id: null, message: null});

  const { toast } = useToast();

  const handleVerifyOTP = (id: string, otp: string) => {
    if (otp === '1234') {
      setOtpStates(prev => ({ ...prev, [id]: true }));
      setOtpError(null);
      setLinkedAccounts(prev => prev.filter(a => a !== id));
      
      // For Link All, process next account
      if (linkedAccounts.length > 1) {
        const currentIndex = linkedAccounts.indexOf(id);
        if (currentIndex < linkedAccounts.length - 1) {
          const nextId = linkedAccounts[currentIndex + 1];
          // Scroll to next account
          document.getElementById(nextId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    } else {
      setOtpError({id, message: 'Invalid OTP. Please try again.'});
      toast({
        title: 'Error',
        description: 'Incorrect OTP',
        variant: 'destructive'
      });
      return;
    }
  };

  return (
    <div 
      className="min-h-screen relative z-10" 
      style={{ 
        backgroundColor: theme.colors.background,
        paddingTop: '80px'
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
                Link Your Accounts
              </h1>
            </div>
            <Button 
              onClick={handleLinkAll}
              style={{ 
                backgroundColor: theme.colors.primary,
                color: theme.colors.surface
              }}
            >
              Link All
            </Button>
          </header>

          {/* Main Content */}
          <div className="p-6 flex flex-col gap-4">
            {mockAccounts.map((account, index) => {
              const id = `${account.institution}-${account.accountNumber || account.policyNumber}`;
              const isLinked = linkedAccounts.includes(id);
              const isVerified = otpStates[id];

              return (
                <div 
                  key={id}
                  className="p-4 border rounded-lg flex items-center justify-between"
                  style={{ borderColor: theme.colors.background }}
                >
                  <div>
                    <h3 className="font-medium" style={{ color: theme.colors.text.primary }}>
                      {account.institution}
                    </h3>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      {account.type} ({account.accountNumber || account.policyNumber})
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    {isVerified ? (
                      <Check className="h-5 w-5" style={{ color: theme.colors.primary }} />
                    ) : (
                      <>
                        {isLinked && !isVerified && (
                          <div className="flex items-center gap-2">
                            <input
                              id={`otp-${id}`}
                              type="text"
                              maxLength={4}
                              className="w-20 px-2 py-1 border rounded-md text-center"
                              style={{
                                borderColor: otpError ? theme.colors.error : theme.colors.background,
                                color: theme.colors.text.primary
                              }}
                              placeholder="OTP"
                              value={otpValues[id] || ''}
                              onChange={(e) => {
                                setOtpValues(prev => ({ ...prev, [id]: e.target.value }));
                                setOtpError(null);
                              }}
                            />
                            <div className="relative">
                              {otpError.id === id && otpError.message && (
                                <div className="relative">
                                  <p className="text-sm absolute -top-6 left-0" style={{ color: theme.colors.error }}>
                                    {otpError.message}
                                  </p>
                                </div>
                              )}
                            </div>
                            <Button
                              onClick={() => {
                                const otp = otpValues[id] || '';
                                if (otp.length !== 4) {
                                  toast({
                                    title: 'Error',
                                    description: 'Please enter a 4-digit OTP',
                                    variant: 'destructive'
                                  });
                                  return;
                                }
                                handleVerifyOTP(id, otp);
                              }}
                              style={{
                                backgroundColor: theme.colors.primary,
                                color: theme.colors.surface
                              }}
                            >
                              Proceed
                            </Button>
                          </div>
                        )}
                        <OrangeToggle
                          checked={isLinked}
                          onChange={() => {
                            if (isLinked) {
                              setLinkedAccounts(prev => prev.filter(a => a !== id));
                            } else {
                              setLinkedAccounts(prev => [...prev, id]);
                            }
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
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
                    width: '66%',
                    backgroundColor: theme.colors.primary
                  }}
                />
              </div>
              <p 
                className="text-sm ml-4"
                style={{ color: theme.colors.text.secondary }}
              >
                Step 2 of 3
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};