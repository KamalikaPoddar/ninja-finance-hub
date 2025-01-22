import { useNavigate } from 'react-router-dom';
import { sampleAccounts } from '@/data/accounts';
import AccountCard from '@/components/vault/AccountCard';
import { ArrowLeft, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { theme } from '@/config/theme';

export const VaultExpanded = () => {
  const navigate = useNavigate();
  const accounts = sampleAccounts;

  return (
    <div className="min-h-screen bg-background"> 
      <div className="w-full md:w-[1200px] min-h-screen bg-white rounded-lg shadow-sm flex flex-col relative mx-auto">
        <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm fixed top-0 z-10">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => navigate('/vault')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-semibold text-neutral-950">Your Vault</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>
      
        <div className="p-6 flex flex-col gap-8 mt-16">
          <section className="flex flex-col gap-4">
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                onClick={() => navigate(`/account/${account.id}`)}
              />
            ))}
          </section>
        </div>
      
        <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center rounded-t-lg">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center h-auto py-2"
            onClick={() => navigate('/')}
          >
            <span className="material-symbols-outlined text-lg">home</span>
            <span className="text-sm">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center h-auto py-2 text-primary"
            onClick={() => navigate('/vault')}
          >
            <span className="material-symbols-outlined text-lg">lock</span>
            <span className="text-sm">Vault</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center h-auto py-2"
          >
            <span className="material-symbols-outlined text-lg">explore</span>
            <span className="text-sm">Discover</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center h-auto py-2"
          >
            <span className="material-symbols-outlined text-lg">track_changes</span>
            <span className="text-sm">Track</span>
          </Button>
        </nav>
      </div>
    </div>
  );
};