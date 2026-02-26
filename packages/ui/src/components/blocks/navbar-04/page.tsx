import { ModeToggle } from "../../mode-toggle";
import { Button } from "../../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { Bell, Settings } from "lucide-react";

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
            <ModeToggle />
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