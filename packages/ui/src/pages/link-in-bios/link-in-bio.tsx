import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Section, Flex } from "../../layout"
import { cn } from "../../lib/utils"

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
    <Section>
      {background}
      <Flex>
        <Flex gap="400" alignPrimary="center">


          {/* Social icons */}
          {socialLinks && (
            <Flex gap="200" alignPrimary="center">
              {socialLinks}
            </Flex>
          )}

          {/* Main links */}
          {links && (
            <Flex direction="column" gap="400" className="w-full">
              {links}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Section>
  )
}
LinkInBioTemplate.displayName = "LinkInBioTemplate"
