export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface Project {
  title: string;
  objective: string;
  description: string[];
  methodology: string[];
}

export interface Activity {
  title: string;
  duration: string;
}
