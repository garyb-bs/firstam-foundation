import Login from '../../pageobjects/Login';
import Orders from '../../pageobjects/Orders';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';

describe('Login as customer and check Orders tab', () => {
  it('logs in successfully as a customer', async () => {
    Login.loginExternal(username, password);
  });

  it('should have the open order tab displayed', async () => {
    Orders.clickOrdersTab();
    Orders.openOrder();
  });

  it('should have 3 recently viewed orders', async () => {
    Orders.verifyMyOrderSection();
  });
});
