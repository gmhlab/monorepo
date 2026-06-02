"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Settings, LayoutGrid, Users, DollarSign, Zap, FileText } from 'lucide-react';
import { Flex, Grid } from "../../layout" 

const data = [
  { name: 'MON', views: 4000, subs: 240 },
  { name: 'TUE', views: 3000, subs: 139 },
  { name: 'WED', views: 2000, subs: 980 },
  { name: 'THU', views: 2780, subs: 390 },
  { name: 'FRI', views: 1890, subs: 480 },
  { name: 'SAT', views: 2390, subs: 380 },
  { name: 'SUN', views: 3490, subs: 430 },
];

const navItems = [
  { icon: LayoutGrid, label: 'DASHBOARD', active: true },
  { icon: FileText, label: 'CONTENT' },
  { icon: Users, label: 'AUDIENCE' },
  { icon: DollarSign, label: 'REVENUE' },
  { icon: Zap, label: 'AUTOMATION' },
  { icon: Settings, label: 'SETTINGS' },
];

/** Brutalist "SYSTEM.OS" brand mark for the sidebar header slot. */
export function WhiteboardSidebarHeader() {
  return <h2 className="font-['Bebas_Neue'] text-3xl">SYSTEM.OS</h2>;
}

/** Brutalist nav buttons for the sidebar content slot. */
export function WhiteboardNav() {
  return (
    <nav className="flex flex-col gap-3 p-4 font-bold text-lg">
      {navItems.map((item, i) => (
        <button
          key={i}
          className={`flex items-center gap-3 p-3 border-4 border-black transition-all ${item.active ? 'bg-black text-white translate-x-2 shadow-[4px_4px_0px_0px_#fff,8px_8px_0px_0px_#000]' : 'bg-white hover:bg-gray-100 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#000]'}`}
        >
          <item.icon className="w-6 h-6" strokeWidth={3} />
          <span className="font-['Bebas_Neue'] text-xl tracking-wide mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

/** "Pro tip" card for the sidebar footer slot. */
export function WhiteboardProTip() {
  return (
    <div className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transform -rotate-2 hover:rotate-0 transition-transform">
      <p className="font-['Bebas_Neue'] text-2xl">PRO TIP!</p>
      <p className="text-sm mt-2 leading-tight">Keep grinding. The algorithm favors the bold and the brutal.</p>
    </div>
  );
}

/** Main dashboard content — header banner, stats grid, and performance chart. */
export function WhiteboardContent() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      {/* Header Banner */}
      <div className="relative bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_#000] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '12px 12px' }}></div>
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-tight leading-none uppercase">Creator OS</h1>
            <p className="font-bold text-xl md:text-2xl mt-2 bg-black text-white inline-block px-3 py-1 -rotate-1">DESIGN SYSTEM OVERRIDE ACTIVE</p>
          </div>
          <div className="hidden md:block w-32 h-32 border-4 border-black rounded-full bg-white flex items-center justify-center font-['Bebas_Neue'] text-4xl shadow-[8px_8px_0px_0px_#000] animate-[spin_10s_linear_infinite]">
            <div className="text-center leading-none">ALL<br/>SYSTEMS<br/>GO</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <Grid columns="(3 1fr)" gap="600">
        {[
          { label: 'TOTAL VIEWS', value: '1.2M', trend: '+14%', up: true },
          { label: 'NEW SUBS', value: '8,432', trend: '+5%', up: true },
          { label: 'REVENUE', value: '$12.4K', trend: '-2%', up: false },
        ].map((stat, i) => (
          <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all relative">
            <h3 className="font-['Bebas_Neue'] text-2xl text-gray-500">{stat.label}</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="font-['Bebas_Neue'] text-6xl leading-none">{stat.value}</span>
              <span className={`font-bold text-lg px-2 py-1 border-2 border-black ${stat.up ? 'bg-black text-white' : 'bg-white text-black line-through decoration-2'}`}>
                {stat.trend}
              </span>
            </div>
            {/* Comic action lines */}
            <div className="absolute top-2 right-2 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
               <svg viewBox="0 0 100 100" className="w-full h-full stroke-black stroke-[4] fill-none">
                  <path d="M50,10 L50,30 M90,50 L70,50 M50,90 L50,70 M10,50 L30,50 M20,20 L35,35 M80,20 L65,35 M80,80 L65,65 M20,80 L35,65" />
               </svg>
            </div>
          </div>
        ))}
      </Grid>

      {/* Chart Area */}
      <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] flex-1 min-h-[400px]">
        <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
          <h2 className="font-['Bebas_Neue'] text-4xl">PERFORMANCE MATRIX</h2>
          <button className="border-4 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">EXPORT_DATA</button>
        </div>
        <div className="h-[300px] w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={300}>
            <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#000" vertical={false} />
              <XAxis dataKey="name" stroke="#000" style={{ fontFamily: 'Space Mono', fontWeight: 'bold' }} />
              <YAxis stroke="#000" style={{ fontFamily: 'Space Mono', fontWeight: 'bold' }} />
              <Tooltip
                cursor={{ fill: 'rgba(0,0,0,0.1)' }}
                contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '0', boxShadow: '4px 4px 0px 0px #000', fontFamily: 'Space Mono', fontWeight: 'bold' }}
              />
              <Bar dataKey="views" fill="#000" stroke="#000" strokeWidth={4} isAnimationActive={false} />
              <Bar dataKey="subs" fill="#fff" stroke="#000" strokeWidth={4} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

/** Standalone brutalist dashboard — self-contained sidebar + content shell. */
export function TwoSidedDash() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-6rem)] w-full max-w-[1600px] mx-auto p-4 gap-8">
      {/* Sidebar */}
      <Flex direction="column" gap="400" >
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
          <div className="mb-6 border-b-4 border-black pb-2">
            <WhiteboardSidebarHeader />
          </div>
          <WhiteboardNav />
        </div>
        <div className="mt-auto">
          <WhiteboardProTip />
        </div>
      </Flex>

      {/* Main Content */}
      <WhiteboardContent />
    </div>
  );
}
