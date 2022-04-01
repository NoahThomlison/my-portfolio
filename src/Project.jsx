import {Container, Typography, CardMedia, Card, CardActions, CardContent, Button, Box, Paper, Link} from '@mui/material';

function Project({project, index}) {

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
    <Card sx={{ width: 350, minWidth: 300, margin: "10px", height: "300px", position: "relative"}}>
      <CardMedia
        component="img"
        height="50%"
        image= {project.thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        {project.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
        {project.description}
        </Typography> */}
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
  )
}

export default Project;