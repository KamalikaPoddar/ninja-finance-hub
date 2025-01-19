import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AccountCard } from "@/components/vault/AccountCard";
import { Account, AccountType } from "@/types/account";
import { Bell, Plus, Search, Filter, ArrowUpDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Mock data - replace with API call later
const mockAccounts: Account[] = [
  {
    id: "1",
    institutionName: "HDFC Bank",
    balance: 50000,
    lastTransactionDate: "2024-01-15",
    nomineeStatus: "active",
    isDormant: false,
    type: "savings",
  },
  {
    id: "2",
    institutionName: "ICICI Bank",
    balance: 25000,
    lastTransactionDate: "2023-12-01",
    nomineeStatus: "missing",
    isDormant: true,
    type: "checking",
    hasPartialInfo: true,
  },
  {
    id: "3",
    institutionName: "SBI Mutual Fund",
    balance: 100000,
    lastTransactionDate: "2024-01-10",
    nomineeStatus: "active",
    isDormant: false,
    type: "investment",
    isTokenExpired: true,
  },
];

const Vault = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<AccountType | "all">("all");
  const [sortBy, setSortBy] = useState<"balance" | "name" | "date">("balance");
  const [showSearch, setShowSearch] = useState(false);

  const filteredAndSortedAccounts = mockAccounts
    .filter((account) => {
      const matchesSearch = account.institutionName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesType = filterType === "all" || account.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "balance":
          return b.balance - a.balance;
        case "name":
          return a.institutionName.localeCompare(b.institutionName);
        case "date":
          return new Date(b.lastTransactionDate).getTime() - new Date(a.lastTransactionDate).getTime();
        default:
          return 0;
      }
    });

  const handleAccountClick = (account: Account) => {
    navigate(`/account/${account.id}`);
  };

  const hasAlerts = mockAccounts.some(
    (account) => account.isDormant || account.nomineeStatus === "missing"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Financial Vault</h1>
          <div className="flex items-center gap-4">
            {hasAlerts && (
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full" />
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {showSearch ? (
            <Input
              placeholder="Search institutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
          ) : null}
          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Select value={filterType} onValueChange={(value: AccountType | "all") => setFilterType(value)}>
              <SelectTrigger className="w-10 p-0 border-none">
                <Filter className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="savings">Savings</SelectItem>
                <SelectItem value="checking">Checking</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
                <SelectItem value="credit">Credit</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(value: "balance" | "name" | "date") => setSortBy(value)}>
              <SelectTrigger className="w-10 p-0 border-none">
                <ArrowUpDown className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="balance">Balance</SelectItem>
                <SelectItem value="name">Institution Name</SelectItem>
                <SelectItem value="date">Last Transaction</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedAccounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onCardClick={handleAccountClick}
            />
          ))}
        </div>

        {filteredAndSortedAccounts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ninja-gray-600">No accounts found matching your criteria.</p>
          </div>
        )}

        {/* Floating Add Account Button */}
        <Button
          className="fixed bottom-6 right-6 rounded-full shadow-lg"
          size="lg"
          onClick={() => navigate("/add-account")}
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Account
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default Vault;
