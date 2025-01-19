import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, User2 } from "lucide-react";
import { Account } from "@/types/account";
import { formatDistanceToNow } from "date-fns";

interface AccountCardProps {
  account: Account;
  onCardClick: (account: Account) => void;
}

export const AccountCard = ({ account, onCardClick }: AccountCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(account.lastTransactionDate), { addSuffix: true });

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onCardClick(account)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          {account.logoUrl ? (
            <img src={account.logoUrl} alt={account.institutionName} className="w-8 h-8 rounded" />
          ) : (
            <div className="w-8 h-8 bg-ninja-gray-200 rounded flex items-center justify-center">
              {account.institutionName[0]}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg">{account.institutionName}</h3>
            <p className="text-sm text-ninja-gray-600">{account.type}</p>
          </div>
        </div>
        {account.isTokenExpired && (
          <Button variant="outline" size="sm" className="text-destructive border-destructive">
            Re-Authorize
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-ninja-gray-600">Balance</span>
            <span className="font-semibold">
              {account.hasPartialInfo ? "Unavailable" : `₹${account.balance.toLocaleString()}`}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-ninja-gray-600">Last Transaction</span>
            <span>{account.hasPartialInfo ? "Unavailable" : formattedDate}</span>
          </div>
          <div className="flex gap-2 mt-3">
            {account.isDormant && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Dormant
              </Badge>
            )}
            {account.nomineeStatus === "missing" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <User2 className="w-3 h-3" />
                No Nominee
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};