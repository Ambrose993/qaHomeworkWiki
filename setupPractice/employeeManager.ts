import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver
} from 'selenium-webdriver'

const chromedriver = require('chromedriver');


export class empObject {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    addEmployee: By = By.name('addEmployee');
    newEmployee: By= By.css('[name="employee11"]');
    nameInput: By = By.name('nameEntry');
    phoneInput: By = By.name('phoneEntry');
    titleInput: By = By.name('titleEntry');
    saveBtn: By = By.name('save');

constructor(driver:WebDriver) {
    this.driver = driver;
}

async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.addEmployee));
};
async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).click();
};
async SendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    await this.driver.findElement(elementBy).clear();
    return this.driver.findElement(elementBy).sendKeys(keys);
};
async getText(elementBy) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).getText();
};

} ;  