import { Grid } from '@mui/material';
// import Grow from '@material-ui/core/Grow';
// import ProjectCardNew from '../Cards/ProjectCardNew';
import projectsArr from '../../content/ProjectsInput';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  return projectsArr.map((project, index) => (
    <Grid
      item
      container
      padding={2}
      md={12}
      lg={6}
      justifyContent="center"
    >
      <Link
        style={{ textDecoration: "none" }}
        to={`/Projects/${project.card.title.replace(" ", "_") + "_" + index}`}
      >
        <ProjectCard projectDetails={project} projectIndex={index + 1} />
      </Link>
    </Grid>
  ));
};

// export default function ProjectList() {
//   return projectsArr.map((project, index) => (
//       <Grid item md={12} lg={6} container>
//         <Link
//           to={`/Projects/${project.card.title.replace(" ", "_") + "_" + index}`}
//         >
//           <p>
//             {project.card.title}
//           </p>
//         </Link>
//       </Grid>
//   ));
// };