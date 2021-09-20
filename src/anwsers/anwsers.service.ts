import { Injectable } from '@nestjs/common';


@Injectable()
export class AnwsersService {
  membersAnwsers = {}
  members = {
  '1': "Diego Juarez", 
  '2': "Ivanilson Almeida",
  '3': "Matheus Morais",
  '4': "Miguel Oliveira",
  '5': "Stephanye Castellano",
  '6': "Vinicius Castro"
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
