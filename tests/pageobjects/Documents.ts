import { expect } from 'chai';

class Documents {
    constructor() {
        
    }

    async listDocuments () {
        await this.documentListSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.documentListSelector.getSize).to.be.greaterThan(0);
    }

    async verifyDocumentIcon (iconImagePath : string) {
        await this.documentIconSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.documentIconSelector.getAttribute("path")).to.equal(iconImagePath);
    }

    async verifyEpPackage () {
        await this.epPackageSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.epPackageSelector.isDisplayed()).to.be.true;
    }

    get documentListSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get documentIconSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get epPackageSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    
}

export default new Documents;