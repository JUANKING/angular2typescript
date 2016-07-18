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
var particle_detail_component_1 = require('./particle-detail.component');
var particle_service_1 = require('./particle.service');
var AppComponent = (function () {
    function AppComponent(_particleService) {
        this._particleService = _particleService;
        this.titulo = 'Modelo estándar';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._particleService.getParticles().then(function (particles) { return _this.particles = particles; });
    };
    AppComponent.prototype.onSelect = function (particle) {
        this.selectedParticle = particle;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [particle_detail_component_1.ParticleDetailComponent],
            providers: [particle_service_1.ParticleService],
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .particles {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n    float: left;\n  }\n  .particles li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 20px 4px 4px 20px;\n  }\n  .particles li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .particles li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .particles .text {\n    position: relative;\n    top: -3px;\n  }\n  .particles .code {\n    display: inline-block;\n    text-align: center;\n    font-size: small;\n    color: white;\n    width: 1.2em;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 20px;\n  }\n"],
            template: "        \n        <h1>{{titulo}}</h1>\n         <ul class=\"particles\">\n            <li *ngFor=\"#particle of particles\" (click)=\"onSelect(particle)\" [class.selected]=\"particle === selectedParticle\">\n                <span class=\"code\">{{particle?.id}}</span>\n                {{particle?.name}}\n            </li>\n        </ul>\n         <my-particle-detail [particle]=\"selectedParticle\"></my-particle-detail>\n "
        }), 
        __metadata('design:paramtypes', [particle_service_1.ParticleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map