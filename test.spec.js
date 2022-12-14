// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test', async function() {
    await driver.get("http://localhost:4200/pages/login")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.name("username")).sendKeys("0002")
    await driver.findElement(By.name("password")).sendKeys("01456852")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.id("Matricule")).click()
    await driver.findElement(By.id("Matricule")).sendKeys("1234")
    await driver.findElement(By.id("NumeroCIN")).click()
    await driver.findElement(By.id("NumeroCIN")).sendKeys("07441225")
    await driver.findElement(By.id("Poste")).click()
    await driver.findElement(By.id("Poste")).sendKeys("DG")
    await driver.findElement(By.id("name")).click()
    await driver.findElement(By.id("name")).sendKeys("dridi")
    await driver.findElement(By.id("Prenom")).click()
    await driver.findElement(By.id("Prenom")).sendKeys("rami")
    await driver.findElement(By.css("#DateEmbauche .mydpicon")).click()
    await driver.findElement(By.css("td:nth-child(1) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("tr:nth-child(2) > .daycell:nth-child(5)")).click()
    await driver.findElement(By.name("TaillePull")).click()
    {
      const dropdown = await driver.findElement(By.name("TaillePull"))
      await dropdown.findElement(By.xpath("//option[. = 'S']")).click()
    }
    await driver.findElement(By.name("SituationFamiliale")).click()
    {
      const dropdown = await driver.findElement(By.name("SituationFamiliale"))
      await dropdown.findElement(By.xpath("//option[. = 'Mari??(e)']")).click()
    }
    await driver.findElement(By.name("NomConjoint")).click()
    await driver.findElement(By.name("NomConjoint")).sendKeys("Dridi")
    await driver.findElement(By.name("PrenomConjoint")).click()
    await driver.findElement(By.name("PrenomConjoint")).sendKeys("Rania")
    await driver.findElement(By.name("NumeroTelephoneConjoint")).click()
    await driver.findElement(By.name("NumeroTelephoneConjoint")).sendKeys("28456325")
    await driver.findElement(By.css(".btnpicker:nth-child(1) > .mydpicon")).click()
    {
      const element = await driver.findElement(By.css(".btnpicker:nth-child(1) > .mydpicon"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    {
      const element = await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    {
      const element = await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("td:nth-child(3) .icon-mydpleft")).click()
    await driver.findElement(By.css("tr:nth-child(2) > .daycell:nth-child(5) > .datevalue")).click()
    await driver.findElement(By.id("nbrenfants")).click()
    await driver.findElement(By.id("nbrenfants")).sendKeys("1")
    await driver.findElement(By.id("procheOui")).click()
    await driver.findElement(By.name("NombreProches")).click()
    await driver.findElement(By.name("NombreProches")).sendKeys("1")
    await driver.findElement(By.name("Permis")).click()
    {
      const dropdown = await driver.findElement(By.name("Permis"))
      await dropdown.findElement(By.xpath("//option[. = 'Permis C']")).click()
    }
    await driver.findElement(By.css(".card-box:nth-child(5) > .row:nth-child(2) > .col-md-1:nth-child(2) label")).click()
    await driver.findElement(By.name("PasseportSanitaire")).click()
    await driver.findElement(By.name("AntecedentMaladie")).click()
    await driver.findElement(By.name("TypeMaladie")).click()
    {
      const dropdown = await driver.findElement(By.name("TypeMaladie"))
      await dropdown.findElement(By.xpath("//option[. = 'Maladie chronique']")).click()
    }
    await driver.findElement(By.css(".card-box:nth-child(6) #procheNon")).click()
    await driver.findElement(By.name("NiveauEtude")).click()
    {
      const dropdown = await driver.findElement(By.name("NiveauEtude"))
      await dropdown.findElement(By.xpath("//option[. = 'Bac+5']")).click()
    }
    await driver.findElement(By.id("valider")).click()
    await driver.findElement(By.css(".img-circle")).click()
    await driver.findElement(By.linkText("Logout")).click()
    await driver.findElement(By.name("username")).sendKeys("0002")
    await driver.findElement(By.name("password")).sendKeys("01456852")
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("0001")
    await driver.findElement(By.name("password")).sendKeys("01123652")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.css("tr:nth-child(8) #checkAll")).click()
    await driver.findElement(By.id("btvaide")).click()
  })
})
