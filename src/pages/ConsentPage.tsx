import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { ArrowLeft } from 'lucide-react';
import { theme } from '@/config/theme';

const ConsentPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <Header />
      <div className="max-w-4xl mx-auto p-6 pt-24">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            style={{ color: theme.colors.text.primary }}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 
            className="text-2xl font-bold"
            style={{ color: theme.colors.text.primary }}
          >
            Add Account
          </h1>
        </div>

        <div 
          className="bg-white p-6 rounded-lg"
          style={{ backgroundColor: theme.colors.surface }}
        >
          <h2 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Select Financial Institution
          </h2>
          
          <div className="mb-6">
            <select 
              className="w-full p-2 border rounded"
              style={{ 
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.text.secondary,
                color: theme.colors.text.primary
              }}
            >
              <option value="">Select your bank</option>
              <option value="bank1">Bank One</option>
              <option value="bank2">Bank Two</option>
            </select>
          </div>

          <div className="mb-6">
            <p 
              className="text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              We will fetch balances, transaction dates, etc., using aggregator [XYZ].
            </p>
          </div>

          <div className="flex justify-end">
            <Button 
              style={{ 
                backgroundColor: theme.colors.primary,
                color: theme.colors.surface
              }}
            >
              Confirm & Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentPage;