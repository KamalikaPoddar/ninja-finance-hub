import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { NavBar } from '@/components/layout/NavBar';
import { Header } from '@/components/layout/Header';
import Index from '@/pages/Index';
import Signup from '@/pages/Signup';
import Vault from '@/pages/Vault';
import ConsentPage from '@/pages/ConsentPage';
import AccountDetail from '@/pages/AccountDetail';
import AddAccount from '@/pages/AddAccount';
import { AddAccountStep2 } from '@/pages/AddAccountStep2';
import { VaultExpanded } from '@/pages/VaultExpanded';
import FamilyTreePage from '@/pages/FamilyTree';
import AddFamilyMember from '@/pages/AddFamilyMember';
import FamilyVerification from '@/pages/FamilyVerification';
import VerifyRelationship from '@/pages/VerifyRelationship';
import { Account } from '@/pages/Account';
import { Home, Lock, Wallet } from 'lucide-react';
import { FamilyIcon } from '@/components/icons/FamilyIcon';

const navItems = [
  {
    name: 'Home',
    url: '/',
    icon: Home
  },
  {
    name: 'Vault',
    url: '/vault',
    icon: Lock
  },
  {
    name: 'Accounts',
    url: '/account',
    icon: Wallet
  },
  {
    name: 'Family Tree',
    url: '/family-tree',
    icon: FamilyIcon
  }
];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <NavBar items={navItems} />
        <div className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:accountId" element={<AccountDetail />} />
            <Route path="/add-account" element={<AddAccount />} />
            <Route path="/add-account-step2" element={<AddAccountStep2 />} />
            <Route path="/vault/expanded" element={<VaultExpanded />} />
            <Route path="/family-tree" element={<FamilyTreePage />} />
            <Route path="/family-tree/add" element={<AddFamilyMember />} />
            <Route path="/family-tree/verify" element={<FamilyVerification />} />
            <Route path="/verify" element={<VerifyRelationship />} />
          </Routes>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;