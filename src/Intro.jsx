import TypeAnimation from 'react-type-animation';
import {Container, Box, Paper} from '@mui/material';

const Intro = () => {
  return (
    <Container>
      <Paper>
        <TypeAnimation cursor={false} sequence={["", 2000, 'Hi, Im Noah!']}wrapper="h1"/>
        <TypeAnimation
        cursor={false}
        sequence={['', 
        3000, 'Im a mechanical engineer.', 
        1000, 'Im a full stack web developer.',
        1000, 'Im a full stack web developer and I like to pet dogs.',
        1000, 'Im a full stack web developer and I like to ride motorcycles.',
        1000, 'Im a full stack web developer and I like to code.',
        1000, 'Im a full stack web developer and I like to design.',
        1000, 'Im a full stack web developer and I like to learn.',
        1000, 'Im a full stack web developer and I like to make things.',
        ]}
        wrapper="h1"
        />
      </Paper>
    </Container>
  );
};

export default Intro;
