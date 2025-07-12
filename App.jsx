
import React from "react";
import { Home, Wallet, Wifi, PhoneCall, CreditCard, Store } from "lucide-react";

export default function App() {
  const services = [
    { name: "Buy Data", icon: <Wifi className="w-6 h-6" /> },
    { name: "Buy Airtime", icon: <PhoneCall className="w-6 h-6" /> },
    { name: "Pay Bills", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Virtual Cards", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Marketplace", icon: <Store className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Welcome Back</h1>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 border rounded flex flex-col items-center justify-center">
              {service.icon}
              <span className="mt-2">{service.name}</span>
            </div>
          ))}
        </div>
        <div className="p-4 flex flex-col items-center justify-center mt-6 border rounded">
          <h2 className="text-xl font-bold">Wallet Balance</h2>
          <p className="text-2xl">₦0.00</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Top Up</button>
        </div>
      </div>
    </div>
  );
}
