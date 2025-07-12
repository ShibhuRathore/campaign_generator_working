import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, Sparkles, Calendar, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">GullyKart Vision</h1>
              <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">Beta</span>
            </div>
            <p className="text-white/80">AI-powered hyperlocal fashion analytics</p>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            <Download size={16} className="mr-2" />
            Download Report
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Summary Card */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Top Performing Products</span>
                <span className="font-bold text-foreground">Anokhi</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Flyers Shared</span>
                <span className="font-bold text-foreground">4,502</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Clicks</span>
                <span className="font-bold text-foreground">811</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Conversions</span>
                <span className="font-bold text-foreground">249</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Engagement Rate</span>
                <span className="font-bold text-foreground">18%</span>
              </div>
            </div>
          </Card>

          {/* Flyer Engagement Pie Chart */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm text-white">
            <h2 className="text-2xl font-bold mb-6">Flyer Engagement</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                {/* Pie chart representation using gradients */}
                <div className="w-full h-full rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 61%, 50% 50%)'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400" style={{clipPath: 'polygon(50% 50%, 100% 61%, 100% 89%, 50% 50%)'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400" style={{clipPath: 'polygon(50% 50%, 100% 89%, 50% 100%, 50% 50%)'}}></div>
                  <div className="absolute inset-4 bg-purple-700 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">61%</div>
                      <div className="text-sm opacity-80">Primary</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-green-400">● Click-Through Rate</span>
            </div>
          </Card>

          {/* Daily Conversions Chart */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm text-white">
            <h2 className="text-2xl font-bold mb-6">Daily Conversions</h2>
            <div className="h-40 relative">
              {/* Line chart representation */}
              <svg className="w-full h-full" viewBox="0 0 300 120">
                <polyline 
                  points="20,100 80,85 140,70 200,60 260,45" 
                  fill="none" 
                  stroke="url(#gradient1)" 
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between text-sm mt-2 opacity-80">
                <span>Jul 1</span>
                <span>Jul 2</span>
                <span>Jul 3</span>
                <span>Jul 4</span>
                <span>Jul 7</span>
              </div>
            </div>
          </Card>

          {/* Product Engagement Bar Chart */}
          <Card className="p-6 bg-white/10 backdrop-blur-sm text-white">
            <h2 className="text-2xl font-bold mb-6">Product Engagement</h2>
            <div className="flex items-end gap-4 h-40">
              {[60, 75, 85, 90, 95].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-orange-400 to-yellow-400 rounded-t-lg" style={{height: `${height}%`}}></div>
                  <div className="w-full bg-gradient-to-t from-teal-400 to-cyan-400 rounded-b-lg" style={{height: `${100-height}%`}}></div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Navigation Back */}
        <div className="mt-8">
          <Link to="/">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;