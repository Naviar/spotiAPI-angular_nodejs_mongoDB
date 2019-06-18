import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  
  

  constructor(public spotyService :SpotifyService) { }

  ngOnInit() {
  }
  
  aproximar(duracion:number){
    return duracion.toFixed(2);
  }
}
