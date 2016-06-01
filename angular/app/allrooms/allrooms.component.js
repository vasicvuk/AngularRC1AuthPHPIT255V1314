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
var http_1 = require('@angular/http');
var datatable_1 = require('angular2-datatable/datatable');
var common_1 = require("@angular/common");
var AllRoomsComponent = (function () {
    function AllRoomsComponent(http) {
        var _this = this;
        this.http = http;
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/php/getrooms.php', { headers: headers })
            .map(function (res) { return res.json(); }).share()
            .subscribe(function (data) {
            _this.data = data.rooms;
        }, function (err) {
            _this.router.parent.navigate(['./MainPage']);
        });
    }
    AllRoomsComponent.prototype.removeItem = function (item) {
        this.data = _.filter(this.data, function (elem) { return elem != item; });
        console.log("Remove: ", item.email);
    };
    AllRoomsComponent = __decorate([
        core_1.Component({
            selector: 'AllRoomsPage',
            templateUrl: 'app/allrooms/allrooms.html',
            providers: [http_1.HTTP_PROVIDERS],
            directives: [datatable_1.DataTableDirectives],
            pipes: [common_1.DatePipe]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AllRoomsComponent);
    return AllRoomsComponent;
}());
exports.AllRoomsComponent = AllRoomsComponent;
//# sourceMappingURL=allrooms.component.js.map