"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var particle_service_1 = require('./particle.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var ParticlesComponent = (function () {
    function ParticlesComponent(_particleService, _router) {
        this._particleService = _particleService;
        this._router = _router;
        this.titulo = 'Modelo estándar';
    }
    ParticlesComponent.prototype.onSelect = function (particle) {
        this.selectedParticle = particle;
    };
    ParticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._particleService.getParticles()
            .then(function (particles) { return _this.particles = particles; });
    };
    ParticlesComponent.prototype.gotoDetail = function () {
        this._router.navigate(['ParticleDetail', { id: this.selectedParticle.id }]);
    };
    ParticlesComponent = __decorate([
        core_1.Component({
            selector: 'my-particles',
            styleUrls: ['app/particles.component.css'],
            templateUrl: 'app/particles.component.html',
        }), 
        __metadata('design:paramtypes', [particle_service_1.ParticleService, router_deprecated_1.Router])
    ], ParticlesComponent);
    return ParticlesComponent;
}());
exports.ParticlesComponent = ParticlesComponent;
//# sourceMappingURL=particles.component.js.map