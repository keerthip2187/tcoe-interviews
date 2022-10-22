

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get resourcesLink () {
        return $('//a[.="Resources"]');
    }

    get navBar () {
        return $('//div[@id="navbarSupportedContent"]');
    }

    openBusinessLink () {
        return super.open('business');
    }
   /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('home');
    }
}

module.exports = new HomePage();
