import { expect } from 'chai';

class Notifications {
    constructor() {
        
    }

    async addToOrderNotification () {
        await this.addToOrderSelector.waitForDisplayed({ timeout: 30000 });
        await this.addToOrderSelector.click();

        await expect(await this.addToOrderNotificationSelector.isDisplayed()).to.be.true;
    }

    async requestWireInstructionsNotification () {
        await this.requestWireInstructionSelector.waitForDisplayed({ timeout: 30000 });
        await this.requestWireInstructionSelector.click();

        await expect(await this.requestWireInstructionNotificationSelector.isDisplayed()).to.be.true;
    }

    async verifyWireInstructionsNotification () {
        await this.verifyWireInstructionSelector.waitForDisplayed({ timeout: 30000 });
        await this.verifyWireInstructionSelector.click();

        await expect(await this.verifyWireInstructionNotificationSelector.isDisplayed()).to.be.true;
    }

    async sharedDocumentsNotification() {
        await this.sharedDocumentsSelector.waitForDisplayed({ timeout: 30000 });
        await this.sharedDocumentsSelector.click();

        await expect(await this.sharedDocumentsNotificationSelector.isDisplayed()).to.be.true;
    }

    get addToOrderSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get requestWireInstructionSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get verifyWireInstructionSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get sharedDocumentsSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get addToOrderNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get requestWireInstructionNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get verifyWireInstructionNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get sharedDocumentsNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
}

export default new Notifications;