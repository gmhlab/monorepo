"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import {
  AlertCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AudioLinesIcon,
  BathIcon,
  BedIcon,
  BoldIcon,
  BookmarkIcon,
  CalendarIcon,
  Calculator,
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronsUpDown,
  CircleCheckIcon,
  CircleDashed,
  CreditCard,
  FlipHorizontalIcon,
  FlipVerticalIcon,
  GiftIcon,
  HeartIcon,
  InfoIcon,
  ItalicIcon,
  LandPlotIcon,
  Loader2Icon,
  LogOut,
  Mail,
  MessageSquare,
  Minus,
  MoreHorizontalIcon,
  PlusIcon,
  RotateCwIcon,
  SearchIcon,
  SendIcon,
  Settings,
  Smile,
  StarIcon,
  Terminal,
  TrashIcon,
  UnderlineIcon,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { type DateRange } from "react-day-picker"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { toast } from "sonner"

import { cn } from "../../../utils/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../primitives/accordion"
import { Alert, AlertDescription, AlertTitle } from "../../../primitives/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../primitives/alert-dialog"
import { AspectRatio } from "../../../primitives/aspect-ratio"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../../primitives/avatar"
import { Badge } from "../../../primitives/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../primitives/breadcrumb"
import { Button } from "../../../primitives/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "../../../primitives/button-group"
import { Calendar } from "../../../primitives/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../primitives/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../primitives/carousel"
import { Checkbox } from "../../../primitives/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../primitives/collapsible"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "../../../primitives/combobox"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../../primitives/command"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../../primitives/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../primitives/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../primitives/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../primitives/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../../primitives/empty"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../../../primitives/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../../primitives/hover-card"
import { Input } from "../../../primitives/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../../../primitives/input-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../../../primitives/input-otp"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "../../../primitives/item"
import { Kbd, KbdGroup } from "../../../primitives/kbd"
import { Label } from "../../../primitives/label"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../../../primitives/menubar"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "../../../primitives/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../../primitives/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../primitives/pagination"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../../../primitives/popover"
import { Progress } from "../../../primitives/progress"
import { RadioGroup, RadioGroupItem } from "../../../primitives/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../../../primitives/resizable"
import { ScrollArea, ScrollBar } from "../../../primitives/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../primitives/select"
import { Separator } from "../../../primitives/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../primitives/sheet"
import { Skeleton } from "../../../primitives/skeleton"
import { Slider } from "../../../primitives/slider"
import { Toaster } from "../../../primitives/sonner"
import { Spinner } from "../../../primitives/spinner"
import { Switch } from "../../../primitives/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../primitives/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../primitives/tabs"
import { Textarea } from "../../../primitives/textarea"
import { Toggle } from "../../../primitives/toggle"
import { ToggleGroup, ToggleGroupItem } from "../../../primitives/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../primitives/tooltip"

// ---------------------------------------------------------------------------
// ComponentWrapper
// ---------------------------------------------------------------------------

