## Unit Assignment: Student Store

Submitted by: **Mabel Inoa Mejia**

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES


- [x] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [ ] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [x] **Products Model**: Develop a model to represent individual items available in the store. 
  - [x] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [x] Implement methods for CRUD operations on products.
  - [x] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [ ]**Orders Model**: Develop a model to manage orders. 
  - [ ] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [x] Implement methods for creating, fetching, updating, and deleting orders.
  - [ ] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [ ] **Order Items Model**: Develop a model to represent the items within an order. 
  - [ ] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [ ] Implement methods for fetching and creating order items.
- [ ] **API Endpoints**
  - [ ] **Product Endpoints**:
    - [ ] `GET /products`: Fetch a list of all products.
    - [ ] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [ ] `POST /products`: Add a new product to the database.
    - [ ] `PUT /products/:id`: Update the details of an existing product.
    - [ ] `DELETE /products/:id`: Remove a product from the database.
  - [ ] **Order Endpoints**:
    - [ ] `GET /orders`: Fetch a list of all orders.
    - [ ] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [ ] `POST /orders`: Create a new order with order items.
    - [ ] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [ ] `DELETE /orders/:order_id`: Remove an order from the database.
- [ ] **Frontend Integration**
  - [ ] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [ ] **Added Endpoints**
  - [ ] Create an endpoint for fetching all orders in the database.
  - [ ] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] **Implement Your Own Frontend**
  - [ ] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Add your response here

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Add your response here

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.