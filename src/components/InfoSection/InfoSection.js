import React from "react";
import {
  Info,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  HeadLine,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSectionElements";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextSubtitle,
  buttonText,
  topLine,
  headLine,
  lightText,
  subtitle,
  primary,
  img,
  alt,
}) => {
  return (
    <>
      <Info lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <HeadLine lightText={lightText}>{headLine}</HeadLine>
                <Subtitle lightTextSubtitle={lightTextSubtitle}>
                  {subtitle}
                </Subtitle>
                <Link to="sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonText}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper imgStart={imgStart}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </Info>
    </>
  );
};

export default InfoSection;
