import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environment/environment'
import { Movie } from '../model/movie'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'https://api.themoviedb.org/3'
  constructor(private http: HttpClient) {}

  getLatestMovie(): Observable<any> {
    return this.http.get<any>(
      this.url + '/movie/latest?api_key=7010392fe4f52fb0b2554abf8a6c845a'
    )
  }

  getPopularMovie(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/popular?api_key=7010392fe4f52fb0b2554abf8a6c845a'
    )
  }

  getNowPlayingMovie(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/now_playing?api_key=7010392fe4f52fb0b2554abf8a6c845a'
    )
  }

  getTopRatedMovie(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/rated?api_key=7010392fe4f52fb0b2554abf8a6c845a'
    )
  }

  getUpcomingMovies(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/upcoming?api_key=7010392fe4f52fb0b2554abf8a6c845a'

    )
  }

  getTrendingMovie(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/trending/all/week?api_key=7010392fe4f52fb0b2554abf8a6c845a'
    )
  }

  getOriginalMovie(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/discover/tv?api_key=7010392fe4f52fb0b2554abf8a6c845a'
    )
  }
}

