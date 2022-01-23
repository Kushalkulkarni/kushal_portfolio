import { Grid } from '@mui/material';
// import Grow from '@material-ui/core/Grow';
// import BlogCard from '../Trash/BlogCard';
// import BlogCardNew from '../Cards/BlogCardNew';
import blogsArr from '../../content/BlogsInput';
import { Link } from "react-router-dom";
import BlogCard from './BlogCard';

export default function BlogList() {
  return blogsArr.map((blog, index) => (
    <Grid container md={12} direction='column' justifyContent="center">
      <Link
        style={{ textDecoration: "none" }}
        to={`/Blogs/${blog.card.title.replace(" ", "_") + "_" + index}`}
      >
        <BlogCard blogDetails={blog} blogIndex={index + 1} />
      </Link>
    </Grid>
  ));
  };

  // export default function BlogList() {
  // return blogsArr.map((blog, index) => (
  //     <Grid item xs={12} container>
  //       <Link
  //         to={`/Blogs/${blog.card.title.replace(" ", "_") + "_" + index}`}
  //       >
  //         <p>{blog.card.title}</p>
  //       </Link>
        
  //     </Grid>
  // ));
  // };