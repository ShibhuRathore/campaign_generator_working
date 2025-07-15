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
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Product {
  product_id: string;
  product_name: string;
  product_category?: string;
  tags?: string[];
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

  const location = useLocation() as { state?: { seller_products?: Product[] } };
  const sellerCatalogue: Product[] = location.state?.seller_products || [
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
  ];

  useEffect(() => {
    const fetchOpportunities = async () => {
      setLoading(true);
      try {
        const res = await axios.post("http://127.0.0.1:8000/trends/opportunities", {
          seller_products: sellerCatalogue,
        });
        setResults(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch opportunities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6 py-10">
      {/* Back link */}
      <div className="mb-4">
        <Link to="/trends" className="text-sm text-pink-600 hover:underline flex items-center gap-1">
          ← Back to Forecasts
        </Link>
      </div>

      {/* Header & CTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="text-pink-500" />
          AI-Powered Trend Opportunities
        </h1>
        <Button
          onClick={() => {}}
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 text-white transition duration-200"
        >
          {loading ? "Loading..." : "Auto-Fetched"}
        </Button>
      </div>

      {/* Info */}
      {results.length === 0 && !loading && (
        <p className="text-muted-foreground mb-6">
          No opportunities available for your current catalogue.
        </p>
      )}

      {/* Trend Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((trend, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-200">
            <h2 className="text-xl font-bold text-pink-600 mb-2">{trend.trend_name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{trend.trend_context}</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {trend.recommended_products.map((p) => (
                <li key={p.product_id}>
                  <span className="font-semibold">{p.product_name}</span> — {p.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Empty fallback (optional) */}
      {results.length === 0 && !loading && (
        <div className="mt-10 text-center text-muted-foreground text-sm">
          No opportunities to display yet.
        </div>
      )}
    </div>
  );
};

export default OpportunitiesPage;
