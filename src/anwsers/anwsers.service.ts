import { Injectable } from '@nestjs/common';


@Injectable()
export class AnwsersService {
  membersAnwsers = {}
  members = {
  '1': "Aldilane Silva", 
  '2': "Leonardo Rissi",
  '3': "Leonardo Gomes",
  '4': "Lucas Joaquim",
  '5': "Marcus Martins",
  '6': "Matheus Corrêa",
  '7': "Miguel Oliveira",
  '8': "Rafael Ferrari",
  '9': "Raphael Carvalho",
  '10': "Stephanye Castellano",
  '11': "Vinicius Castro",
  '16': "Intruso 1",
  '17': "Intruso 2",
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
