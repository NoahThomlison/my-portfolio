import {Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Link} from '@mui/material';

function Project({width, project, index}) {

  let techStackList = project.techStack.map((stack, index) => {
    if(stack !== "Featured"){
      if(index === project.techStack.length - 1){
        return(stack)
      }
      else{
        return(stack + ", ")
      }
    }})

  return (
  // <Box sx={{width: "30%", height: "40%"}}>
    <Card className="project">
      <CardMedia
        className="projectImage"
        component="img"
        image= {project.thumbnail[0]}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        {project.title}
        </Typography>
        {width > 1150 ? <div>
        <Typography variant="body2" color="text.secondary">
        {project.description}
        </Typography>
        {/* <br></br> */}
        </div>
        : ""
        }
        <Typography variant="body2" color="text.secondary">
        <strong>Stack:</strong> {techStackList.map((stack, index) => {
          return(stack)})}
        </Typography>
      </CardContent>
      <Box sx={{position: "absolute", bottom: "0px"}}>
      <CardActions>
        <Link href={project.githubLink} underline="none">
        <Button size="small" variant="outlined">View on Github</Button>
        </Link>
      </CardActions>
      </Box>
    </Card>
    // </Box>
  )
}

export default Project;