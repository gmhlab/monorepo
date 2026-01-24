import { ProfileCard } from "@repo/ui";

export default function App() {
  return (
    <ProfileCard
      name="Terrance Brunner"
      role="Senior Design Engineer"
      avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMjq1f6zrvoO_vb_oRwMOsWm59Ux_7Ky9FQ&s"
      skills={["UX / UI", "Design Systems", "Figma", "Prototyping", "React / CSS / TypeScript"]}
      recentActivity="Reduced design-to-code handoff time by 60%"
      team="GW Global Mental Health"
      email="terrancebrunner@gmail.com"
    />
  );
}