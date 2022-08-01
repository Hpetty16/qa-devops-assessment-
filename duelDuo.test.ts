
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Draw button displays choices section`, async () => {
    await driver.findElement(By.id(`draw`)).click()
    const displayChoicesSection = await driver.findElement(By.id(`choices`))
    const displayed = await displayChoicesSection.isDisplayed()
    expect(displayed).toBe(true)
})

test('characters appear when draw is clicked', async () => {
    await driver.findElement(By.id('draw')).click()
    const displayCharacters= await driver.findElement(By.id('choices')).getText()
    expect(displayCharacters.length).toBeGreaterThan(0)
})