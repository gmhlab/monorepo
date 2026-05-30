import { AppTemplate } from "@repo/ui";
import { Flex } from "@repo/ui";
import { mount } from "../bootstrap";


mount(<AppTemplate 
        sidebarHeader={<Flex alignPrimary="stretch" className="font-semibold">sidebarHeader</Flex>}
        nav={
          <Flex direction="column" alignPrimary="stretch" gap="100" className="bg-purple-600p-2 text-sm">
            <div className="text-white rounded-md bg-muted/50 px-3 py-2">nav · item one</div>
            <div className="text-white rounded-md px-3 py-2 hover:bg-muted/50">nav · item two</div>
            <div className="text-white rounded-md px-3 py-2 hover:bg-muted/50">nav · item three</div>
          </Flex>
        }
        sidebarFooter={<div className="text-sm text-muted-foreground">sidebarFooter</div>}
        header={
          <div className="flex w-full items-center gap-3">
            {/* SidebarTrigger toggles the sidebar open/closed */}
            <span className="text-sm font-medium">header</span>
          </div>
        }
        content={
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">content</h1>
            <p className="text-muted-foreground">
              This is the main scrolling area. Drop any page UI here.
            </p>
            <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              content slot
            </div>
          </div>
        }
        panel={<div className="text-sm text-muted-foreground">panel · optional bottom strip</div>}  
        />);