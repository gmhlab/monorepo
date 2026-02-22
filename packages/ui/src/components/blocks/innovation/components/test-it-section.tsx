"use client";

import { Card } from "../../../ui";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import type { TestingData } from "../types";

const COLORS = ["#033C5A", "#AA9868", "#5A6C7D", "#D4C5A0"];

export function TestingSection({ headline, body, callout, barData, pieData1, pieData2 }: TestingData) {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl md:6xl font-serif text-white text-center mb-16">How have we tested it?</h2>

      <div>
        <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl border-white/20">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white mb-4">
                {headline}
              </h3>
              <p className="text-white/80 mb-6">
                {body}
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-white/90">
                  {callout}
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.2)"
                  />
                  <XAxis dataKey="name" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#AA9868",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="#AA9868" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-white mb-4 text-center">
                Test Results Distribution
              </h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData1}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData1.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {pieData1.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: COLORS[index] }}
                    ></div>
                    <span className="text-sm text-white">
                      {entry.name}: {entry.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Combination of testing data</h4>
              <div className="bg-white/5 rounded-lg p-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData2}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData2.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index + 2]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