function getComponentName(name: string) {
  return name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

function ComponentWrapper({
  name,
  className,
  children,
}: {
  name: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      id={name}
      data-name={name.toLowerCase()}
      className={cn("flex w-full scroll-mt-16 flex-col rounded-lg border", className)}
    >
      <div className="border-b px-4 py-3">
        <div className="text-sm font-medium">{getComponentName(name)}</div>
      </div>
      <div className="flex flex-1 flex-wrap items-start gap-2 p-4">{children}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Accordion Demo
// ---------------------------------------------------------------------------

function AccordionDemo() {
  return (
    <div className="grid w-full max-w-xl gap-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Alert Demo
// ---------------------------------------------------------------------------

function AlertDemo() {
  return (
    <div className="grid max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>
      <Alert>
        <AlertDescription>This one has a description only. No title. No icon.</AlertDescription>
      </Alert>
      <Alert>
        <GiftIcon />
        <AlertTitle>Let&apos;s try one with icon and title.</AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle className="max-w-[calc(100%-4rem)] overflow-ellipsis">
          The selected emails have been marked as spam.
        </AlertTitle>
        <Button size="sm" variant="outline" className="absolute top-2.5 right-3 h-6 shadow-none">
          Undo
        </Button>
      </Alert>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Alert Dialog Demo
// ---------------------------------------------------------------------------

function AlertDialogDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Default</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">With Media</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <TrashIcon className="size-8" />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete this item?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the item from your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Aspect Ratio Demo
// ---------------------------------------------------------------------------

function AspectRatioDemo() {
  return (
    <div className="grid w-full max-w-sm items-start gap-4">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Avatar Demo
// ---------------------------------------------------------------------------

function AvatarDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row flex-wrap items-center gap-4">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge>
            <PlusIcon />
          </AvatarBadge>
        </Avatar>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4">
        <AvatarGroup>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Badge Demo
// ---------------------------------------------------------------------------

function BadgeDemo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">
          <CheckCircle2Icon />
          Badge
        </Badge>
        <Badge variant="destructive">
          <AlertCircleIcon />
          Alert
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Breadcrumb Demo
// ---------------------------------------------------------------------------

function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// ---------------------------------------------------------------------------
// Button Demo
// ---------------------------------------------------------------------------

function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button variant="outline" size="sm">Outline</Button>
        <Button variant="ghost" size="sm">Ghost</Button>
        <Button variant="destructive" size="sm">Destructive</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="link" size="sm">Link</Button>
        <Button variant="outline" size="sm"><SendIcon /> Send</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button>Button</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline"><SendIcon /> Send</Button>
        <Button variant="outline">Learn More <ArrowRightIcon /></Button>
        <Button disabled variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="lg">Large</Button>
        <Button variant="outline" size="lg">Outline</Button>
        <Button variant="ghost" size="lg">Ghost</Button>
        <Button variant="destructive" size="lg">Destructive</Button>
        <Button variant="secondary" size="lg">Secondary</Button>
        <Button variant="link" size="lg">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon-sm" variant="outline"><PlusIcon /></Button>
        <Button size="icon" variant="outline"><PlusIcon /></Button>
        <Button size="icon-lg" variant="outline"><PlusIcon /></Button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Button Group Demo
// ---------------------------------------------------------------------------

function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Get Started <ArrowRightIcon /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Another Button</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>Prefix</ButtonGroupText>
        <Input placeholder="Type something here..." />
        <ButtonGroupText>Suffix</ButtonGroupText>
      </ButtonGroup>
      <div className="flex gap-4">
        <ButtonGroup>
          <Button variant="outline">Update</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><ChevronDownIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Disable</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Uninstall</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
        <ButtonGroup className="[--radius:9999px]">
          <Button variant="outline">Follow</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="!pl-2"><ChevronDownIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mute</DropdownMenuItem>
              <DropdownMenuItem>Block</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
      <ButtonGroup orientation="vertical" className="h-fit w-fit">
        <Button variant="outline" size="icon"><PlusIcon /></Button>
        <Button variant="outline" size="icon"><Minus /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm"><ArrowLeftIcon />Previous</Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Next<ArrowRightIcon /></Button>
      </ButtonGroup>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Calendar Demo
// ---------------------------------------------------------------------------

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground px-2 text-center text-sm">Single Selection</div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border shadow-sm"
          captionLayout="dropdown"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground px-2 text-center text-sm">Range Selection</div>
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          className="rounded-lg border shadow-sm"
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Card Demo
// ---------------------------------------------------------------------------

function CardDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Meeting Notes</CardTitle>
          <CardDescription>
            Transcript from the meeting with the client.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            Client requested dashboard redesign with focus on mobile
            responsiveness.
          </p>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </CardContent>
        <CardFooter>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Is this an image?</CardTitle>
          <CardDescription>This is a card with an image.</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="aspect-video object-cover"
            width={500}
            height={500}
          />
        </CardContent>
        <CardFooter className="flex items-center gap-2">
          <Badge variant="outline">
            <BedIcon /> 4
          </Badge>
          <Badge variant="outline">
            <BathIcon /> 2
          </Badge>
          <Badge variant="outline">
            <LandPlotIcon /> 350m²
          </Badge>
          <div className="ml-auto font-medium tabular-nums">$135,000</div>
        </CardFooter>
      </Card>
      <div className="flex w-full flex-wrap items-start gap-8 sm:*:data-[slot=card]:basis-1/4">
        <Card>
          <CardContent className="text-sm">Content Only</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Header Only</CardTitle>
            <CardDescription>
              This is a card with a header and a description.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Header and Content</CardTitle>
            <CardDescription>
              This is a card with a header and a content.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">Content</CardContent>
        </Card>
        <Card>
          <CardFooter className="text-sm">Footer Only</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Header + Footer</CardTitle>
            <CardDescription>
              This is a card with a header and a footer.
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm">Footer</CardFooter>
        </Card>
        <Card>
          <CardContent className="text-sm">Content</CardContent>
          <CardFooter className="text-sm">Footer</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Header + Footer</CardTitle>
            <CardDescription>
              This is a card with a header and a footer.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">Content</CardContent>
          <CardFooter className="text-sm">Footer</CardFooter>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Header with Border</CardTitle>
            <CardDescription>
              This is a card with a header that has a bottom border.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">Content</CardContent>
        </Card>
        <Card>
          <CardContent className="text-sm">Content</CardContent>
          <CardFooter className="border-t text-sm">
            Footer with Border
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Carousel Demo
// ---------------------------------------------------------------------------

function CarouselDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Carousel className="max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="max-w-sm" opts={{ align: "start" }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Checkbox Demo
// ---------------------------------------------------------------------------

function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-terms" />
        <Label htmlFor="checkbox-terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="checkbox-terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="checkbox-terms-2">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="checkbox-disabled" disabled />
        <Label htmlFor="checkbox-disabled">Enable notifications</Label>
      </div>
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id="checkbox-styled"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">Enable notifications</p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Collapsible Demo
// ---------------------------------------------------------------------------

function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full flex-col gap-2 md:w-[350px]"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="line-clamp-1 text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

// ---------------------------------------------------------------------------
// Combobox Demo
// ---------------------------------------------------------------------------

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

function ComboboxDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-wrap items-start gap-4">
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Combobox items={frameworks} defaultValue={frameworks[0]}>
          <ComboboxInput placeholder="Select a framework" showClear />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <ComboboxMultipleDemo />
    </div>
  )
}

function ComboboxMultipleDemo() {
  const anchor = useComboboxAnchor()
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Combobox multiple autoHighlight items={frameworks} defaultValue={[frameworks[0]]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((value) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add framework..." />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Command Demo
// ---------------------------------------------------------------------------

function CommandDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

// ---------------------------------------------------------------------------
// Context Menu Demo
// ---------------------------------------------------------------------------

function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem inset>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <PlusIcon />
              Create Shortcut...
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

// ---------------------------------------------------------------------------
// Date Picker Demo
// ---------------------------------------------------------------------------

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  })

  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("min-w-[200px] justify-start px-2 font-normal", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="text-muted-foreground" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("w-fit justify-start px-2 font-normal", !dateRange && "text-muted-foreground")}
          >
            <CalendarIcon className="text-muted-foreground" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} – {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Dialog Demo
// ---------------------------------------------------------------------------

function DialogDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="dialog-name">Name</Label>
              <Input id="dialog-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="dialog-username">Username</Label>
              <Input id="dialog-username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Scrollable Content</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>This is a dialog with scrollable content.</DialogDescription>
          </DialogHeader>
          <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
            <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Drawer Demo
// ---------------------------------------------------------------------------

const drawerData = [
  { goal: 400 }, { goal: 300 }, { goal: 200 }, { goal: 300 },
  { goal: 200 }, { goal: 278 }, { goal: 189 }, { goal: 239 },
  { goal: 300 }, { goal: 200 }, { goal: 278 }, { goal: 189 }, { goal: 349 },
]

function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)
  const onClick = React.useCallback((adjustment: number) => {
    setGoal((prev) => Math.max(200, Math.min(400, prev + adjustment)))
  }, [])

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">{goal}</div>
                <div className="text-muted-foreground text-[0.70rem] uppercase">Calories/day</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <PlusIcon />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={drawerData}>
                  <Bar
                    dataKey="goal"
                    style={{ fill: "var(--primary)", opacity: 0.9 } as React.CSSProperties}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// ---------------------------------------------------------------------------
// Dropdown Menu Demo
// ---------------------------------------------------------------------------

function DropdownMenuDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare />
                    <span>Message</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOut />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Empty Demo
// ---------------------------------------------------------------------------

function EmptyDemo() {
  return (
    <div className="grid w-full gap-4">
      <Empty className="min-h-48 border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Terminal className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects yet. Get started by creating your first project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button>Create project</Button>
            <Button variant="outline">Import project</Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Field Demo
// ---------------------------------------------------------------------------

function FieldDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Field>
        <FieldLabel htmlFor="field-name">Name</FieldLabel>
        <Input id="field-name" placeholder="Enter your name" />
        <FieldDescription>This is your public display name.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="m@example.com" />
      </Field>
      <FieldSet>
        <FieldLegend>Notifications</FieldLegend>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="field-switch-email">Email notifications</FieldLabel>
            <Switch id="field-switch-email" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="field-switch-sms">SMS notifications</FieldLabel>
            <Switch id="field-switch-sms" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Hover Card Demo
// ---------------------------------------------------------------------------

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" side="right">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="mt-1 flex items-center gap-2">
              <CalendarIcon className="text-muted-foreground size-4" />
              <span className="text-muted-foreground text-xs">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

// ---------------------------------------------------------------------------
// Input Demo
// ---------------------------------------------------------------------------

function InputDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Error" aria-invalid="true" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="file" placeholder="File" />
      <Input type="tel" placeholder="Tel" />
      <Input type="text" placeholder="Text" />
      <Input type="url" placeholder="URL" />
      <Input type="search" placeholder="Search" />
      <Input type="date" placeholder="Date" />
      <Input disabled placeholder="Disabled" />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Input Group Demo
// ---------------------------------------------------------------------------

function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Username" />
        <InputGroupAddon align="inline-end">
          <span className="text-muted-foreground text-sm">@example.com</span>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <InputGroupInput placeholder="0.00" />
        <InputGroupText>USD</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Loading..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Input OTP Demo
// ---------------------------------------------------------------------------

function InputOTPDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-6 md:flex-row">
      <div className="grid gap-2">
        <Label>Simple</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="grid gap-2">
        <Label>Digits only</Label>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Item Demo
// ---------------------------------------------------------------------------

function ItemDemo() {
  const people = [
    { name: "Alice Johnson", role: "Designer", avatar: "AJ" },
    { name: "Bob Smith", role: "Engineer", avatar: "BS" },
    { name: "Carol White", role: "PM", avatar: "CW" },
  ]

  return (
    <div className="w-full max-w-sm">
      <ItemGroup>
        {people.map((person, i) => (
          <React.Fragment key={person.name}>
            <Item>
              <Avatar size="sm">
                <AvatarFallback>{person.avatar}</AvatarFallback>
              </Avatar>
              <ItemContent>
                <ItemTitle>{person.name}</ItemTitle>
                <ItemDescription>{person.role}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="outline">Follow</Button>
              </ItemActions>
            </Item>
            {i < people.length - 1 && <ItemSeparator />}
          </React.Fragment>
        ))}
      </ItemGroup>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Kbd Demo
// ---------------------------------------------------------------------------

function KbdDemo() {
  return (
    <div className="flex max-w-xs flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <Kbd>⌘K</Kbd>
        <Kbd>Ctrl + B</Kbd>
      </div>
      <div className="flex items-center gap-2">
        <Kbd>⌘</Kbd>
        <Kbd>C</Kbd>
      </div>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <div className="flex items-center gap-2">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Label Demo
// ---------------------------------------------------------------------------

function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="label-demo-terms" />
        <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="label-demo-username">Username</Label>
        <Input id="label-demo-username" placeholder="Username" />
      </div>
      <div className="group grid gap-3" data-disabled={true}>
        <Label htmlFor="label-demo-disabled">Disabled</Label>
        <Input id="label-demo-disabled" placeholder="Disabled" disabled />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="label-demo-message">Message</Label>
        <Textarea id="label-demo-message" placeholder="Message" />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Menubar Demo
// ---------------------------------------------------------------------------

function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>Reload <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
          <MenubarItem inset disabled>Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

// ---------------------------------------------------------------------------
// Native Select Demo
// ---------------------------------------------------------------------------

function NativeSelectDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground text-sm font-medium">Basic Select</div>
        <div className="flex flex-col gap-4">
          <NativeSelect>
            <NativeSelectOption value="">Select a fruit</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
            <NativeSelectOption value="grapes" disabled>Grapes</NativeSelectOption>
            <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground text-sm font-medium">With Groups</div>
        <NativeSelect>
          <NativeSelectOption value="">Select a food</NativeSelectOption>
          <NativeSelectOptGroup label="Fruits">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="Vegetables">
            <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
            <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground text-sm font-medium">Disabled & Error</div>
        <div className="flex gap-4">
          <NativeSelect disabled>
            <NativeSelectOption value="">Disabled</NativeSelectOption>
          </NativeSelect>
          <NativeSelect aria-invalid="true">
            <NativeSelectOption value="">Error state</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Navigation Menu Demo
// ---------------------------------------------------------------------------

const navComponents = [
  { title: "Alert Dialog", href: "#", description: "A modal dialog that interrupts the user." },
  { title: "Hover Card", href: "#", description: "For sighted users to preview content." },
  { title: "Progress", href: "#", description: "Displays an indicator showing completion." },
  { title: "Scroll-area", href: "#", description: "Augments native scroll functionality." },
  { title: "Tabs", href: "#", description: "A set of layered sections of content." },
  { title: "Tooltip", href: "#", description: "A popup that displays on hover." },
]

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md select-none"
                    href="#"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="hover:bg-accent block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors" href="#">
                    <div className="text-sm font-medium leading-none">Introduction</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="hover:bg-accent block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors" href="#">
                    <div className="text-sm font-medium leading-none">Installation</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      How to install dependencies and structure your app.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navComponents.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <a className="hover:bg-accent block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors" href={component.href}>
                      <div className="text-sm font-medium leading-none">{component.title}</div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {component.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// ---------------------------------------------------------------------------
// Pagination Demo
// ---------------------------------------------------------------------------

function PaginationDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Popover Demo
// ---------------------------------------------------------------------------

function PopoverDemo() {
  return (
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="start">
          <div className="grid gap-4">
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="pop-width">Width</Label>
                <Input id="pop-width" defaultValue="100%" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="pop-max-width">Max. width</Label>
                <Input id="pop-max-width" defaultValue="300px" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="pop-height">Height</Label>
                <Input id="pop-height" defaultValue="25px" className="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Progress Demo
// ---------------------------------------------------------------------------

function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return <Progress value={progress} className="w-[60%]" />
}

// ---------------------------------------------------------------------------
// Radio Group Demo
// ---------------------------------------------------------------------------

const plans = [
  { id: "starter", name: "Starter Plan", description: "Perfect for small businesses", price: "$10" },
  { id: "pro", name: "Pro Plan", description: "Advanced features for growing businesses", price: "$20" },
] as const

function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="rg-1" />
          <Label htmlFor="rg-1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="rg-2" />
          <Label htmlFor="rg-2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="rg-3" />
          <Label htmlFor="rg-3">Compact</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="starter" className="max-w-sm">
        {plans.map((plan) => (
          <Label
            key={plan.id}
            className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-4 has-[[data-state=checked]]:border-green-600 has-[[data-state=checked]]:bg-green-50 dark:has-[[data-state=checked]]:border-green-900 dark:has-[[data-state=checked]]:bg-green-950"
          >
            <RadioGroupItem
              value={plan.id}
              id={plan.name}
              className="shadow-none data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
            />
            <div className="grid gap-1 font-normal">
              <div className="font-medium">{plan.name}</div>
              <div className="text-muted-foreground leading-snug">{plan.description}</div>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Resizable Demo
// ---------------------------------------------------------------------------

function ResizableDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ResizablePanelGroup
        orientation="horizontal"
        className="max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Scroll Area Demo
// ---------------------------------------------------------------------------

const scrollTags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

const artworks = [
  { artist: "Ornella Binni", art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80" },
  { artist: "Tom Byrom", art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80" },
  { artist: "Vladimir Malyav", art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80" },
]

function ScrollAreaDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
          {scrollTags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className="w-full max-w-96 rounded-md border p-4">
        <div className="flex gap-4">
          {artworks.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="text-muted-foreground pt-2 text-xs">
                Photo by{" "}
                <span className="text-foreground font-semibold">{artwork.artist}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Select Demo
// ---------------------------------------------------------------------------

function SelectDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes" disabled>Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={
              <>
                <CircleDashed className="text-muted-foreground" />
                With Icon
              </>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="line">Line</SelectItem>
          <SelectItem value="bar">Bar</SelectItem>
          <SelectItem value="pie">Pie</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Separator Demo
// ---------------------------------------------------------------------------

function SeparatorDemo() {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="text-sm leading-none font-medium">Tailwind CSS</div>
        <div className="text-muted-foreground text-sm">A utility-first CSS framework.</div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sheet Demo
// ---------------------------------------------------------------------------

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

function SheetDemo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-name">Name</Label>
              <Input id="sheet-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-username">Username</Label>
              <Input id="sheet-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="flex gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline" className="capitalize">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>Make changes to your profile here.</SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Skeleton Demo
// ---------------------------------------------------------------------------

function SkeletonDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <div className="flex items-center gap-4">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="flex w-full flex-wrap items-start gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="w-full sm:w-auto sm:min-w-[200px]">
            <CardHeader>
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="aspect-square w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Slider Demo
// ---------------------------------------------------------------------------

function SliderDemo() {
  const [value, setValue] = React.useState([0.3, 0.7])
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 50]} max={100} step={1} />
      <div className="flex w-full items-center gap-6">
        <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
        <Slider defaultValue={[25]} max={100} step={1} orientation="vertical" />
      </div>
      <div className="grid w-full gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label>Temperature</Label>
          <span className="text-muted-foreground text-sm">{value.join(", ")}</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={0} max={1} step={0.1} />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sonner Demo
// ---------------------------------------------------------------------------

function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: { label: "Undo", onClick: () => console.log("Undo") },
          })
        }
      >
        Show Toast
      </Button>
      <Button variant="outline" onClick={() => toast.success("Event has been created")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Event has not been created")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.info("Be at the area 10 minutes early")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Event start time cannot be earlier than 8am")}>
        Warning
      </Button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Spinner Demo
// ---------------------------------------------------------------------------

function SpinnerDemo() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center gap-6">
        <Spinner />
        <Spinner className="size-8" />
      </div>
      <div className="flex items-center gap-6">
        <Button><Spinner /> Submit</Button>
        <Button disabled><Spinner /> Disabled</Button>
        <Button size="sm"><Spinner /> Small</Button>
        <Button variant="outline" disabled><Spinner /> Outline</Button>
        <Button variant="destructive" disabled><Spinner /> Remove</Button>
      </div>
      <div className="flex items-center gap-6">
        <Badge><Spinner />Badge</Badge>
        <Badge variant="secondary"><Spinner />Badge</Badge>
        <Badge variant="destructive"><Spinner />Badge</Badge>
        <Badge variant="outline"><Spinner />Badge</Badge>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Switch Demo
// ---------------------------------------------------------------------------

function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch id="switch-sm" size="sm" />
          <Label htmlFor="switch-sm">Small</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="switch-default" />
          <Label htmlFor="switch-default">Default</Label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-airplane" />
        <Label htmlFor="switch-airplane">Airplane Mode</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-bluetooth"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
          defaultChecked
        />
        <Label htmlFor="switch-bluetooth">Bluetooth</Label>
      </div>
      <Label className="flex items-center gap-6 rounded-lg border p-4 has-[[data-state=checked]]:border-blue-600">
        <div className="flex flex-col gap-1">
          <div className="font-medium">Share across devices</div>
          <div className="text-muted-foreground text-sm font-normal">
            Focus is shared across devices.
          </div>
        </div>
        <Switch
          id="switch-focus"
          className="data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600"
        />
      </Label>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Table Demo
// ---------------------------------------------------------------------------

const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

// ---------------------------------------------------------------------------
// Tabs Demo
// ---------------------------------------------------------------------------

function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-name">Name</Label>
                <Input id="tabs-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-username">Username</Label>
                <Input id="tabs-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-current">Current password</Label>
                <Input id="tabs-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-new">New password</Label>
                <Input id="tabs-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings" disabled>Disabled</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="preview">
        <TabsList variant="line">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="preview" orientation="vertical">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Textarea Demo
// ---------------------------------------------------------------------------

function TextareaDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Textarea placeholder="Type your message here." />
      <Textarea placeholder="Error state" aria-invalid="true" />
      <div className="grid gap-3">
        <Label htmlFor="textarea-label">With Label</Label>
        <Textarea id="textarea-label" placeholder="Type your message here." rows={4} />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="textarea-desc">With description</Label>
        <Textarea id="textarea-desc" placeholder="Type your message here." rows={4} />
        <div className="text-muted-foreground text-sm">
          Your message will be copied to the support team.
        </div>
      </div>
      <Textarea disabled placeholder="Disabled" />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Toggle Demo
// ---------------------------------------------------------------------------

function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon /> Italic
      </Toggle>
      <Toggle aria-label="Toggle underline" disabled>
        Disabled
      </Toggle>
      <Toggle
        aria-label="Toggle bookmark"
        className="data-[state=on]:[&_svg]:fill-accent-foreground"
      >
        <BookmarkIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle" size="sm">Small</Toggle>
      <Toggle variant="outline" aria-label="Toggle" size="lg">Large</Toggle>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Toggle Group Demo
// ---------------------------------------------------------------------------

function ToggleGroupDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup type="multiple" spacing={2}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold"><BoldIcon /></ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic"><ItalicIcon /></ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline"><UnderlineIcon /></ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" type="single" defaultValue="all" className="*:data-[slot=toggle-group-item]:w-20">
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="missed">Missed</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
        <ToggleGroupItem
          value="star"
          aria-label="Toggle star"
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
        >
          <StarIcon /> Star
        </ToggleGroupItem>
        <ToggleGroupItem
          value="heart"
          aria-label="Toggle heart"
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
        >
          <HeartIcon /> Heart
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bookmark"
          aria-label="Toggle bookmark"
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
        >
          <BookmarkIcon /> Bookmark
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Tooltip Demo
// ---------------------------------------------------------------------------

function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
      <div className="flex gap-2">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="capitalize">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <InfoIcon />
            <span className="sr-only">Info</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          To learn more about how this works, check out the docs.
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SinkPage() {
  return (
    <TooltipProvider>
    <div className="@container grid flex-1 gap-4 p-4">
      <ComponentWrapper name="accordion"><AccordionDemo /></ComponentWrapper>
      <ComponentWrapper name="alert"><AlertDemo /></ComponentWrapper>
      <ComponentWrapper name="alert-dialog"><AlertDialogDemo /></ComponentWrapper>
      <ComponentWrapper name="aspect-ratio"><AspectRatioDemo /></ComponentWrapper>
      <ComponentWrapper name="avatar"><AvatarDemo /></ComponentWrapper>
      <ComponentWrapper name="badge"><BadgeDemo /></ComponentWrapper>
      <ComponentWrapper name="breadcrumb"><BreadcrumbDemo /></ComponentWrapper>
      <ComponentWrapper name="button"><ButtonDemo /></ComponentWrapper>
      <ComponentWrapper name="button-group"><ButtonGroupDemo /></ComponentWrapper>
      <ComponentWrapper name="calendar"><CalendarDemo /></ComponentWrapper>
      <ComponentWrapper name="card"><CardDemo /></ComponentWrapper>
      <ComponentWrapper name="carousel"><CarouselDemo /></ComponentWrapper>
      <ComponentWrapper name="checkbox"><CheckboxDemo /></ComponentWrapper>
      <ComponentWrapper name="collapsible"><CollapsibleDemo /></ComponentWrapper>
      <ComponentWrapper name="combobox"><ComboboxDemo /></ComponentWrapper>
      <ComponentWrapper name="command"><CommandDemo /></ComponentWrapper>
      <ComponentWrapper name="context-menu"><ContextMenuDemo /></ComponentWrapper>
      <ComponentWrapper name="date-picker"><DatePickerDemo /></ComponentWrapper>
      <ComponentWrapper name="dialog"><DialogDemo /></ComponentWrapper>
      <ComponentWrapper name="drawer"><DrawerDemo /></ComponentWrapper>
      <ComponentWrapper name="dropdown-menu"><DropdownMenuDemo /></ComponentWrapper>
      <ComponentWrapper name="empty"><EmptyDemo /></ComponentWrapper>
      <ComponentWrapper name="field"><FieldDemo /></ComponentWrapper>
      <ComponentWrapper name="hover-card"><HoverCardDemo /></ComponentWrapper>
      <ComponentWrapper name="input"><InputDemo /></ComponentWrapper>
      <ComponentWrapper name="input-group"><InputGroupDemo /></ComponentWrapper>
      <ComponentWrapper name="input-otp"><InputOTPDemo /></ComponentWrapper>
      <ComponentWrapper name="item"><ItemDemo /></ComponentWrapper>
      <ComponentWrapper name="kbd"><KbdDemo /></ComponentWrapper>
      <ComponentWrapper name="label"><LabelDemo /></ComponentWrapper>
      <ComponentWrapper name="menubar"><MenubarDemo /></ComponentWrapper>
      <ComponentWrapper name="native-select"><NativeSelectDemo /></ComponentWrapper>
      <ComponentWrapper name="navigation-menu"><NavigationMenuDemo /></ComponentWrapper>
      <ComponentWrapper name="pagination"><PaginationDemo /></ComponentWrapper>
      <ComponentWrapper name="popover"><PopoverDemo /></ComponentWrapper>
      <ComponentWrapper name="progress"><ProgressDemo /></ComponentWrapper>
      <ComponentWrapper name="radio-group"><RadioGroupDemo /></ComponentWrapper>
      <ComponentWrapper name="resizable"><ResizableDemo /></ComponentWrapper>
      <ComponentWrapper name="scroll-area"><ScrollAreaDemo /></ComponentWrapper>
      <ComponentWrapper name="select"><SelectDemo /></ComponentWrapper>
      <ComponentWrapper name="separator"><SeparatorDemo /></ComponentWrapper>
      <ComponentWrapper name="sheet"><SheetDemo /></ComponentWrapper>
      <ComponentWrapper name="skeleton"><SkeletonDemo /></ComponentWrapper>
      <ComponentWrapper name="slider"><SliderDemo /></ComponentWrapper>
      <ComponentWrapper name="sonner"><SonnerDemo /></ComponentWrapper>
      <ComponentWrapper name="spinner"><SpinnerDemo /></ComponentWrapper>
      <ComponentWrapper name="switch"><SwitchDemo /></ComponentWrapper>
      <ComponentWrapper name="table"><TableDemo /></ComponentWrapper>
      <ComponentWrapper name="tabs"><TabsDemo /></ComponentWrapper>
      <ComponentWrapper name="textarea"><TextareaDemo /></ComponentWrapper>
      <ComponentWrapper name="toggle"><ToggleDemo /></ComponentWrapper>
      <ComponentWrapper name="toggle-group"><ToggleGroupDemo /></ComponentWrapper>
      <ComponentWrapper name="tooltip"><TooltipDemo /></ComponentWrapper>
      <Toaster />
    </div>
    </TooltipProvider>
  )
}
