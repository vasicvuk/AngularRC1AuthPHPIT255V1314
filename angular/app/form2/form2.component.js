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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var FormComponent2 = (function () {
    function FormComponent2(builder, http, router) {
        this.select = 1;
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            roomName: ["", common_1.Validators.none],
            hasTV: [this.select, common_1.Validators.none],
            beds: ["", common_1.Validators.none],
        });
    }
    FormComponent2.prototype.onAddRoom = function () {
        var _this = this;
        var data = "roomName=" + this.registerForm.value.roomName + "&hasTV=" + this.select + "&beds=" + this.registerForm.value.beds;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/addroomservice.php', data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
            if (_this.postResponse._body.indexOf("error") === -1) {
                alert("Uspesno dodavanje sobe");
                _this.router.navigate(['./']);
            }
            else {
                alert("Neuspesno dodavanje sobe");
            }
        });
    };
    FormComponent2 = __decorate([
        core_1.Component({
            selector: 'FormPage2',
            templateUrl: 'app/form2/form2.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
    ], FormComponent2);
    return FormComponent2;
}());
exports.FormComponent2 = FormComponent2;
//# sourceMappingURL=form2.component.js.map