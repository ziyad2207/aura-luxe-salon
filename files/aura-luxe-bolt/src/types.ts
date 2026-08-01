export type Booking = {
  name: string;
  email: string;
  phone: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  notes?: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
};

export type Stylist = {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  instagram: string;
};

export type Package = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export type Review = {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
};

export type FaqItem = {
  q: string;
  a: string;
};
