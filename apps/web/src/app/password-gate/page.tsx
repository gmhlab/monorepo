export default async function PasswordGatePage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; error?: string }>;
}) {
  const { redirect = "/", error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-md">
        <h1 className="mb-2 text-center text-xl font-semibold text-foreground">
          Password Required
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Enter the site password to continue.
        </p>

        {error && (
          <div className="mb-4 rounded-md bg-destructive/10 px-3 py-2 text-center text-sm text-destructive">
            Incorrect password. Please try again.
          </div>
        )}

        <form method="POST" action="/api/password-gate">
          <input type="hidden" name="redirect" value={redirect} />
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            className="mb-4 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-white placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
