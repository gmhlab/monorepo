"use client"

import { useState } from "react";
import { Button } from "../../primitives/button";
import { Input } from "../../primitives/input";
import { Card, CardContent } from "../../primitives/card";
import { Badge } from "../../primitives/badge";
import { Container, LegacyGrid as Grid, Cluster, Center } from "../../layout";
import { Header } from "../../composites/Headers/Headers";
import { BrandTemplate } from "../../templates";
import {
  Globe,
  Lightbulb,
  FileText,
  ArrowRight,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
  Users,
  Quote,
} from "lucide-react";

// Brand colors matching GW
const brandColors = {
  navy: "#0a2240",
  navyLight: "#1a3a5c",
  gold: "#c9a227",
  goldLight: "#d4b84a",
  cream: "#f5f1e8",
  warmWhite: "#faf9f7",
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, background 0%, ${brandColors.navyLight} 100%)` }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <Container width="xl" section="xl" className="relative">
        <Grid columns="auto-fit" min="25rem" gap="2xl" className="items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase" style={{ backgroundColor: `${brandColors.gold}20`, color: brandColors.gold, border: `1px solid ${brandColors.gold}40` }}>
              The George Washington University
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-serif text-foreground leading-tight mb-6">
              Center for<br />
              <span style={{ color: brandColors.gold }}>Global Mental Health</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
              Partnering with communities worldwide to promote mental health,
              dismantle stigma, and develop sustainable strategies for lasting change.
            </p>
            <Cluster gap="md" justify="center" className="lg:justify-start">
              <Button size="lg" className="text-base font-semibold px-8" style={{ backgroundColor: brandColors.gold, color: brandColors.navy }}>
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 border-white/30 text-white hover:bg-white/10 hover:text-white">
                Our Projects
              </Button>
            </Cluster>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop"
                alt="Community mental health support"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColors.gold}20` }}>
                  <Heart className="w-6 h-6" style={{ color: brandColors.gold }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: brandColors.navy }}>50+</p>
                  <p className="text-sm text-gray-500">Global Partners</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}

// Who We Are Section
function WhoWeAreSection() {
  return (
    <section style={{ backgroundColor: brandColors.warmWhite }}>
      <Container width="xl" section="lg">
        <Grid columns="auto-fit" min="25rem" gap="2xl" className="items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5" style={{ backgroundColor: brandColors.gold }} />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: brandColors.gold }}>About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: brandColors.navy }}>
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Across the world, access to quality mental health care should be a human right.
                At the George Washington University Center for Global Mental Health, we
                partner with communities to promote their existing resources and develop
                sustainable strategies for their unique needs.
              </p>
              <p>
                By embracing the cultural richness of our partners, our research serves to better
                identify people in need, dismantle the fear and stigma that block access to care,
                and empower community members to be effective providers for each other.
              </p>
            </div>
            <Cluster gap="lg" className="mt-8">
              <Cluster gap="sm" align="center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColors.navy}10` }}>
                  <Users className="w-5 h-5" style={{ color: brandColors.navy }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: brandColors.navy }}>Community-Centered</p>
                  <p className="text-sm text-gray-500">Local partnerships</p>
                </div>
              </Cluster>
              <Cluster gap="sm" align="center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brandColors.gold}20` }}>
                  <Globe className="w-5 h-5" style={{ color: brandColors.gold }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: brandColors.navy }}>Global Reach</p>
                  <p className="text-sm text-gray-500">Worldwide impact</p>
                </div>
              </Cluster>
            </Cluster>
            <Button className="mt-8" style={{ backgroundColor: brandColors.navy }}>
              Learn More About Us
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Image Grid */}
          <Grid columns={2} gap="md">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
                alt="Research team"
                className="rounded-xl w-full h-48 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&h=400&fit=crop"
                alt="Community support"
                className="rounded-xl w-full h-56 object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop"
                alt="Global collaboration"
                className="rounded-xl w-full h-56 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
                alt="Mental health research"
                className="rounded-xl w-full h-48 object-cover shadow-lg"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

// What We Do Section
function WhatWeDoSection() {
  const services = [
    {
      icon: Globe,
      title: "Projects",
      description: "See the center's current projects across the globe and learn about collaboration opportunities.",
      color: brandColors.navy,
    },
    {
      icon: Lightbulb,
      title: "Innovations",
      description: "Find out about the center's latest technologies and innovations as well as how to implement them.",
      color: brandColors.gold,
    },
    {
      icon: FileText,
      title: "Publications",
      description: "Our latest work and publications in popular news media and most credible academic journals.",
      color: brandColors.navyLight,
    },
  ];

  return (
    <section className="bg-white">
      <Container width="xl" section="lg">
        {/* Header */}
        <Center max="2xl" text className="mb-16" gutter={false}>
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-12 h-0.5" style={{ backgroundColor: brandColors.gold }} />
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: brandColors.gold }}>Our Work</span>
            <div className="w-12 h-0.5" style={{ backgroundColor: brandColors.gold }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: brandColors.navy }}>
            What We Do
          </h2>
          <p className="text-gray-600">
            Driving change through research, innovation, and community partnerships
          </p>
        </Center>

        {/* Cards */}
        <Grid columns="auto-fit" min="20rem" gap="xl">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div
                  className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: brandColors.gold }}>
                  {service.title}
                </h3>
                <p className="text-muted-foregroyb mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" className="group/btn" style={{ borderColor: service.color, color: service.color }}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ backgroundColor: service.color }} />
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

