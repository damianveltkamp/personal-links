import Image from "next/image";
import {
  ProjectCardContainer,
  ProjectCardContentContainer,
} from "./styles/ProjectCard.styles";

type ProjectCardProps = {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export const ProjectCard = ({ title, href, image }: ProjectCardProps) => {
  return (
    <ProjectCardContainer href={href} rel="noreferrer " target="_blank">
      <Image layout="fill" src={image.src} alt={image.alt} />
      <ProjectCardContentContainer>
        <h3>{title}</h3>
      </ProjectCardContentContainer>
    </ProjectCardContainer>
  );
};
