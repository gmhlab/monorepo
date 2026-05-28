"use client";

import clsx from "clsx";
import { useMediaQuery } from "../../hooks";
import "./footers.css";
import { IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from "../../icons";
import { Flex, FlexItem, Section, type SectionProps } from "../../layout";
import { ButtonGroup } from "../../primitives/Button/Button";
import { IconButton } from "../../primitives/IconButton/IconButton";
import {
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
} from "../../primitives/Text/Text";

export type FooterProps = Omit<SectionProps, "variant" | "padding" | "src"> & {
  logoSrc?: string;
};
export function Footer({ className, logoSrc = "/crest-light.png", ...props }: FooterProps) {
  const { isTabletDown } = useMediaQuery();
  const listDensity = isTabletDown ? "tight" : "default";
  return (
    <Section
      elementType="footer"
      variant="neutral"
      paddingTop="1600"
      paddingBottom="4000"
      className={clsx("footer", className)}
      style={{ marginTop: "auto", color: "var(--card-foreground)" }}
      {...props}
    >
      <Flex wrap type="quarter" gap="600" container>
        <FlexItem size="minor">
          <Flex direction="column" gap="600" alignSecondary="start">
            <FlexItem>
              <a href="https://gwglobalmentalhealth.com" className="block w-fit" aria-label="Center for Global Mental Health Equity — The George Washington University">
                <img src={logoSrc} alt="" className="block h-14 w-auto" />
              </a>
            </FlexItem>
            <TextLinkList density={listDensity}>
              <TextListItem>
                <TextLink href="https://www.figma.com">figma.com</TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.x.com/figma">X</TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://instagram.com/figma">
                  Instagram
                </TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.youtube.com/@Figma">
                  YouTube
                </TextLink>
              </TextListItem>
              <TextListItem>
                <TextLink href="https://www.linkedin.com/company/figma/">
                  LinkedIn
                </TextLink>
              </TextListItem>
            </TextLinkList>
          </Flex>
        </FlexItem>
        <TextLinkList
          density={listDensity}
          title={<TextStrong className="var(--sds-typography-font-serif)">Use cases</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">UI design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">UX design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Wireframing</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Diagramming</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Brainstorming</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Online whiteboard</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Team collaboration</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Explore</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Design</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Prototyping</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Development features</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Design systems</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Collaboration features</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Design process</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">FigJam</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>Resources</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Blog</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Best practices</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Colors</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Color wheel</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Support</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Developers</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Resource library</TextLink>
          </TextListItem>
        </TextLinkList>
      </Flex>
    </Section>
  );
}

export function SocialButtons() {
  return (
    <ButtonGroup>
      <IconButton
        variant="subtle"
        aria-label="Twitter"
        href="https://www.twitter.com"
      >
        <IconTwitter />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="Instagram"
        href="https://www.instagram.com"
      >
        <IconInstagram />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="YouTube"
        href="https://www.youtube.com"
      >
        <IconYoutube />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="LinkedIn"
        href="https://www.linkedin.com"
      >
        <IconLinkedin />
      </IconButton>
    </ButtonGroup>
  );
}