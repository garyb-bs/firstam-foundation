import { expect } from 'chai';

class PropertyDetails {
    constructor() {
        
    }

    /**
     * Verify that the Share Options are displayed
     */
    async verifyShareOptions () {
        await this.shareIconSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.shareIconSelector.isDisplayed).to.be.true;
    }

    /**
     * Perform an advanced search
     */
    async advancedSearch () {
        await this.firstNameSelector.waitForDisplayed({ timeout: 30000 });
        await this.firstNameSelector.setValue("First");
        await this.lastNameSelector.waitForDisplayed({ timeout: 30000 });
        await this.lastNameSelector.setValue("Last");
        await this.apnSelector.waitForDisplayed({ timeout: 30000 });
        await this.apnSelector.setValue("APN0004");
        await this.ownerSelector.waitForDisplayed({ timeout: 30000 });
        await this.ownerSelector.setValue("Owner");

        await this.searchButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.searchButtonSelector.click();
    }

    /**
     * Enable the location services
     */
    async enableLocation () {
        
    }

    /**
     * Verify the map types
     */
    async verifyMapTypes () {

    }

    /**
     * Verify the current location of the logged in user
     */
    async verifyMyLocation () {

    }

    /**
     * Search the current area
     */
    async searchCurrentArea () {

    }

    /**
     * Download the PDF
     */
    async downloadPDF () {

    }

    /**
     * Preview the PDF
     */
    async previewPDF () {

    }

    /**
     * Share the PDF
     */
    async sharePDF () {

    }

    /**
     * Create a new farm
     */
    async createFarm () {

    }

    /**
     * Share a farm
     */
    async shareFarm () {

    }

    /**
     * Share a farm on the map
     */
    async shareFarmOnMap () {

    }

    /**
     * View the details of a property on the map
     */
    async viewPropertyDetailsOnMap () {

    }

    /**
     * View the charges
     */
    async viewCharges () {

    }

    /**
     * View the recently viewed items
     */
    async viewRecentlyViewed () {

    }

    // Various getter methods for all of the selectors that will be used in this Object
    get shareIconSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get firstNameSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get lastNameSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get apnSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get ownerSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get locationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get mapTypeSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get currentLocationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchAreaSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get pdfDownloadSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get pdfPreviewSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get pdfShareSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get createFarmSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get shareFarmSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get shareFarmOnMapSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get farmPinSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get chargeSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get recentlyViewedSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
}

export default new PropertyDetails;