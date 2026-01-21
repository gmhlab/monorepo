import { Button, Card, CardHeader, CardTitle, CardContent } from "@repo/ui";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>CDN App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-text-muted">Vite + React + Shared UI</p>
          <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}