import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Cover } from "../../layout"
import { Center } from "../../layout"
import { Stack } from "../../layout"
import { Cluster } from "../../layout"
import { sectionSpacingMap } from "../../layout"
import { ProfileHeader } from "../../patterns/profile-header"
import { cn } from "../../lib"

export interface LinkInBioTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Profile avatar or image */
  avatar?: ReactNode
  /** Name / heading */
  heading: ReactNode
  /** Short bio or description */
  description?: ReactNode
  /** Social media icon links */
  socialLinks?: ReactNode
  /** Primary call-to-action links */
  links?: ReactNode
  /** Optional decorative background layer */
  background?: ReactNode
}

export function LinkInBioTemplate({
  avatar,
  heading,
  description,
  socialLinks,
  links,
  background,
  className,
  ref,
  ...props
}: LinkInBioTemplateProps) {
  return (
    <Cover
      minHeight="auto"
      ref={ref}
      className={cn("bg-background text-foreground relative overflow-hidden", className)}
      {...props}
    >
      {background}

      <Center max="xl" gutter className={cn("relative z-10", sectionSpacingMap["sm"])}>
        <Stack gap="xl" align="center">
          <ProfileHeader
            avatar={avatar}
            heading={heading}
            description={description}
          />

          {/* Social icons */}
          {socialLinks && (
            <Cluster gap="md" justify="center">
              {socialLinks}
            </Cluster>
          )}

          {/* Main links */}
          {links && (
            <Stack gap="md" className="w-full">
              {links}
            </Stack>
          )}
        </Stack>
      </Center>
    </Cover>
  )
}
LinkInBioTemplate.displayName = "LinkInBioTemplate"
