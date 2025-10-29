import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, Wallet } from "lucide-react";

interface CoinMetadata {
  id: number;
  symbol: string;
  name: string;
  balance: number;
  decimals: number;
  totalSupply: number;
  transferFee: string;
  minimumBalance: number;
  feePaymentEligible: boolean;
}

const Assets = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<CoinMetadata | null>(null);

  // Mock data - replace with actual blockchain data
  const mockCoins: CoinMetadata[] = [
    {
      id: 1,
      symbol: "TKN",
      name: "Test Token",
      balance: 500,
      decimals: 18,
      totalSupply: 1000000,
      transferFee: "0.1%",
      minimumBalance: 1,
      feePaymentEligible: true,
    },
    {
      id: 2,
      symbol: "DEX",
      name: "DEX Coin",
      balance: 1250,
      decimals: 18,
      totalSupply: 5000000,
      transferFee: "0.05%",
      minimumBalance: 10,
      feePaymentEligible: true,
    },
    {
      id: 3,
      symbol: "STK",
      name: "Stake Token",
      balance: 800,
      decimals: 12,
      totalSupply: 2500000,
      transferFee: "0.2%",
      minimumBalance: 5,
      feePaymentEligible: false,
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl gradient-primary glow-primary">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Asset Overview
          </h1>
          <p className="text-muted-foreground text-lg">
            View your coin holdings and metadata
          </p>
        </header>

        {/* Wallet Address Input */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Connected Wallet
            </CardTitle>
            <CardDescription>
              Your wallet address to view coin balances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="wallet">Wallet Address</Label>
              <Input
                id="wallet"
                placeholder="Enter your wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="glass-input"
              />
            </div>
          </CardContent>
        </Card>

        {/* Coins List */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Your Assets</CardTitle>
            <CardDescription>Click on a coin name to view detailed metadata</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCoins.map((coin) => (
                  <TableRow key={coin.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
                    <TableCell className="font-bold gradient-text">
                      <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4" />
                        {coin.symbol}
                      </div>
                    </TableCell>
                    <TableCell 
                      className="font-medium text-primary hover:underline cursor-pointer"
                      onClick={() => setSelectedCoin(coin)}
                    >
                      {coin.name}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {coin.balance.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Coin Details Dialog */}
        <Dialog open={selectedCoin !== null} onOpenChange={(open) => !open && setSelectedCoin(null)}>
          <DialogContent className="glass-card border-primary/20">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-2xl gradient-text">
                <Coins className="w-6 h-6" />
                {selectedCoin?.name} ({selectedCoin?.symbol})
              </DialogTitle>
              <DialogDescription>
                Detailed metadata for this coin
              </DialogDescription>
            </DialogHeader>
            
            {selectedCoin && (
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Coin ID</p>
                    <p className="text-lg font-semibold">{selectedCoin.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Decimals</p>
                    <p className="text-lg font-semibold">{selectedCoin.decimals}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Your Balance</p>
                    <p className="text-lg font-semibold gradient-text">{selectedCoin.balance.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Supply</p>
                    <p className="text-lg font-semibold">{selectedCoin.totalSupply.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Transfer Fee</p>
                    <p className="text-lg font-semibold">{selectedCoin.transferFee}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Minimum Balance</p>
                    <p className="text-lg font-semibold">{selectedCoin.minimumBalance}</p>
                  </div>
                </div>
                
                <div className="space-y-1 pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">Fee Payment Eligible</p>
                  <Badge variant={selectedCoin.feePaymentEligible ? "default" : "secondary"}>
                    {selectedCoin.feePaymentEligible ? "Eligible" : "Not Eligible"}
                  </Badge>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Assets;
