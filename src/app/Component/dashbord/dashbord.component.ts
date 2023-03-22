import { Component } from '@angular/core'
import { Movie } from 'src/app/model/movie'
import { DataService } from 'src/app/Service/data.service'
import { environment } from 'src/environment/environment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent {
  latestMovies: any
  popularMovies!: Movie
  nowPlayingMovies!: Movie
  topRatedMovies!: Movie
  upComingMovies!: Movie
  trendingMovies!: Movie
  originals!: Movie
  i: any
  movie: any
  constructor (private dataService:DataService){}
  ngOnInit():void {
    this.getLatestMovie()
    this.getPopularMovies()
    this.getNowPlayingMovies()
    this.getTopRatedMovies()
    this.getUpComingMovies()
    this.getTrendingMovies()
    this.getOriginals()
  }

  getLatestMovie() {
    this.dataService.getLatestMovie().subscribe(
      (res) => {
        this.latestMovies = this.changeData(res)
        console.log(this.latestMovies)
      },
      (err) => {
        console.log('Not able to get latest movies', err)
      },
    )
  }
  changeData(res: any): any {
    // if (!res.backdrop_path) {
      res.backdrop_path ='https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg?api_key= =7010392fe4f52fb0b2554abf8a6c845a';
    // }
    return res
  }

  getPopularMovies() {
    this.dataService.getPopularMovie().subscribe(
      (res) => {
        this.popularMovies = this.modifyData(res)
        console.log(this.popularMovies)
      },
      (err) => {
        console.log('err while fetching popular movie', err)
      },
    )
  }

  getNowPlayingMovies() {
    this.dataService.getNowPlayingMovie().subscribe(
      (res) => {
        this.nowPlayingMovies = this.modifyData(res)
        console.log(this.nowPlayingMovies)
      },
      (err) => {
        console.log('err while fetching popular movie', err)
      },
    )
  }

  getTopRatedMovies() {
    this.dataService.getTopRatedMovie().subscribe(
      (res) => {
        this.topRatedMovies = this.modifyData(res)
        console.log(this.topRatedMovies)
      },
      (err) => {
        console.log('err while fetching popular movie', err)
      },
    )
  }

  getUpComingMovies() {
    this.dataService.getUpcomingMovies().subscribe(
      (res) => {
        this.upComingMovies = this.modifyData(res)
        console.log(this.upComingMovies)
      },
      (err) => {
        console.log('err while fetching popular movie', err)
      },
    )
  }

  getTrendingMovies() {
    this.dataService.getTrendingMovie().subscribe(
      (res) => {
        this.trendingMovies = this.modifyData(res)
        console.log(this.trendingMovies)
      },
      (err) => {
        console.log('err while fetching popular movie', err)
      },
    )
  }

  getOriginals() {
    this.dataService.getOriginalMovie().subscribe(
      (res) => {
        this.originals = this.modifyData(res)
        console.log(this.originals)
      },
      (err) => {
        console.log('err while fetching popular movie', err)
      },
    )
  }

  modifyData(movies: Movie): Movie {
    if (movies.results) {
      movies.results.forEach(
        (element: { backdrop_path: string; title: any; name: any }) => {
          element.backdrop_path =
            'https://image.tndb.org/t/p/original' +
            element.backdrop_path +
            '?api_key=7010392fe4f52fb0b2554abf8a6c845a'
          if (!element.title) {
            element.title = element?.name
          }
        },
      )
    }
    (movies);
    return movies

  }
}
