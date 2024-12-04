import { ReactNode } from "react";

export interface Course {
  featured: any;
  price: ReactNode;
  features: any;
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: string;
  image: string;
  enrollLink?: string;
}