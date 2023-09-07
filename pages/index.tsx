import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import DamianLogo from "../src/icons/logo.svg";
import GithubLogo from "../src/icons/github-brands.svg";
import { ProjectCard } from "../src/components/ProjectCard/ProjectCard";
import { Icon } from "../src/components/Icon/Icon";
import { ProjectCardsContainer } from "../src/components/ProjectCard/styles/ProjectCard.styles";

const MainContainer = styled("main")`
  max-width: 680px;
  margin: 0 auto;
`;

const SectionContainer = styled("section")`
  padding: 0 20px;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

const Title = styled("h1")`
  margin-bottom: 60px;
`;

const Button = styled("a")`
  display: block;
  padding: 15px 20px;
  text-align: center;
  background: #efa35d;
  color: #1f2937;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>@damianveltkamp personal links</title>
        <meta
          name="description"
          content="Personal links for my instagram bio"
        />
      </Head>

      <MainContainer>
        <SectionContainer>
          <Title>@damianveltkamp</Title>
          <Button
            aria-label="Link to portfolio website of Damian Veltkamp"
            href="https://www.damianveltkamp.tech/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio website
          </Button>
          <Button
            aria-label="Link to Damian Veltkamp github"
            href="https://github.com/damianveltkamp"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Button>
        </SectionContainer>
      </MainContainer>

      <footer></footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
