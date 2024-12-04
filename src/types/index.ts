export interface Course {
  title: string;
  price: string;
  featured?: boolean;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}