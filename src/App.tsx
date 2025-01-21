import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Index from '@/pages/Index';
import Signup from '@/pages/Signup';
import Vault from '@/pages/Vault';
import ConsentPage from '@/pages/ConsentPage';
import AccountDetail from '@/pages/AccountDetail';
import AddAccount from '@/pages/AddAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/consent" element={<ConsentPage />} />
        <Route path="/account/:accountId" element={<AccountDetail />} />
        <Route path="/add-account" element={<AddAccount />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;