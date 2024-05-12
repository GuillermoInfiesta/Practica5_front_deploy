export type Feature = {
  _id: string;
  feature: string;
};

export type Film = {
  _id: string;
  brand: string;
  name: string;
  iso: number;
  formatThirtyFive: boolean;
  formatOneTwenty: boolean;
  color: boolean;
  process: string;
  staticImageUrl: string;
  description: string;
  customDescription: string[];
  keyFeatures: Feature[];
  dateAdded: string;
};

export type Filters = {
  brands: string[];
  ISO: string[];
};

export type Project = {
  project: string;
  films: Film[];
};
