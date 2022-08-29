export type GetStarshipResponseSuccess = {
  url: string;
  name: string;
  crew: string;
  MGLT: string;
  model: string;
  length: string;
  edited: string;
  films: string[];
  created: string;
  pilots: string[];
  passengers: string;
  consumables: string;
  manufacturer: string;
  cargo_capacity: string;
  starship_class: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
  max_atmosphering_speed: string;
};

export type SWStarship = GetStarshipResponseSuccess;

export type GetStarshipsResponseSuccess = {
  count: number;
  next: string;
  previous: null;
  results: SWStarship[];
};