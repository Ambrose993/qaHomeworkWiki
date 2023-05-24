import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");


  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();


  class emPage {
      driver: WebDriver;
      static url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST


        static header: By = By.css(".titleBar");
        static addEmployee: By = By.name("addEmployee");
        static newEmployee: By = By.name("employee11");
        static nameInput: By = By.name("nameEntry");
        static phoneInput: By = By.name("phoneEntry");
        static titleInput: By = By.name("titleEntry");


        constructor (driver:WebDriver) {
            this.driver = driver;
        };
        static async navigate() {
            await driver.get(this.url);
        };
  };


  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      });
      afterAll(async () => {
          await driver.quit()
      });
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header));
          await driver.findElement(emPage.addEmployee).click();
          await driver.findElement(emPage.newEmployee).click();
          await driver.findElement(emPage.nameInput).click();
          await driver.findElement(emPage.nameInput).clear();
          await driver.findElement(emPage.nameInput).sendKeys("Guy Smiley");
          await driver.findElement(emPage.phoneInput).click();
          await driver.findElement(emPage.phoneInput).clear();
          await driver.findElement(emPage.phoneInput).sendKeys("18004561234");
          await driver.findElement(emPage.titleInput).click();
          await driver.findElement(emPage.titleInput).clear();
          await driver.findElement(emPage.titleInput).sendKeys("CEO of Smiles");
  });
});
