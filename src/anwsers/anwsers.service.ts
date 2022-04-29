import { Injectable } from '@nestjs/common';


@Injectable()
export class AnwsersService {
  membersAnwsers = {}
  members = {
  '1': "Diego Juarez", 
  '2': "Pedro Diniz",
  '4': "Marcus Martins",
  '6': "Vinicius Castro",
  '8': "Raphael Carvalho",
  '9': "Willian Tavares",
  '11': "Henrique Maltez",
  '14': "Levi Bastos",
  '15': "Aramys Matos",
  '16': "Fabio Filho", 
  '17': "Intruso 1",
  '18': "Intruso 2",
  '19': "Intruso 3",
  '20': "Intruso 4",
  '21': "Intruso 5",
  }

  create(anwserDto) {

    console.log(anwserDto)
    this.membersAnwsers[anwserDto.memberId] = anwserDto.anwser
  }

  clearAnwsers(){
    return this.membersAnwsers = {}
  }

  findAll() {
    return this.sortAwnsers()
  }

  findAllMembers(){
    return Object.keys(this.members)
    .map(membersId => ({id: membersId, name: this.members[membersId]}))
  }

  private sortAwnsers(){
   return Object.keys(this.membersAnwsers)
    .map(membersId => ({ 
      name:this.members[membersId] , 
      awnser: this.membersAnwsers[membersId] 
    }))
    .sort(this.alphabeticallySorter)
  }

  private alphabeticallySorter(a,b){
    var textA = a.awnser?.toUpperCase();
    var textB = b.awnser?.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

}
