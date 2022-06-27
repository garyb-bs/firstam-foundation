import { expect } from 'chai';

class Documents {
    constructor() {
        
    }

    /**
     * List all documents
     */
    async listDocuments () {
        await this.documentListSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.documentListSelector.getSize).to.be.greaterThan(0);
    }

    /**
     * Verify the document icons image path
     * @param iconImagePath - the path to the image
     */
    async verifyDocumentIcon (iconImagePath : string) {
        await this.documentIconSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.documentIconSelector.getAttribute("path")).to.equal(iconImagePath);
    }

    /**
     * Verify the EP package
     */
    async verifyEpPackage () {
        await this.epPackageSelector.waitForDisplayed({ timeout: 30000 });
        
        expect(this.epPackageSelector.isDisplayed()).to.be.true;
    }

    // Various getter methods for all of the selectors that will be used in this Object
    get documentListSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get documentIconSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get epPackageSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    
}

export default new Documents;