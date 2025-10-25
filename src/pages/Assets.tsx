import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Coins, TrendingUp, Wallet, Info } from "lucide-react";

const Assets = () => {
  const [coinId, setCoinId] = useState("");
  const [address, setAddress] = useState("");

  // Mock data - replace with actual blockchain data
  const mockAssetData = {
    symbol: "TKN",
    name: "Test Token",
    decimals: 18,
    totalSupply: 1000000,
    userBalance: 500,
  };

  const handleViewAsset = () => {
    // This will be connected to blockchain later
    console.log("Viewing asset:", { coinId, address });
  };

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
            View balances, supply, and metadata
          </p>
        </header>

        {/* Query Form */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Query Asset Information
            </CardTitle>
            <CardDescription>
              Enter coin ID and optionally an address to view details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="coinId">Coin ID</Label>
                <Input
                  id="coinId"
                  type="number"
                  placeholder="Enter coin ID"
                  value={coinId}
                  onChange={(e) => setCoinId(e.target.value)}
                  className="glass-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  placeholder="Enter address to check balance"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="glass-input"
                />
              </div>
            </div>
            <Button 
              onClick={handleViewAsset}
              className="w-full mt-6 gradient-primary glow-primary hover:opacity-90 transition-opacity"
            >
              View Asset
            </Button>
          </CardContent>
        </Card>

        {/* Asset Information Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Coins className="w-4 h-4" />
                Symbol
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">{mockAssetData.symbol}</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Info className="w-4 h-4" />
                Name
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">{mockAssetData.name}</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Total Supply
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">
                {mockAssetData.totalSupply.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Your Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">
                {mockAssetData.userBalance.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metadata Table */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Coin Metadata</CardTitle>
            <CardDescription>Detailed information about the asset</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Symbol</TableCell>
                  <TableCell>{mockAssetData.symbol}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Name</TableCell>
                  <TableCell>{mockAssetData.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Decimals</TableCell>
                  <TableCell>{mockAssetData.decimals}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Total Supply</TableCell>
                  <TableCell>{mockAssetData.totalSupply.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Your Balance</TableCell>
                  <TableCell>{mockAssetData.userBalance.toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assets;
