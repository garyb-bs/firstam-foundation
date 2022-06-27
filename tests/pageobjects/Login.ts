class Login {
    constructor() {
        
    }

    /**
     * Perform a login as an Internal employee
     * @param username 
     * @param password 
     */
    async loginInternal (username : string, password : string) {
        await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
        await this.usernameSelector.setValue(username);

        await this.passwordSelector.waitForDisplayed({ timeout: 30000 });
        await this.passwordSelector.setValue(password);

        await this.submitButtonSelector.click();        
    }
    
    /**
     * Perform a login as a customer
     * @param username 
     * @param password 
     */
    async loginExternal (username : string, password : string) {
        await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
        await this.usernameSelector.setValue(username);

        await this.passwordSelector.waitForDisplayed({ timeout: 30000 });
        await this.passwordSelector.setValue(password);

        await this.submitButtonSelector.click();
    }

    /**
     * Sign out of the account.
     */
    async signOut () {
        await this.signOutSelector.waitForDisplayed({ timeout: 30000 });
        await this.signOutSelector.click();
    }

    // Various getter methods for all of the selectors that will be used in this Object
    get usernameSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get passwordSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get submitButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get signOutSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
}

export default new Login;