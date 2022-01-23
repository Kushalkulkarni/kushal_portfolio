import CardMedia from "@mui/material/CardMedia";

export default function ProfilePhoto(props) {
  return (
      <CardMedia sx={{pr: 4}} component="img" image={props.photo} alt="Profile Photo" />
  );
}
