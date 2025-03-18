// export interface IMovieCardProps {
//   title: string;
//   image: string;
//   categories:string[];
//   className?: string;
// }

export interface IMovieCardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  type?:string;
  trailerUrl?:string;
  rating?: number;
  year?: number;
  duration?: string;
  director?: string;
  cast?:string[];
  categories: string[];
  maturityRating?: string;
  quality?: string[];
  language?:string;
  seasons?:number;
  subtitles?:string[];
  relatedContent?: Record<any, any>[]
  className?: string;
}

export interface IContentDetailsProps {
  content: IMovieCardProps;
}