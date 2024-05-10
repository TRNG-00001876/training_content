import { Component } from '@angular/core';

class Movie{
  title:string='';
  director:string='';
  cast:string='';
  releaseDate:string='';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
 title:string="Most Favourite Movies";
 movies: Movie[] = [
  {title: 'Avengers: Infinity War', director: 'Anthony Russo, Joe Russo', cast: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo', releaseDate: 'April 27, 2018'},
  {title: 'Jurassic World: Fallen Kingdom', director: 'J.A. Bayona', cast: 'Chris Pratt, Bryce Dallas Howard, Rafe Spall', releaseDate: 'June 22, 2018'},
  {title: 'Incredibles 2', director: 'Brad Bird', cast: 'Craig T. Nelson, Holly Hunter, Sarah Vowell', releaseDate: 'June 15, 2018'},
  {title: 'Black Panther', director: 'Ryan Coogler', cast: 'Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'o', releaseDate: 'February 16, 2018'},
  {title: 'Deadpool 2', director: 'David Leitch', cast: 'Ryan Reynolds, Josh Brolin, Morena Baccarin', releaseDate: 'May 18, 2018'}
];
num:number=0;
showMe:boolean=true;
hideList()
{
  this.showMe=false;
}
showList()
{
  this.showMe=true;
}
}
