import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@repo/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-8">
      <Card className="w-full max-w-md bg-card">
        <CardHeader>
          <CardTitle>Documentation</CardTitle>
          <CardDescription>Using shared UI components.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}