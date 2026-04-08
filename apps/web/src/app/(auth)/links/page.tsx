import { LinkInBioTemplate } from "@repo/ui"
import { Button } from "@repo/ui"
import { Center, Stack, Cover } from "@repo/ui"
import { GitBranchPlus, ThumbsDownIcon } from "lucide-react"

export default function LinkinbioPage() {
  return (
        <LinkInBioTemplate
            avatar={
                <img
                    src="https://avatars.githubusercontent.com/u/12345678?v=4"
                    alt="MonoFly UI Avatar"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
            }
            heading="MonoFly UI"
            description="Full-stack developer specializing in React and Node.js. Passionate about building scalable web applications and exploring new technologies."
            socialLinks={
                <>
                    <Button  variant="default" size="icon" className="rounded-full"><GitBranchPlus /></Button>
                    <Button  variant="default" size="icon" className="rounded-full"><GitBranchPlus /></Button>
                    <Button  variant="default" size="icon" className="rounded-full"><GitBranchPlus /></Button>
                    <Button  variant="default" size="icon" className="rounded-full"><GitBranchPlus /></Button>
                    <Button  variant="default" size="icon" className="rounded-full"><GitBranchPlus /></Button>
                </>
            }
            links={
                <>
                    <Button variant="default" size="lg" className="rounded-full p-8"><GitBranchPlus /></Button>
                    <Button variant="default" size="lg" className="rounded-full p-8"><GitBranchPlus /></Button>
                    <Button variant="default" size="lg" className="rounded-full p-8"><GitBranchPlus /></Button>
                    <Button variant="default" size="lg" className="rounded-full p-8"><GitBranchPlus /></Button>
                    <Button variant="default" size="lg" className="rounded-full p-8"><GitBranchPlus /></Button>
                </>
            }
            background={
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background opacity-20" />
            }
        />
  )
}