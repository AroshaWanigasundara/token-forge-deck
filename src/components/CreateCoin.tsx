import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const CreateCoin = () => {
  const [formData, setFormData] = useState({
    symbol: "",
    name: "",
    decimals: "",
    initialSupply: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Coin creation submitted!", {
      description: `${formData.name} (${formData.symbol}) with ${formData.initialSupply} initial supply`,
    });
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Plus className="w-6 h-6 text-primary" />
          Create New Coin
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Deploy a new coin on the Substrate network
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="symbol" className="text-foreground font-medium">
                Symbol
              </Label>
              <Input
                id="symbol"
                placeholder="e.g., BTC"
                value={formData.symbol}
                onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="e.g., Bitcoin"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="decimals" className="text-foreground font-medium">
                Decimals
              </Label>
              <Input
                id="decimals"
                type="number"
                placeholder="e.g., 8"
                value={formData.decimals}
                onChange={(e) => setFormData({ ...formData, decimals: e.target.value })}
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="initialSupply" className="text-foreground font-medium">
                Initial Supply
              </Label>
              <Input
                id="initialSupply"
                type="number"
                step="0.01"
                placeholder="e.g., 1000000"
                value={formData.initialSupply}
                onChange={(e) => setFormData({ ...formData, initialSupply: e.target.value })}
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-primary hover:opacity-90 glow-primary transition-all duration-300 h-12 text-base font-semibold"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Coin
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateCoin;
