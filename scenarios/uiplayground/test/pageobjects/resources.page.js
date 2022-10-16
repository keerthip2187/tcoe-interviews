
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResourcesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resourcesTitle () {
        return $('//h3[.="Resources"]');
    }
}

module.exports = new ResourcesPage();