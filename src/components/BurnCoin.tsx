import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { toast } from "sonner";

const BurnCoin = () => {
  const [formData, setFormData] = useState({
    coinId: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Burn submitted!", {
      description: `${formData.amount} coins burned from circulation`,
    });
  };

  return (
    <Card className="glass-card border-destructive/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Flame className="w-6 h-6 text-destructive" />
          Burn Coin
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Remove coins from circulation permanently
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="burnCoinId" className="text-foreground font-medium">
              Coin ID
            </Label>
            <Input
              id="burnCoinId"
              type="number"
              placeholder="e.g., 1"
              value={formData.coinId}
              onChange={(e) => setFormData({ ...formData, coinId: e.target.value })}
              className="bg-background/50 border-destructive/20 focus:border-destructive transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="burnAmount" className="text-foreground font-medium">
              Amount
            </Label>
            <Input
              id="burnAmount"
              type="number"
              step="0.01"
              placeholder="e.g., 500"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="bg-background/50 border-destructive/20 focus:border-destructive transition-colors"
              required
            />
          </div>

          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-sm text-destructive/90 font-medium">
              ⚠️ Warning: This action is irreversible. Burned coins cannot be recovered.
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground transition-all duration-300 h-12 text-base font-semibold"
          >
            <Flame className="w-5 h-5 mr-2" />
            Burn Coins
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BurnCoin;
