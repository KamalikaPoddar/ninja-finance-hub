import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

const VerifyRelationship = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(false);
  const token = searchParams.get('token');

  const handleVerification = async (confirm: boolean) => {
    setIsVerifying(true);
    try {
      // TODO: Implement actual verification API call
      if (confirm) {
        toast.success('Relationship verified successfully');
      } else {
        toast.error('Relationship verification declined');
      }
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.error('An error occurred during verification');
    } finally {
      setIsVerifying(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-500">Invalid Verification Link</CardTitle>
            <CardDescription>
              This verification link appears to be invalid or has expired.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Verify Family Relationship</CardTitle>
          <CardDescription>
            Please confirm if you are related to the person who sent you this verification request.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button
              onClick={() => handleVerification(true)}
              disabled={isVerifying}
              className="flex-1"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Confirm Relationship
            </Button>
            <Button
              onClick={() => handleVerification(false)}
              disabled={isVerifying}
              variant="destructive"
              className="flex-1"
            >
              <XCircle className="mr-2 h-4 w-4" />
              Deny Relationship
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyRelationship;