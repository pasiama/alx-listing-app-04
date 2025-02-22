export * from './ButtonProps';
export * from './CardProps';

export interface PropertyProps {
      name: string;
      address: {
          state: string;
          city: string;
          country: string;
      };
      rating: number;
      category: string[];
      price: number;
      offers: {
          bed: string;
          shower: string;
          occupants: string;
      };
      image: string;
      discount: string;
      description:string;
  }
  

  export interface Reviews {
    name: string;
    
    rating: number;
    
    avatar: string;
    comment: string;
    description:string;
}