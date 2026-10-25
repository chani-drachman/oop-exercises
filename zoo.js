class Animal{
    constructor(name, species, lastFedTime){
        this.name=name
        this.species=species
        this.lastFedTime=lastFedTime
    }
    Feed(){}
}
class Carnivore extends Animal{
    constructor(name, species, lastFedTime){
super(name, species, lastFedTime)
    }
Feed(){console.log(`Feeding carnivore ${this.species} - meat served`);
}
}
class Herbivore extends Animal{
constructor(name, species, lastFedTime){
    super(name, species, lastFedTime)
}
Feed(){console.log(`Feeding herbivore ${this.species} - veggies served.`)}
}

class Zookeeper{
    constructor(listOfAnimals){
        this.listOfAnimals=listOfAnimals
    }
    addAnimal(animal){ this.listOfAnimals.push(animal)}


feedAll(){
    this.listOfAnimals.forEach(animal => {
        animal.Feed()
    });
}


getLastFed(name){
    let animal=this.listOfAnimals.find(animal=>{
return animal.name===name;
    })
    return animal.lastFedTime;
}


getBySpecies(species){
    return this.listOfAnimals.filter(animal=>{
        return animal.species===species
    })
}

}