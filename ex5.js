// Переписать консольное приложение из предыдущего юнита на классы.

class Device{
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.plugUnplug = 'unplugged';
        this.consumed = 0;
    }
    plugIn = function() {
        this.plugUnplug = 'plugged';
        this.consumed += 1;
    }
    consumedPower = function() {
        console.log(`Потребленная энергия ${this.consumed * this.power} кВт`)
    }
    plugOut = function() {
        this.plugUnplug = 'unplugged'
    }
    getInfo = function() {
        console.log(`${this.name } потребляет ${this.power} кВт`)
    }
}

class Computer extends Device {
    constructor(frequency, power){
        super();
        this.name = 'Computer';
        this.frequency = frequency;
        this.power = power;
    }
}


class Lamp extends Device {
    constructor(model, lumen, power) {
        super();
        this.name = 'Lamp';
        this.model = model;
        this.power = power;
        this.lumen = lumen;
    }
    getInfo = function() {
        console.log(`Лампа модели ${this.model}, световой поток - ${this.lumen} лм`)
    }
}

;


const comp = new Computer(frequency=1000, power=70)
const lamp = new Lamp(model='RGB', lumen=5000, power=10)

comp.plugIn()
comp.plugIn()
comp.consumedPower()
comp.getInfo()
lamp.getInfo()