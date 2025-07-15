// // src/pages/OpportunitiesPage.tsx

// import React, { useState } from 'react';
// import axios from 'axios';

// interface Product {
//   product_id: string;
//   product_name: string;
//   description: string;
// }

// interface TrendInsight {
//   trend_name: string;
//   trend_context: string;
//   recommended_products: Product[];
// }

// const OpportunitiesPage = () => {
//   const [results, setResults] = useState<TrendInsight[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchOpportunities = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post('http://127.0.0.1:8000/trends/opportunities', {
//         seller_products: [
//           {
//             product_id: "p-01",
//             product_name: "Royal Red & Gold Banarasi Silk Saree",
//             product_category: "Saree",
//             tags: ["ethnic", "banarasi", "wedding", "diwali"],
//             description: "Classic zari weave, perfect for weddings.",
//           },
//           {
//             product_id: "p-02",
//             product_name: "Pastel Lavender Organza Saree",
//             product_category: "Saree",
//             tags: ["lightweight", "pastel", "day", "functions"],
//             description: "Lightweight sheer organza in trendy pastel shade.",
//           },
//           {
//             product_id: "p-03",
//             product_name: "Mint Green Pastel Anarkali Suit",
//             product_category: "Suit",
//             tags: ["pastel", "day", "anarkali", "chikankari"],
//             description: "Floor-length suit, great for daytime functions.",
//           }
//         ]
//       });
//       setResults(res.data);
//     } catch (err) {
//       console.error("❌ Failed to fetch opportunities:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 24 }}>
//       <h2>🔍 AI Trend Opportunities</h2>
//       <button onClick={fetchOpportunities} disabled={loading} style={{ marginBottom: 12 }}>
//         {loading ? 'Loading...' : 'Fetch Opportunities'}
//       </button>

//       {results.map((trend, index) => (
//         <div key={index} style={{ marginBottom: 16, borderBottom: "1px solid #ccc", paddingBottom: 12 }}>
//           <h3>{trend.trend_name}</h3>
//           <p>{trend.trend_context}</p>
//           <ul>
//             {trend.recommended_products.map((p) => (
//               <li key={p.product_id}>
//                 <strong>{p.product_name}</strong>: {p.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OpportunitiesPage;

// import axios from 'axios';
// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";


// interface Product {
//   product_id: string;
//   product_name: string;
//   description: string;
// }

// interface TrendInsight {
//   trend_name: string;
//   trend_context: string;
//   recommended_products: Product[];
// }

// const OpportunitiesPage = () => {
//   const [results, setResults] = useState<TrendInsight[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchOpportunities = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post('http://127.0.0.1:8000/trends/opportunities', {
//         seller_products: [
//           {
//             product_id: "p-01",
//             product_name: "Royal Red & Gold Banarasi Silk Saree",
//             product_category: "Saree",
//             tags: ["ethnic", "banarasi", "wedding", "diwali"],
//             description: "Classic zari weave, perfect for weddings.",
//           },
//           {
//             product_id: "p-02",
//             product_name: "Pastel Lavender Organza Saree",
//             product_category: "Saree",
//             tags: ["lightweight", "pastel", "day", "functions"],
//             description: "Lightweight sheer organza in trendy pastel shade.",
//           },
//           {
//             product_id: "p-03",
//             product_name: "Mint Green Pastel Anarkali Suit",
//             product_category: "Suit",
//             tags: ["pastel", "day", "anarkali", "chikankari"],
//             description: "Floor-length suit, great for daytime functions.",
//           }
//         ]
//       });
//       setResults(res.data);
//     } catch (err) {
//       console.error("❌ Failed to fetch opportunities:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 24 }}>
//       <h2>🔍 AI Trend Opportunities</h2>
//       <button onClick={fetchOpportunities} disabled={loading} style={{ marginBottom: 12 }}>
//         {loading ? 'Loading...' : 'Fetch Opportunities'}
//       </button>

//       {results.map((trend, index) => (
//         <div key={index} style={{ marginBottom: 16, borderBottom: "1px solid #ccc", paddingBottom: 12 }}>
//           <h3>{trend.trend_name}</h3>
//           <p>{trend.trend_context}</p>
//           <ul>
//             {trend.recommended_products.map((p) => (
//               <li key={p.product_id}>
//                 <strong>{p.product_name}</strong>: {p.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OpportunitiesPage;

import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface Product {
  product_id: string;
  product_name: string;
  description: string;
}

interface TrendInsight {
  trend_name: string;
  trend_context: string;
  recommended_products: Product[];
}

const OpportunitiesPage = () => {
  const [results, setResults] = useState<TrendInsight[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOpportunities = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8000/trends/opportunities', {
        seller_products: [
          {
            product_id: "p-01",
            product_name: "Royal Red & Gold Banarasi Silk Saree",
            product_category: "Saree",
            tags: ["ethnic", "banarasi", "wedding", "diwali"],
            description: "Classic zari weave, perfect for weddings.",
          },
          {
            product_id: "p-02",
            product_name: "Pastel Lavender Organza Saree",
            product_category: "Saree",
            tags: ["lightweight", "pastel", "day", "functions"],
            description: "Lightweight sheer organza in trendy pastel shade.",
          },
          {
            product_id: "p-03",
            product_name: "Mint Green Pastel Anarkali Suit",
            product_category: "Suit",
            tags: ["pastel", "day", "anarkali", "chikankari"],
            description: "Floor-length suit, great for daytime functions.",
          }
        ]
      });
      setResults(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch opportunities:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-8 py-12 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Link to="/trends" className="text-sm text-pink-600 hover:underline flex items-center gap-1 mb-4">
        ← Back to Forecasts
      </Link>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="text-pink-500" /> AI Trend Opportunities
        </h1>
        <Button onClick={fetchOpportunities} disabled={loading} className="bg-pink-500 hover:bg-pink-600 text-white">
          {loading ? "Loading..." : "Fetch Opportunities"}
        </Button>
      </div>

      {results.length === 0 && (
        <p className="text-muted-foreground">Click above to fetch AI-driven fashion opportunities based on your catalog.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((trend, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold text-pink-600 mb-2">{trend.trend_name}</h2>
            <p className="text-muted-foreground mb-4">Trending during {trend.trend_context}</p>
            <ul className="list-disc list-inside space-y-1">
              {trend.recommended_products.map((p) => (
                <li key={p.product_id}>
                  <strong>{p.product_name}</strong> – {p.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
