import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  
  loading: boolean;
  constructor(private spotify: SpotifyService) { }
  
  
  buscar(termino: string) {
    console.log(termino);
    
    if(termino.length <= 0){
      alert('debes escribir el nombre de una canción para buscarla!');
    }
    else{
      this.loading = true;
    this.spotify.getTracks(termino)
    .subscribe( (data: any) => {
      console.log(data);
      if(data['noresult'] === false){
        this.spotify.data = data['data'];
        this.loading = false;
      }
      else{
        alert('no se encontraron resultados para esta busqueda');
        this.loading = false;
      }
      
      
    });
  }
  }

  ngOnInit() {
  }

}
