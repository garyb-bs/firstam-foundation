import Login from '../../pageobjects/Login';
import Search from '../../pageobjects/Search';

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {

    await Search.clickSearchBar();
    
    await Search.performSearch("BrowserStack");
    
    
  });
});
