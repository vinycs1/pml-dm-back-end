import { AnwsersService } from './anwsers.service';
export declare class AnwsersController {
    private readonly anwsersService;
    constructor(anwsersService: AnwsersService);
    create(createAnwserDto: any): void;
    findAll(): {
        name: any;
        awnser: any;
    }[];
    findAllMembers(): {
        id: string;
        name: any;
    }[];
    deleteAnwsers(): any;
}
