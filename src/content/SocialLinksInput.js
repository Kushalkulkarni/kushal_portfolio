import * as React from "react";
import {
  LinkedIn,
  Instagram,
  GitHub,
  ContactPage,
  Email,
} from "@mui/icons-material";

export const socialLinksArr = [
  {
    name: "LinkedIn",
    icon: (
      <a href="https://www.linkedin.com/in/kushkul97/" target="_blank">
        <LinkedIn color="primary" />
      </a>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <a href="https://www.instagram.com/kush_kul7/" target="_blank">
        <Instagram color="primary" />
      </a>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <a href="https://github.com/Kushalkulkarni" target="_blank">
        <GitHub color="primary" />
      </a>
    ),
  },
  {
    name: "Email",
    icon: (
      <a href={"kushal.kulkarni.kk@gmail.com"} target="_blank">
        <Email color="primary" />
      </a>
    ),
  },
  {
    name: "CV/Resume",
    icon: (
      <a
        href="https://drive.google.com/file/d/1mSx-hUKDX5BGvL_F5TRNini4JAGNJ2TQ/view?usp=sharing"
        target="_blank"
      >
        <ContactPage color="primary" />
      </a>
    ),
  },
];

export default socialLinksArr;
