import {Component, OnInit} from '@angular/core';
import {Particle} from './particle';
import {ParticleService} from './particle.service';
import {Router} from '@angular/router-deprecated';


@Component({
    selector: 'my-particles',
    styleUrls: ['app/particles.component.css'],
    templateUrl: 'app/particles.component.html',
})
export class ParticlesComponent implements OnInit{ 

  constructor(private _particleService: ParticleService, private _router: Router) { }
  titulo = 'Modelo estándar';
   particles;
   selectedParticle: Particle;
   onSelect(particle: Particle) {
        this.selectedParticle = particle; 
    }
    ngOnInit() {
        this._particleService.getParticles()
        .then(
          particles => this.particles = particles
      )
    }
    gotoDetail(){
      this._router.navigate(['ParticleDetail', { id: this.selectedParticle.id }]);
  }
}


