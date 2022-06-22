import Login from '../../pageobjects/Login';
import Orders from '../../pageobjects/Orders';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let searchText = "Order Number";

describe('Login as customer and check Order Search functionality', () => {
  it('logs in successfully as a customer', async () => {
    Login.loginExternal(username, password);
  });

  it('should click the Orders tab', async () => {
    Orders.clickOrdersTab();
  });

  it('should search for an Order', async () => {
    Orders.searchForOrder(searchText);
  });

  it('should verify the order details for an Order', async () => {
    Orders.verifyOrderDetails();
  });

  it('should download a document from an Order', async () => {
    Orders.documentDownload();
  })
});
