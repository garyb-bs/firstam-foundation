import { expect } from 'chai';

class AccountDetails {
    constructor() {
        
    }

    /**
     * Click on the Profile
     */
    async clickProfile () {
        this.profileSelector.waitForDisplayed({ timeout: 30000 });
        this.profileSelector.click();
    }

    /**
     * Click on the Notification Preferences
     * @param selector 
     */
    async clickNotificationPreferences (selector : WebdriverIO.Element) {
        await this.notificationPrefsSelector.waitForDisplayed({ timeout: 30000 });
        await this.notificationPrefsSelector.click();

        await selector.waitForDisplayed({ timeout: 30000 });
        await selector.click();
        expect (selector.getAttribute('checked')).to.equal('false');
        await selector.click();
        expect (selector.getAttribute('checked')).to.equal('true');
    }

    /**
     * Click the Terms of Use
     */
    async clickTermsOfUse () {
        this.termsOfUseSelector.waitForDisplayed({ timeout: 30000 });
        this.termsOfUseSelector.click();
    }

    /**
     * Click on the Privacy policy
     */
    async clickPrivacyPolicy () {
        this.privacyPolicySelector.waitForDisplayed({ timeout: 30000 });
        this.privacyPolicySelector.click();
    }

    /**
     * Click on the Help / Options menu
     * @param selector 
     */
    async clickHelpOptions (selector : WebdriverIO.Element) {
        this.helpSelector.waitForDisplayed({ timeout: 30000 });
        this.helpSelector.click();

        selector.waitForDisplayed({ timeout: 30000 });
        selector.click();
    }

    // Various getter methods for all of the selectors that will be used in this Object
    get profileSelector () { return $(`~Search Wikipedia`) };
    get notificationPrefsSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get orderUpdatesNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get wireUpdatesNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get documentNotificationSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get termsOfUseSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get privacyPolicySelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get helpSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get callHelpSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get emailHelpSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };

}

export default new AccountDetails;