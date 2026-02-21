"use client";

import { useState } from "react";
import { Button } from "@repo/ui";
import { Input } from "@repo/ui";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@repo/ui";
import { Badge } from "@repo/ui";
import { Switch } from "@repo/ui";
import { Checkbox } from "@repo/ui";
import { Label } from "@repo/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";
import { Progress } from "@repo/ui";
import { Slider } from "@repo/ui";
import { Textarea } from "@repo/ui";
import { Separator } from "@repo/ui";
import { Skeleton } from "@repo/ui";
import { RadioGroup, RadioGroupItem } from "@repo/ui";
import { 
  Bell, 
  Search, 
  Plus, 
  Trash2, 
  Edit, 
  Settings, 
  User, 
  Download,
  ChevronRight,
  Star,
  Heart,
  Share2,
  MoreVertical
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@repo/ui";
import { DesignTokens } from "./components/DesignTokens";
import { TailwindColorPalettes } from "./components/TailwindColorPalettes";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [progress, setProgress] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">UI Primitives</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#tokens" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Design Tokens
              </a>
              <a href="#components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Components
              </a>
              <a href="#forms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Forms
              </a>
              <a href="#feedback" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Feedback
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="size-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="size-4" />
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="space-y-4">
            <Badge variant="secondary">Updated Components</Badge>
            <h2 className="text-4xl tracking-tight">Modern UI Primitives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive collection of accessible, customizable, and production-ready React components built with Radix UI and Tailwind CSS.
            </p>
          </div>

          <Separator />

          {/* Design Tokens Section */}
          <DesignTokens />

          <Separator />

          {/* Tailwind Color Palettes Section */}
          <TailwindColorPalettes />

          <Separator />

          {/* Buttons Section */}
          <section id="components" className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2">Buttons</h3>
              <p className="text-muted-foreground">Multiple variants and sizes for every use case</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles for different contexts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Button Sizes</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Plus className="size-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-3">With Icons</p>
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <Download />
                      Download
                    </Button>
                    <Button variant="secondary">
                      <Search />
                      Search
                    </Button>
                    <Button variant="outline">
                      <Share2 />
                      Share
                    </Button>
                    <Button variant="destructive">
                      <Trash2 />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Forms Section */}
          <section id="forms" className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2">Form Elements</h3>
              <p className="text-muted-foreground">Input fields, selects, and other form controls</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Text Inputs</CardTitle>
                  <CardDescription>Standard input fields with validation states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="search">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input id="search" placeholder="Search..." className="pl-9" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here..." rows={3} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Controls</CardTitle>
                  <CardDescription>Dropdowns, checkboxes, and radio buttons</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Preferences</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={checkboxChecked}
                        onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                        Accept terms and conditions
                      </Label>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications" className="text-sm font-normal">
                        Enable notifications
                      </Label>
                      <Switch 
                        id="notifications"
                        checked={switchChecked}
                        onCheckedChange={setSwitchChecked}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Account Type</Label>
                    <RadioGroup defaultValue="personal">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="personal" id="personal" />
                        <Label htmlFor="personal" className="text-sm font-normal cursor-pointer">
                          Personal
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="text-sm font-normal cursor-pointer">
                          Business
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Feedback Section */}
          <section id="feedback" className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2">Feedback & Status</h3>
              <p className="text-muted-foreground">Badges, progress bars, and notifications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status indicators and labels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge>
                      <Star className="size-3" />
                      Featured
                    </Badge>
                    <Badge variant="secondary">
                      <Heart className="size-3 fill-current" />
                      Liked
                    </Badge>
                    <Badge variant="outline">
                      New
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress Indicators</CardTitle>
                  <CardDescription>Show task completion and loading states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm">Upload Progress</Label>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                        Increase
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                        Decrease
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="text-sm">Volume: {sliderValue[0]}%</Label>
                    <Slider 
                      value={sliderValue} 
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                    />
                  </div>

                  <Separator />

                  <div>
                    <Button 
                      onClick={() => toast.success("Component updated successfully!")}
                      variant="outline"
                      className="w-full"
                    >
                      Show Toast Notification
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tabs & Accordion */}
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2">Content Organization</h3>
              <p className="text-muted-foreground">Tabs and accordions for structured content</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>Get a quick summary of your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Total Users</p>
                        <p className="text-2xl">1,234</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Active Now</p>
                        <p className="text-2xl">89</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="text-2xl">$45.2k</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Detailed metrics and insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Analytics content would go here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Settings content would go here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>Collapsible content sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What are UI primitives?</AccordionTrigger>
                    <AccordionContent>
                      UI primitives are the fundamental building blocks of a user interface. They are low-level, reusable components like buttons, inputs, and cards that can be combined to create more complex interfaces.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Why use component libraries?</AccordionTrigger>
                    <AccordionContent>
                      Component libraries provide consistent, accessible, and well-tested UI components that speed up development and ensure a cohesive user experience across your application.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are these components accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes! These components are built on Radix UI primitives, which follow WAI-ARIA standards and provide excellent keyboard navigation and screen reader support out of the box.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Loading States */}
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2">Loading States</h3>
              <p className="text-muted-foreground">Skeleton loaders for better perceived performance</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton Components</CardTitle>
                <CardDescription>Placeholder content while data loads</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="size-12 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Complex Example */}
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2">Complete Example</h3>
              <p className="text-muted-foreground">A real-world card using multiple components</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Avatar className="size-10">
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="size-4" />
                    </Button>
                  </div>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>Last updated 2 hours ago</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A modern web application built with the latest technologies. Features include real-time updates, responsive design, and comprehensive testing.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">
                    <Edit />
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 />
                    Share
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                  <CardAction>
                    <Button variant="ghost" size="sm">
                      View All
                      <ChevronRight />
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <User />
                    Manage Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings />
                    Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download />
                    Export Data
                  </Button>
                  <Separator />
                  <Button variant="destructive" className="w-full justify-start">
                    <Trash2 />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container px-8 text-center text-sm text-muted-foreground">
          Built with React, Radix UI, and Tailwind CSS
        </div>
      </footer>
    </div>
  );
}