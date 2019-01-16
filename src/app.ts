/**
 * Абстрактный класс, который представляет базовый обьект автомобиль. 
 * @abstract
 */
abstract class Car {
    protected _mileage: number;
    protected _fuel: number;

    constructor(mileage: number, fuel: number) {
        this._mileage = mileage;
        this._fuel = fuel;
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

    /**
     * Остаток топлива в баке автомобиля
     * @public
     * @returns {number}
     */
    public get fuel(): number {
        return this._fuel;
    }

    /**
     * Колличество миль на спидометре
     * @public
     * @returns {number}
     */
    public get mileage(): number {
        return this._mileage;
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

        const possibleMiles: number = this._fuel / Audi.expense;

        this._mileage += possibleMiles <= miles ? possibleMiles : miles;
        this._fuel = possibleMiles <= miles ? 0 : this._fuel - miles * Audi.expense;

        if (!this._fuel) return console.log("You need to refuel");
    }

    /**
     * Заправить указанное колличество топлива
     * @param {number} fuel - колличество топлива
     * @returns {void}
     */
    public refuel(fuel: number): void { 
        if (fuel <= 0) return console.log("The amount of fuel must be greater than zero");       
        this._fuel += fuel;
    }
}