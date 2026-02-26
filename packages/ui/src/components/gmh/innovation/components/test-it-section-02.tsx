"use client";

import { motion } from 'motion/react';
import { Card } from '../../../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

const performanceData = [
  { name: 'Week 1', value: 45 },
  { name: 'Week 2', value: 62 },
  { name: 'Week 3', value: 58 },
  { name: 'Week 4', value: 75 },
  { name: 'Week 5', value: 88 },
  { name: 'Week 6', value: 92 }
];

const testingData1 = [
  { name: 'Passed', value: 75 },
  { name: 'Failed', value: 25 }
];

const testingData2 = [
  { name: 'Successful', value: 82 },
  { name: 'Issues', value: 18 }
];

const reliabilityData = [
  { name: 'Sprint 1', uptime: 94, errors: 12 },
  { name: 'Sprint 2', uptime: 96, errors: 8 },
  { name: 'Sprint 3', uptime: 97, errors: 5 },
  { name: 'Sprint 4', uptime: 99, errors: 3 },
  { name: 'Sprint 5', uptime: 99.5, errors: 1 },
];

const coverageData = [
  { name: 'Unit', value: 45 },
  { name: 'Integration', value: 30 },
  { name: 'E2E', value: 25 },
];

const COLORS = ['#033C5A', '#AA9868', '#5A8BA6', '#D4C5A0'];

export function TestingSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:6xl font-serif text-white text-center mb-16"
      >
        How have we tested it?
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl border-white/20">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-white mb-4">How did we score on test performance?</h3>
              <p className="text-white/80 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our comprehensive testing revealed 
                strong performance across all metrics with consistent improvement over the testing period.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-white/90">We did so and so well with testing because of these key factors and improvements.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 rounded-lg p-6"
            >
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="name" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#AA9868', color: 'white', border: 'none', borderRadius: '8px' }}
                  />
                  <Bar dataKey="value" fill="#AA9868" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white mb-4">System Reliability Over Time</h3>
              <p className="text-white/80 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reliability metrics showed steady 
                improvement as iterative testing cycles addressed core stability concerns.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-white/90">Uptime reached 99.5% by Sprint 5 with error rates dropping to near zero.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-lg p-6"
            >
              <h4 className="text-white mb-4 text-center">Test Results Distribution</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={testingData1}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {testingData1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {testingData1.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-sm text-white">{entry.name}: {entry.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white mb-4">Combination of testing data</h4>
              <p className="text-white/80 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Multiple testing methodologies were employed 
                to ensure comprehensive validation and verification of all system components.
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={testingData2}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {testingData2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index + 2]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 rounded-lg p-6"
            >
              <h4 className="text-white mb-4 text-center">Reliability Trend</h4>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={reliabilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="name" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#033C5A', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="uptime" stroke="#AA9868" fill="#AA9868" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#AA9868' }}></div>
                  <span className="text-sm text-white">Uptime %</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}