// Latest News Section
function LatestNewsSection() {
  const news = [
    {
      tag: "Visitor Posts",
      tagColor: brandColors.gold,
      title: "From Community to Global Mental Health: Experience of a Visiting Research Associate",
      author: "Dr. Sudhamsu Gautam",
      date: "Aug 4, 2025",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    },
    {
      tag: "Staff Posts",
      tagColor: brandColors.navyLight,
      title: "A Heartfelt Thank You from the Nepal Mental Health Research Network Webinar Series",
      author: "Ritika Singh, MSc",
      date: "Jul 9, 2025",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    },
    {
      tag: "Spotlight",
      tagColor: brandColors.navy,
      title: "Healing After Disaster: Dr. Jun Shigemura on Stigma in Mental Health",
      author: "Staff Writer",
      date: "Jul 3, 2025",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section style={{ backgroundColor: brandColors.cream }}>
      <Container width="xl" section="lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5" style={{ backgroundColor: brandColors.gold }} />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: brandColors.gold }}>Stay Informed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: brandColors.navy }}>
              Latest News
            </h2>
          </div>
          <Button variant="outline" style={{ borderColor: brandColors.navy, color: brandColors.navy }}>
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* News Cards */}
        <Grid columns="auto-fit" min="20rem" gap="xl">
          {news.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className="text-xs font-semibold"
                    style={{ backgroundColor: item.tagColor, color: "white" }}
                  >
                    {item.tag}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[#c9a227] transition-colors" style={{ color: brandColors.navy }}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.author}</span>
                  <span>{item.readTime}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${brandColors.navy} 0%, ${brandColors.navyLight} 100%)` }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: brandColors.gold }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: brandColors.gold }} />

      <Container width="md" section="lg" className="relative">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8" style={{ backgroundColor: `${brandColors.gold}20` }}>
            <Quote className="w-8 h-8" style={{ color: brandColors.gold }} />
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 italic">
            "Partnering with the Center for Mental Health has been invaluable. Their dedication
            to addressing mental health disparities and creating inclusive solutions has helped us
            reach underserved communities and implement impactful programs. They are a crucial
            ally in promoting global mental health."
          </blockquote>
          <Cluster gap="md" align="center" justify="center">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div className="text-left">
              <p className="font-semibold text-white">Claudia Sartor</p>
              <p className="text-sm" style={{ color: brandColors.gold }}>Global Mental Health Peer Network</p>
            </div>
          </Cluster>
        </div>
      </Container>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white">
      <Container width="lg" section="md">
        <Center max="3xl" gutter={false}>
        <Card className="border-0 bg-secondary shadow-xl overflow-hidden">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{ backgroundColor: `${brandColors.gold}20` }}>
                <Mail className="w-7 h-7" style={{ color: brandColors.gold }} />
              </div>
              <h3 className="text-2xl text-secondary-foreground sm:text-3xl font-bold mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-8">
                Stay updated with our latest research, events, and global initiatives
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12"
                />
                <Button type="submit" size="lg" className="h-12 px-8" style={{ backgroundColor: brandColors.navy }}>
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to receive our newsletter and updates
              </p>
            </div>
          </CardContent>
        </Card>
        </Center>
      </Container>
    </section>
  );
}

// Map Section
function MapSection() {
  return (
    <section style={{ background: `linear-gradient(180deg, ${brandColors.navy} 0%, ${brandColors.navyLight} 100%)` }}>
      <Container width="xl" section="lg">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-12 h-0.5" style={{ backgroundColor: brandColors.gold }} />
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: brandColors.gold }}>Global Impact</span>
            <div className="w-12 h-0.5" style={{ backgroundColor: brandColors.gold }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Where We Work
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our partnerships span across continents, bringing mental health to communities worldwide
          </p>
        </div>

        {/* World Map Placeholder */}
        <div className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <div className="aspect-[2/1] flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-60">
              {/* Simplified world map outline */}
              <path
                d="M150,200 Q200,150 250,180 T350,160 Q400,140 450,170 T550,150 Q600,130 650,160 T750,140 Q800,120 850,150"
                fill="none"
                stroke={brandColors.gold}
                strokeWidth="2"
                opacity="0.5"
              />
              {/* Location dots */}
              {[
                { x: 200, y: 180, label: "Americas" },
                { x: 450, y: 160, label: "Europe" },
                { x: 550, y: 200, label: "Africa" },
                { x: 700, y: 170, label: "Asia" },
                { x: 800, y: 280, label: "Oceania" },
              ].map((loc, i) => (
                <g key={i}>
                  <circle cx={loc.x} cy={loc.y} r="8" fill={brandColors.gold} className="animate-pulse" />
                  <circle cx={loc.x} cy={loc.y} r="16" fill={brandColors.gold} opacity="0.3" />
                </g>
              ))}
            </svg>
          </div>
          <Cluster gap="xl" justify="center" className="mt-8">
            {["Americas", "Europe", "Africa", "Asia", "Oceania"].map((region) => (
              <Cluster key={region} gap="sm" align="center">
                <MapPin className="w-4 h-4" style={{ color: brandColors.gold }} />
                <span className="text-white text-sm">{region}</span>
              </Cluster>
            ))}
          </Cluster>
        </div>
      </Container>
    </section>
  );
}

// Main Page Component
export type HomePageProps = {
  logoSrc?: string;
};

export function HomePage({ logoSrc }: HomePageProps = {}) {
  return (
    <BrandTemplate header={<Header currentPath="/" logoSrc={logoSrc} />}>
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <LatestNewsSection />
      <TestimonialSection />
      <NewsletterSection />
      <MapSection />
    </BrandTemplate>
  );
}
