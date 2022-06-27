import { expect } from "chai";

var numResults = 3;
class Orders {
    constructor() {
        
    }

    /**
     * Create a new order
     */
    async createNewOrder () {

    }

    /**
     * Add a document
     */
    async addDocument () {

    }

    /**
     * Share an Order
     */
    async shareOrder () {

    }

    /**
     * Share a Document
     */
    async shareDocument () {

    }

    /**
     * Click on the Orders tab
     */
    async clickOrdersTab () {
        await this.orderTabSelector.waitForDisplayed({ timeout: 30000 });
        await this.orderTabSelector.click();
    }

    /**
     * Open an Order
     */
    async openOrder () {
        await this.openOrderSelector.waitForDisplayed({ timeout: 30000 });
        await this.openOrderSelector.click();
    }

    /**
     * Verify the My Orders section
     */
    async verifyMyOrderSection () {
        await this.filterSelector.waitForDisplayed({ timeout: 30000 });
        await expect(numResults).to.equal(3);
    }

    /**
     * Search for an Order
     * @param searchText
     */
    async searchForOrder (searchText : string) {
        await this.searchOrderSelector.waitForDisplayed({ timeout: 30000 });
        await this.searchOrderSelector.setValue(searchText);

        await this.searchOrderButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.searchOrderButtonSelector.click();

        expect(this.searchResultsSelector.getText()).to.contain(searchText);
    }

    /**
     * Verify the Order details
     */
    async verifyOrderDetails () {
        await this.orderMapSelector.waitForDisplayed({ timeout: 30000 });
        await expect(this.orderMapSelector.isDisplayed()).to.be.true;

        await this.orderNumberSelector.waitForDisplayed({ timeout: 30000 });
        await expect(this.orderNumberSelector.isDisplayed()).to.be.true;

        await this.orderAccountManagerSelector.waitForDisplayed({ timeout: 30000 });
        await expect(this.orderAccountManagerSelector.isDisplayed()).to.be.true;

        await this.orderTitleOfficerSelector.waitForDisplayed({ timeout: 30000 });
        await expect(this.orderTitleOfficerSelector.isDisplayed()).to.be.true;

        await this.orderEscrowOfficerSelector.waitForDisplayed({ timeout: 30000 });
        await expect(this.orderEscrowOfficerSelector.isDisplayed()).to.be.true;
    }

    /**
     * Verify the order status
     * @param orderStatus
     */
    async verifyOrderStatus (orderStatus : string) {
        await this.orderMapSelector.waitForDisplayed({ timeout: 30000 });
        await expect(await this.orderMapSelector.getText()).to.equal(orderStatus);
    }

    /**
     * Verify that you can download a document
     */
    async documentDownload () {
        await this.documentFileSelector.waitForDisplayed({ timeout: 30000 });
        await this.documentFileSelector.click();
    }

    // Various getter methods for all of the selectors that will be used in this Object
    get orderTabSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get openOrderSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get filterSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchOrderSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchOrderButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchResultsSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get milestonesSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderStatusSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderMapSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderNumberSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderAccountManagerSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderTitleOfficerSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderTitleAssistantSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderEscrowOfficerSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get documentFileSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };

}

export default new Orders;