export interface Job {
  id: string;
  title: string;
  hospital: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Per Diem';
  salary: string;
  matchPercentage: number;
  urgent: boolean;
  postedTime: string;
  shift: string;
}

export interface Course {
  id: string;
  title: string;
  module: string;
  progress: number;
  image: string;
  credits: number;
  isPremium?: boolean;
}

export interface Post {
  id: string;
  author: string;
  role: string;
  time: string;
  content: string;
  image?: string;
  tags: string[];
  likes: number;
  comments: number;
  isPoll?: boolean;
  pollData?: { label: string; percentage: number }[];
  avatar: string;
}

export interface User {
  name: string;
  role: string;
  avatar: string;
  completeness: number;
}
