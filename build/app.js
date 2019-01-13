/**
 * Абстрактный класс, который представляет базовый обьект автомобиль.
 * @abstract
 */
class Car {
    constructor(mileage, fuel) {
        this._mileage = mileage;
        this._fuel = fuel;
    }
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
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    /**
     * Остаток топлива в баке автомобиля
     * @public
     * @returns {number}
     */
    get fuel() {
        return this._fuel;
    }
    /**
     * Колличество миль на спидометре
     * @public
     * @returns {number}
     */
    get mileage() {
        return this._mileage;
    }
    /**
     * Проехать указанное колличество миль
     * @public
     * @param {number} miles - колличество пройденных миль
     * @returns {void}
     */
    drive(miles) {
        if (miles <= 0)
            return console.log("Number of miles must be greater than zero");
        const possibleMiles = this._fuel / Audi.expense;
        this._mileage += possibleMiles <= miles ? possibleMiles : miles;
        this._fuel = possibleMiles <= miles ? 0 : this._fuel - miles * Audi.expense;
        if (!this._fuel)
            return console.log("You need to refuel");
    }
    /**
     * Заправить указанное колличество топлива
     * @param {number} fuel - колличество топлива
     * @returns {void}
     */
    refuel(fuel) {
        if (fuel <= 0)
            return console.log("The amount of fuel must be greater than zero");
        this._fuel += fuel;
    }
}
Audi.expense = 0.05;
