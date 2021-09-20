"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnwsersService = void 0;
const common_1 = require("@nestjs/common");
let AnwsersService = class AnwsersService {
    constructor() {
        this.membersAnwsers = {};
        this.members = {
            '1': "Diego Juarez",
            '2': "Ivanilson Almeida",
            '3': "Matheus Morais",
            '4': "Miguel Oliveira",
            '5': "Stephanye Castellano",
            '6': "Vinicius Castro"
        };
    }
    create(anwserDto) {
        console.log(anwserDto);
        this.membersAnwsers[anwserDto.memberId] = anwserDto.anwser;
    }
    clearAnwsers() {
        return this.membersAnwsers = {};
    }
    findAll() {
        return this.sortAwnsers();
    }
    findAllMembers() {
        return Object.keys(this.members)
            .map(membersId => ({ id: membersId, name: this.members[membersId] }));
    }
    sortAwnsers() {
        return Object.keys(this.membersAnwsers)
            .map(membersId => ({
            name: this.members[membersId],
            awnser: this.membersAnwsers[membersId]
        }))
            .sort(this.alphabeticallySorter);
    }
    alphabeticallySorter(a, b) {
        var _a, _b;
        console.log({
            a,
            b
        });
        var textA = (_a = a.awnser) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        var textB = (_b = b.awnser) === null || _b === void 0 ? void 0 : _b.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
};
AnwsersService = __decorate([
    (0, common_1.Injectable)()
], AnwsersService);
exports.AnwsersService = AnwsersService;
//# sourceMappingURL=anwsers.service.js.map