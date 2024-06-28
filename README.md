## Unit Assignment: Student Store

Submitted by: **Mabel Inoa Mejia**

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES


- [x] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [x] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [x] **Products Model**: Develop a model to represent individual items available in the store. 
  - [x] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [x] Implement methods for CRUD operations on products.
  - [x] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [x]**Orders Model**: Develop a model to manage orders. 
  - [x] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [x] Implement methods for creating, fetching, updating, and deleting orders.
  - [x] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [x] **Order Items Model**: Develop a model to represent the items within an order. 
  - [x] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [x] Implement methods for fetching and creating order items.
- [x] **API Endpoints**
  - [x] **Product Endpoints**:
    - [x] `GET /products`: Fetch a list of all products.
    - [x] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [x] `POST /products`: Add a new product to the database.
    - [x] `PUT /products/:id`: Update the details of an existing product.
    - [x] `DELETE /products/:id`: Remove a product from the database.
  - [x] **Order Endpoints**:
    - [x] `GET /orders`: Fetch a list of all orders.
    - [x] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [x] `POST /orders`: Create a new order with order items.
    - [x] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [x] `DELETE /orders/:order_id`: Remove an order from the database.
- [x] **Frontend Integration**
  - [x] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [x] **Added Endpoints**
  - [x] Create an endpoint for fetching all orders in the database.
  - [x] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] **Implement Your Own Frontend**
  - [ ] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video


<div>
    <a href="https://www.loom.com/share/0fe382c46dbf498592794a55cfeb74cc">
      <p>Student Store Part 1 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/0fe382c46dbf498592794a55cfeb74cc">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/0fe382c46dbf498592794a55cfeb74cc-with-play.gif">
    </a>
  </div>

  <div>
    <a href="https://www.loom.com/share/127fa7a3a2d643429b481e9d9e935bb6">
      <p>Student Store Part 2 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/127fa7a3a2d643429b481e9d9e935bb6">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/127fa7a3a2d643429b481e9d9e935bb6-with-play.gif">
    </a>
  </div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics that were discussed in the lab helped me get comfortable working with databases. However, I think that the labs did not go too much in depth about connecting the backend to the frontend and the issues that could potentially arrive. I felt unprepared when undergoing the backend and frontend connection as well as using items/objects from the backend in the frontend. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have tried to personalize the frontend to my style and added more features to the website to make it seem more like a store such as a past orders page, username and email validation, etc. Additionally, I would have made it so that when a user submits an order and clicks on the exit button, the sidebar would dissapear as well.  

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

My project demo went pretty well. I did not get as much time as I liked to prepare for it but I was able to improvise and it worked in my favor. I noticed that one pf my peers implemented a checkbox to accept the terms and agreements before submitting the order which I thought was pretty cool and something that I would have liked to implement as well. 

### Open-source libraries used

- https://www.prisma.io/docs
- https://www.w3schools.com/
- https://developer.mozilla.org/

### Shout out

Shout out to my instructors Devarsh, Keith, Alex, and Erika for helping me solve bugs and blockers along the way; their help was instrumental in my success. Additional thank you to my FTL peers specially (Kailey, Nathan, Chris, Lucky, etc) for helping each other out and beeing supportive.