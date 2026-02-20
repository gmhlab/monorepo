import { Login, ProfileCard, Separator } from "@repo/ui"
export default function Page() {
  return (
    <div className="flex min-h-svh bg-[#033c5a] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-xs">
        <Login />
        <Separator />
        <ProfileCard
          name="Terrance Brunner"
          role="Senior Design Engineer"
          avatarUrl="https://static.wixstatic.com/media/d5c560_40951c09387948e7a06d3a13426fd251~mv2.png/v1/fill/w_290,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/slice1.png"

//          avatarUrl="https://www.jeffersonkidd.com/img/logo.png"
          skills={["UX / UI", "Design Systems", "Figma", "Prototyping", "React / CSS / TypeScript"]}
          recentActivity="Reduced design-to-code handoff time by 60%"
          team="GW Global Mental Health"
          email="terrancebrunner@gmail.com"
        />
      </div>
    </div>
  )
}