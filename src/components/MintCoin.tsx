import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { toast } from "sonner";

const MintCoin = () => {
  const [formData, setFormData] = useState({
    coinId: "",
    to: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mint submitted!", {
      description: `${formData.amount} coins minted to ${formData.to.slice(0, 8)}...`,
    });
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TrendingUp className="w-6 h-6 text-primary" />
          Mint Coin
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Create new coins and add to circulation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mintCoinId" className="text-foreground font-medium">
              Coin ID
            </Label>
            <Input
              id="mintCoinId"
              type="number"
              placeholder="e.g., 1"
              value={formData.coinId}
              onChange={(e) => setFormData({ ...formData, coinId: e.target.value })}
              className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mintTo" className="text-foreground font-medium">
              Recipient Address
            </Label>
            <Input
              id="mintTo"
              placeholder="e.g., 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              className="bg-background/50 border-primary/20 focus:border-primary transition-colors font-mono text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mintAmount" className="text-foreground font-medium">
              Amount
            </Label>
            <Input
              id="mintAmount"
              type="number"
              step="0.01"
              placeholder="e.g., 1000"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-primary hover:opacity-90 glow-primary transition-all duration-300 h-12 text-base font-semibold"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Mint Coins
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MintCoin;
