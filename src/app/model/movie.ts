export interface Movie {
  dates: Dates;
  page: number;
  results?: (ResultsEntity) [] | null;
  total_pages: number;
  total_results: number;
  }

  export interface Dates {
  maximum: string;
  minimum: string;
  }

  export interface ResultsEntity {
    name: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number) [] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string; release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  }



// export interface Movie {
//   backdrop_path(backdrop_path: any): unknown;
//   results: any;
//   application: Application;
//   search_engines?: (SearchEnginesEntity)[] | null;
//   user_preferences: UserPreferences;
//   user_data: UserData;
// }
// export interface Application {
//   name: string;
//   app_id: string;
//   version: string;
// }
// export interface SearchEnginesEntity {
//   category: string;
//   name: string;
//   api: string;
//   pinned: boolean;
//   last_used: number;
// }
// export interface UserPreferences {
//   version: string;
//   extension_enable: boolean;
//   privacy: Privacy;
// }
// export interface Privacy {
//   collect_stats: boolean;
// }
// export interface UserData {
//   last_search_input: string;
// }
