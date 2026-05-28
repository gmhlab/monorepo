"use client";

import { motion } from 'motion/react';
import { TextTitlePage } from '../../../primitives/Text/Text';
import { Card } from '../../../primitives/card';
import { Flex, Section } from '../../../layout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const improvementData = [
  { month: 'Month 1', improvement: 12 },
  { month: 'Month 2', improvement: 24 },
  { month: 'Month 3', improvement: 38 },
  { month: 'Month 4', improvement: 52 },
  { month: 'Month 5', improvement: 67 },
  { month: 'Month 6', improvement: 78 },
];

const assessmentsData = [
  { period: 'Q1', assessments: 1250 },
  { period: 'Q2', assessments: 2840 },
  { period: 'Q3', assessments: 4520 },
  { period: 'Q4', assessments: 6890 },
];

export function TestingSection() {
  return (
    <Section >
      <Flex direction="column" alignSecondary="center" gap="1600" container >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <TextTitlePage className="text-center">How have we tested it?</TextTitlePage>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl border-white/20">
          {/* Hero Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#AA9868] text-lg uppercase tracking-wider mb-2">The Global Challenge</p>
            <h3 className="text-white text-5xl md:text-7xl font-bold mb-4">1 Billion</h3>
            <p className="text-white/80 text-xl md:text-2xl">people lack access to effective mental healthcare</p>
            <p className="text-white/60 mt-4 text-lg">That's <span className="text-[#AA9868] font-semibold">1 in 7</span> people worldwide</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Improvement Rate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 rounded-lg p-6"
            >
              <h4 className="text-white mb-2 text-center">% Increase in Improvement</h4>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-[#AA9868]">78%</span>
                <p className="text-white/60 text-sm mt-1">over 6 months of testing</p>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={improvementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#ffffff80" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#ffffff80" tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#033C5A', color: 'white', border: 'none', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="improvement" stroke="#AA9868" fill="#AA9868" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Number of Trainees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-lg p-6 flex flex-col justify-center items-center"
            >
              <h4 className="text-white mb-4 text-center">Number of Trainees Assessed</h4>
              <span className="text-6xl md:text-7xl font-bold text-[#AA9868]">2,450</span>
              <p className="text-white/60 text-sm mt-2">mental health professionals trained</p>
              <Flex gap="600" className="mt-8 flex gap-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">12</span>
                  <p className="text-white/60 text-lg">Countries</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">45</span>
                  <p className="text-white/60 text-lg">Institutions</p>
                </div>
              </Flex>
            </motion.div>

            {/* Cumulative Assessments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 rounded-lg p-6"
            >
              <h4 className="text-white mb-2 text-center">Cumulative Number of Assessments</h4>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-[#AA9868]">15,500+</span>
                <p className="text-white/60 text-sm mt-1">total assessments completed</p>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={assessmentsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="period" stroke="#ffffff80" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#ffffff80" tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#033C5A', color: 'white', border: 'none', borderRadius: '8px' }}
                  />
                  <Bar dataKey="assessments" fill="#AA9868" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-lg p-6 text-center"
          >
            <p className="text-white/80 text-lg">
              Our rigorous testing across multiple regions and institutions demonstrates consistent improvement
              in trainee competency, with measurable impact on mental healthcare delivery quality.
            </p>
          </motion.div>
        </Card>
      </motion.div>
      </Flex>
    </Section>
  );
}
