import React from "react";
import { Button } from "../../globalStyles";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Joing our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput
            name="email"
            type="email"
            placeholder="Enter your email..."
          />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos </FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
            <FooterLink to="/">Guides</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>
            ULTRA © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="//www.youtube.com"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="//www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
