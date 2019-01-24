/**
 * Абстрактный класс, который представляет базовый обьект автомобиль. 
 * @abstract
 */
abstract class Car {
    protected __mileage: number;
    protected __fuel: number;

    constructor(mileage: number, fuel: number) {
        this.__mileage = mileage;
        this.__fuel = fuel;
    }

    public abstract drive(miles: number): void;

    public abstract refuel(fuel: number): void;
}

/**
 * Класс, который представляет автомобили марки Audi
 * @class
 * @property @static expense - расход топлива на милю пути
 * @property fuel - остаток топлива в баке автомобиля
 * @property mileage - колличество миль на спидометре
 * @property drive - метод "Ехать"
*  @property refuel - метод "Заправить"
 */
class Audi extends Car {
    /**
     * Расход топлива (литров/милю)
     * @public
     * @static
     */
    public static expense: number = 0.05;

    // Колличество миль на спидометре
    protected __mileage: number;
    // Остаток топлива в баке автомобиля
    protected __fuel: number;

    /**
     * Остаток топлива в баке автомобиля
     * @public
     * @returns {number}
     */
    public get fuel(): number {
        return this.__fuel;
    }

    /**
     * Колличество миль на спидометре
     * @public
     * @returns {number}
     */
    public get mileage(): number {
        return this.__mileage;
    }

    constructor(mileage: number, fuel: number) {
        super(mileage, fuel);
    }

    /**
     * Проехать указанное колличество миль
     * @public
     * @param {number} miles - колличество пройденных миль
     * @returns {void}
     */
    public drive(miles: number): void {
        if (miles <= 0) return console.log("Number of miles must be greater than zero");

        const possibleMiles: number = this.__fuel / Audi.expense;

        this.__mileage += possibleMiles <= miles ? possibleMiles : miles;
        this.__fuel = possibleMiles <= miles ? 0 : this.__fuel - miles * Audi.expense;

        if (!this.__fuel) return console.log("You need to refuel");
    }

    /**
     * Заправить указанное колличество топлива
     * @param {number} fuel - колличество топлива
     * @returns {void}
     */
    public refuel(fuel: number): void { 
        if (fuel <= 0) return console.log("The amount of fuel must be greater than zero");       
        this.__fuel += fuel;
    }
}