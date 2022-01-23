import * as React from "react";
import ProjectList from "../components/Cards/ProjectsList";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Section from '../Layout/LayoutComponents/Section';
import Footer from '../components/Miscellaneous/Footer';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <>
      <Section margin={5} gridChildren={10}>
        <ProjectList />
      </Section>
      <Footer />
    </>
  );
}
