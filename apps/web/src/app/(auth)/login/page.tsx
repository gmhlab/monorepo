import { LoginForm } from "@repo/ui"
import { Stack } from "@repo/ui"
import { Logo } from "@repo/ui"

export default function LoginPage() {
  return (
    <Stack gap="lg" align="center" className="gap-6 p-6 md:p-10">
        <Logo />
        <LoginForm />
    </Stack>
  )
}