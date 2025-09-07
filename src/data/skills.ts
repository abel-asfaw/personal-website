import { FaJava } from 'react-icons/fa';
import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiFastapi,
  SiTypescript,
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skills {
  [key: string]: IconType;
}

const skills: Skills = {
  Python: SiPython,
  Java: FaJava,
  'C++': SiCplusplus,
  TypeScript: SiTypescript,
  React: SiReact,
  'React Native': SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  FastAPI: SiFastapi,
  Postgres: SiPostgresql,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Helm: SiHelm,
  Git: SiGit,
};

export default skills;
