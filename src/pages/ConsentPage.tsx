import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Institution } from '@/types/account';
import { Header } from '@/components/layout/Header';

const institutions: Institution[] = [
  { id: 'bank1', name: 'Bank One' },
  { id: 'bank2', name: 'Bank Two' },
  { id: 'bank3', name: 'Bank Three' },
];

const ConsentPage = () => {
  const [institutionId, setInstitutionId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const selectedInstitution = institutions.find(i => i.id === institutionId);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // TODO: Implement aggregator API call
      // Simulate successful linking
      setTimeout(() => {
        toast({
          title: 'Success',
          description: 'Accounts linked successfully!',
        });
        navigate('/vault');
      }, 2000);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to link accounts. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-6 pt-24"> {/* Added pt-24 for header spacing */}
        <h1 className="text-2xl font-bold mb-6">Link New Account</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Select Financial Institution</label>
            <Select onValueChange={setInstitutionId} value={institutionId}>
              <SelectTrigger>
                <SelectValue placeholder="Select institution" />
              </SelectTrigger>
              <SelectContent>
                {institutions.map(institution => (
                  <SelectItem key={institution.id} value={institution.id}>
                    {institution.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedInstitution && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                We will fetch balances, transaction dates, etc., using aggregator XYZ for {selectedInstitution.name}.
              </p>
            </div>
          )}

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => navigate('/vault')}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={!institutionId || isLoading}>
              {isLoading ? 'Linking...' : 'Confirm & Link'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentPage;