import {Component, Input} from '@angular/core';
import {Particle} from './particle';

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
  `
})
export class ParticleDetailComponent {
    @Input() 
    particle: Particle;
}