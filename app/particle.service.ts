import {Injectable} from '@angular/core';
import {PARTICLES} from './mock-particles';
import {Particle} from './particle';
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class ParticleService {
    private particlesUrl = 'app/particles.json';
    constructor(private http: Http) { }

    getParticlesJson(): Promise<Particle[]> {
    return this.http.get(this.particlesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    
    getParticles(){
        return Promise.resolve(PARTICLES);
    }
    getParticlesSlowly() {
      return new Promise<Particle[]>(resolve =>
          setTimeout(()=>resolve(PARTICLES), 2000) 
      );
    }
    getParticle(id) {
        return this.getParticles().then(
            particles => particles.filter(
                particle => particle.id === id
            )[0]
        )
    }
}