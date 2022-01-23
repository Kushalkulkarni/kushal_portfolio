import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { ConnectWithoutContact } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Close } from "@mui/icons-material";

//content
import socialLinksArr from "../../content/SocialLinksInput";
import { Typography } from "@mui/material";

// const actions = [
//   { icon: <FileCopyIcon />, name: "LinkedIn" },
//   { icon: <SaveIcon />, name: "GitHub" },
//   { icon: <PrintIcon />, name: "Instagram" },
//   { icon: <ShareIcon />, name: "CV/Resume" },
// ];

const actions = socialLinksArr;

// SpeedDialTooltipOpen
export default function SocialLinks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleClick = (link) => {
  //   window.open(link);
  // };

  return (
    // <Box
    //   sx={{
    //     height: 330,
    //     transform: "translateZ(0px)",
    //     flexGrow: 1,
    //     position: "fixed",
    //     bottom: "20px",
    //     right: "20px",
    //   }}
    // >
    <>
      <Backdrop open={open} />
      <SpeedDial
        FabProps={{ color: "secondary", size: '60:60'}}
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "fixed", bottom: 50, right: 50, }}
        // icon={<Typography>Say Hi!</Typography>}
        npm
        icon={<SpeedDialIcon icon={<LinkedInIcon />} openIcon={<Close />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={<Typography variant="h6">{action.name}</Typography>}
            tooltipOpen
            onClick={handleClose}
            // onClick={handleClick(action.link)}
          />
        ))}
      </SpeedDial>
    </>
    // </Box>
  );
}
