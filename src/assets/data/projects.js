import { v4 as uuidv4 } from 'uuid';

import Pacman from '../images/pacman.png';
import Mazatlan from '../images/mazatlan.png';
import Eyes from '../images/eyes.png';
import Pacman2 from '../images/pacman2.PNG';
import Balls from '../images/balls.PNG';
import Hanoi from '../images/hanoi.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'DOM Pacman',
    desc:
      'It consists of spawning Pacmans in the DOM, and they move around the screen.',
    img: Pacman2,
    link1: 'https://dyh135ru.github.io/DOMPacman/',
    link2: 'https://github.com/dyh135ru/DOMPacman',
  },
  {
    id: uuidv4(),
    name: 'Map Animations',
    desc: 'It displays a map with animations from point A to point B.',
    img: Mazatlan,
    link1: 'https://dyh135ru.github.io/MapAnimations/',
    link2: 'https://github.com/dyh135ru/MapAnimations',
  },
  {
    id: uuidv4(),
    name: 'Big Eyes',
    desc: 'It consists in two eyes that follow your mouse.',
    img: Eyes,
    link1: 'https://dyh135ru.github.io/bigEyes/',
    link2: 'https://github.com/dyh135ru/bigEyes',
  },
  {
    id: uuidv4(),
    name: 'Pacman Exercise',
    desc:
      'It consists of detecting the edges of the screen and changing the pictures of the Pacman.',
    img: Pacman,
    link1: 'https://dyh135ru.github.io/pacmanExercise/',
    link2: 'https://github.com/dyh135ru/pacmanExercise',
  },
  {
    id: uuidv4(),
    name: 'RainbowBalls',
    desc: 'It consists of bouncing balls on the screen.',
    img: Balls,
    link1: 'https://dyh135ru.github.io/RainbowBalls/',
    link2: 'https://github.com/dyh135ru/RainbowBalls',
  },
  {
    id: uuidv4(),
    name: 'Hanoi-Tower',
    desc: 'It consists of introducing a number of discs to complete the game.',
    img: Hanoi,
    link1: 'https://dyh135ru.github.io/Hanoi-tower/',
    link2: 'https://github.com/dyh135ru/Hanoi-tower',
  },
];

export default projects;
