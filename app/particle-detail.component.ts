import {Component, Input, OnInit} from '@angular/core';
import {Particle} from './particle';
import {ParticleService} from './particle.service'
import {RouteParams} from '@angular/router-deprecated';

@Component({
  selector: 'my-particle-detail',
  template:` <div *ngIf="particle">
       <h2>Detalles del {{particle.type}} {{particle.name}}.</h2>
       <p>Masa: {{particle.mass}}</p>
       <p>Carga: {{particle.charge}}</p>
       <p>Spin: {{particle.spin}}</p>
       <p>Type: {{particle.type}}</p>
       <p>Fuerzas: {{particle.forces.join(', ')}}</p>
       <div>
         <label>Ajusta la masa: </label>
         <input [(ngModel)]="particle.mass" placeholder="masa">
       </div>
   </div>
   <button (click)="goBack()">Atras</button>
  `
})
export class ParticleDetailComponent  implements OnInit{
    constructor(
      private _particleService: ParticleService,
      private _routeParams: RouteParams) {
    }
    particle:Particle;
    ngOnInit() {
      let id = this._routeParams.get('id');
      this._particleService.getParticle(id)
        .then(particle => this.particle = particle);
    }
    goBack() {
      window.history.back();
    }
}