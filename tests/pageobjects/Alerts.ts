import { expect } from 'chai';

class PropertyDetails {
    constructor() {
        
    }

    async verifyShareOptions () {
        await this.shareIconSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.shareIconSelector.isDisplayed).to.be.true;
    }

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

    async enableLocation () {
        
    }

    async verifyMapTypes () {

    }

    async verifyMyLocation () {

    }

    async searchCurrentArea () {

    }

    async downloadPDF () {

    }

    async previewPDF () {

    }

    async sharePDF () {

    }

    async createFarm () {

    }

    async shareFarm () {

    }

    async shareFarmOnMap () {

    }

    async viewPropertyDetailsOnMap () {

    }

    async viewCharges () {

    }

    async viewRecentlyViewed () {

    }

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