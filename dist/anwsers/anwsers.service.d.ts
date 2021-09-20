export declare class AnwsersService {
    membersAnwsers: {};
    members: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
    };
    create(anwserDto: any): void;
    clearAnwsers(): {};
    findAll(): {
        name: any;
        awnser: any;
    }[];
    findAllMembers(): {
        id: string;
        name: any;
    }[];
    private sortAwnsers;
    private alphabeticallySorter;
}
