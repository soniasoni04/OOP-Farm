class Farm {
    constructor(name) {
        this.name=name
        this.crops = []
        this.animals = []
    }
    addCrop(crop) {
        //console.log(crop);
        this.crops.push(crop)
        //console.log(this.crops)
      }
    calculateIncome() {
        return this.crops

        .map(crop => crop.getYieldInEuros())
        .concat(this.animals.map(animal => animal.getValueInEuros()))
        .reduce((a,b) => a + b, 0)
        
    }
    
    addAnimal(animal){
        this.animals.push(animal)
    }
    
    printReport() {
    console.log(`
    ----------------------
    - Farm: FARM NAME    -
    - No. of crops: ${this.crops.length}   -
    - No. of animals: ${this.animals.length} -
    - Total income: ${this.calculateIncome()}€ -
    ----------------------
    `)
    }
  }

 //const myFram = new Farm ('sonia')
 //console.log(myFram.calculateIncome())
//console.log(myFram)
//myFram.addCrop("sugarcane")
//console.log(myFram)


module.exports.Farm = Farm