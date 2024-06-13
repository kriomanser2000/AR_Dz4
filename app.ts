abstract class Transport
{
    protected brand: string;
    protected model: string;
    protected year: number;
    constructor(brand: string, model: string, year: number)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    abstract displayInfo(): void;
}
class Car extends Transport
{
    private numOfDoors: number;
    constructor(brand: string, model: string, year: number, numOfDoors: number)
    {
        super(brand, model, year);
        this.numOfDoors = numOfDoors;
    }
    public displayInfo(): void 
    {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, Doors: ${this.numOfDoors}`);
    }
}
class Motorcycle extends Transport
{
    private type: string;
    constructor(brand: string, model: string, year: number, type: string)
    {
        super(brand, model, year);
        this.type = type;
    }
    public displayInfo(): void 
    {
        console.log(`Motorcycle: ${this.brand} ${this.model}, Year: ${this.year}, Type: ${this.type}`);
    }
}
class Bicycle extends Transport
{
    private hasGear: boolean;
    constructor(brand: string, model: string, year: number, hasGear: boolean) 
    {
        super(brand, model, year);
        this.hasGear = hasGear;
    }
    public displayInfo(): void 
    {
        console.log(`Bicycle: ${this.brand} ${this.model}, Year: ${this.year}, Has Gear: ${this.hasGear}`);
    }
}
const car1 = new Car("Toyota", "Camry", 2020, 4);
const car2 = new Car("Honda", "Accord", 2019, 4);
const motorcycle1 = new Motorcycle("Yamaha", "R1", 2021, "Sport");
const motorcycle2 = new Motorcycle("Kawasaki", "Ninja", 2020, "Sport");
const bicycle1 = new Bicycle("Giant", "Escape 3", 2022, true);
const bicycle2 = new Bicycle("Trek", "FX 2", 2021, false);
const transports: Transport[] = [car1, car2, motorcycle1, motorcycle2, bicycle1, bicycle2];
for (const transport of transports) 
{
    transport.displayInfo();
}