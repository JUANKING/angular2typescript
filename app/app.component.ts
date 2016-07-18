import {Component, OnInit} from '@angular/core';
import {Particle} from './particle';
import {ParticleDetailComponent} from './particle-detail.component';
import {ParticleService} from './particle.service';


@Component({
    selector: 'my-app',
    directives: [ParticleDetailComponent],
    providers: [ParticleService],
     styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .particles {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
    float: left;
  }
  .particles li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 20px 4px 4px 20px;
  }
  .particles li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .particles li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .particles .text {
    position: relative;
    top: -3px;
  }
  .particles .code {
    display: inline-block;
    text-align: center;
    font-size: small;
    color: white;
    width: 1.2em;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 20px;
  }
`],
     template: `        
        <h1>{{titulo}}</h1>
         <ul class="particles">
            <li *ngFor="#particle of particles" (click)="onSelect(particle)" [class.selected]="particle === selectedParticle">
                <span class="code">{{particle?.id}}</span>
                {{particle?.name}}
            </li>
        </ul>
         <my-particle-detail [particle]="selectedParticle"></my-particle-detail>
 `
})
export class AppComponent implements OnInit{
    ngOnInit() {
        this._particleService.getParticles().then(
          particles => this.particles = particles
      )
    }
  

  titulo = 'Modelo estándar';
  constructor(private _particleService: ParticleService) { }
   //public particles = PARTICLES;
   particles;
   selectedParticle: Particle;
   onSelect(particle: Particle) {
        this.selectedParticle = particle; 
    }
}


