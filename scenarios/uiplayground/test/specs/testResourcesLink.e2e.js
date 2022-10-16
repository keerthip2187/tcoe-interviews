const { expect } = require('chai');
const HomePage = require('../pageobjects/home.page');
const ResourcesPage = require('../pageobjects/resources.page');

describe('Resources Link Section', () => {
    it('should navigate to Resources page and validate URL', async () => {
        await HomePage.open();

        await HomePage.resourcesLink.click();
        await expect(browser).toHaveUrl("http://uitestingplayground.com/resources");
    });

    it('should navigate to Resources page and validate page via H3 Header', async() => {
        await HomePage.open();

        await HomePage.resourcesLink.click();
        await expect(browser).toBeExisting(ResourcesPage.resourcesTitle);
    });

    it('should navigate to Home page and validate No Business Link exists', async() => {
        await HomePage.open();

        await expect(HomePage.navBar).not.toHaveLinkContaining("business");
    });

    it('should try to navigate to Business section and throw an error on browser', async () => {
        await HomePage.open();

        await HomePage.openBusinessLink();
        await expect(browser).toHaveUrl("http://uitestingplayground.com/resources");
        await expect(browser).toBeExisting("Cannot GET /business");
    });


});