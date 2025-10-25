import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import { toast } from "sonner";

const TransferCoin = () => {
  const [formData, setFormData] = useState({
    coinId: "",
    to: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Transfer submitted!", {
      description: `${formData.amount} coins transferred to ${formData.to.slice(0, 8)}...`,
    });
  };

  return (
    <Card className="glass-card border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <ArrowRightLeft className="w-6 h-6 text-accent" />
          Transfer Coin
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Send coins to another address
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="coinId" className="text-foreground font-medium">
              Coin ID
            </Label>
            <Input
              id="coinId"
              type="number"
              placeholder="e.g., 1"
              value={formData.coinId}
              onChange={(e) => setFormData({ ...formData, coinId: e.target.value })}
              className="bg-background/50 border-accent/20 focus:border-accent transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="to" className="text-foreground font-medium">
              Recipient Address
            </Label>
            <Input
              id="to"
              placeholder="e.g., 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              className="bg-background/50 border-accent/20 focus:border-accent transition-colors font-mono text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount" className="text-foreground font-medium">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder="e.g., 100.50"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="bg-background/50 border-accent/20 focus:border-accent transition-colors"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-accent hover:opacity-90 transition-all duration-300 h-12 text-base font-semibold"
          >
            <ArrowRightLeft className="w-5 h-5 mr-2" />
            Transfer Coins
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TransferCoin;
