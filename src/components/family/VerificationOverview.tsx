import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Upload, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { FamilyMember } from '@/types/family';

interface VerificationOverviewProps {
  member: FamilyMember;
}

export const VerificationOverview = ({ member }: VerificationOverviewProps) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    `Hi ${member.name}, please verify our family relationship by clicking the link below.`
  );

  const handleSendVerification = async () => {
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }
    
    // TODO: Implement actual verification link sending
    toast.success('Verification link sent successfully');
  };

  const getStatusIcon = () => {
    if (member.isVerified) return <CheckCircle2 className="text-green-500" />;
    return <Clock className="text-yellow-500" />;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
            <CardDescription>{member.relationship}</CardDescription>
          </div>
          {getStatusIcon()}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <Input
            type="email"
            placeholder="Enter their email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Verification Message</label>
          <Textarea
            placeholder="Add a personal message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleSendVerification}
            className="flex-1"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Verification Link
          </Button>
          <Button
            variant="outline"
            className="flex-1"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Documents
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};