import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
        header: By = By.css(".titleText");
        employees: By = By.xpath("li");
        footer: By = By.name("footer");
        noEmployeeMessage: By = By.css("#noEmployee");
        employeeCardBigName: By = By.xpath('p[@id="employeeTitle"]]');
        addEmployee: By = By.css('[name="addEmployee"]');
        newEmployee: By = By.css('[name="employee11"]');
        nameInput: By = By.css('[name="nameEntry"]');
        phoneInput: By = By.css('[name="phoneEntry"]');
        saveBtn: By = By.xpath('//button(@id="saveBtn"]');
        titleInput: By = By.css('[name="titleEntry"]');
        constructor(driver:WebDriver) {
            this.driver = driver;
        }
        async navigate() {
            await this.driver.get(this.url);
            await this.driver.wait(until.elementLocated(this.header));
        };
        async Click(elementBy: By) {
            await this.driver.wait(until.elementLocated(elementBy));
            return (await this.driver.findElement(elementBy)).click();
        }
        async sendKeys(elementBy: By, keys) {
            await this.driver.wait(until.elementLocated(elementBy));
            return this.driver.findElement(elementBy).sendKeys(keys);
        }
        async getText(elementBy) {
            await this.driver.wait(until.elementLocated(elementBy));
            return this.driver.findElement(elementBy).getText();
        }
  }

  const emPage = new employeePage(driver);

  describe("Employee Manger Test", () => {

      test("adding an employee", async () => {
       //   await driver.wait(until.elementLocated(emPage.header))
       await emPage.navigate(); 
       await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("christopher barns")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("8020000000")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("temp")
          await driver.quit();
        })
  });
  /* this is a commment *///