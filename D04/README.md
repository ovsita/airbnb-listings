## API

### External libraries
We will be using Flask, flask_cors, pandas and numpy for this project.

In case you do not have them: 

```cmd
pip install Flask
pip install numpy
pip install pandas
pip install flask_cors
```

### Code Structure

#### Top level
- app.py: Applications entrypoint. Used to start the webserver. Here we register our blueprints.
- listings_base_logger.py: Configuration of the logger to be used across the application
- finalized_model.sav: The model (DecisionTree) to be used for the prediction of the price of a listing
- std_scaler.bin: The Standard Scaler to be used for the required transformations of the input sample.
- readme_images: PNG used in the MD you are reading now.

#### Controllers
One file per logical unit:
- models: Declares the models related endpoint. It performs the prediction of the price of a specific listing.
- ping: Typical ping endpoint.
- stats: Declares the endpoint where we can request the statistics. We have different endpoints, one for each type of statistic (apartment, price, bathrooms, etc.).

#### Repo
The data storage of the application. Should include the curated_listings.csv.

#### Services
The business logic of our app.
- stats: Functions that calculate several stats based on aggregations by utilizing the pandas and numpy lib.
- models: Functions that implement the logic for the prediction of the price of the requested sample. All validations and transformations are made there.

#### Local Run
In the top level of the directory of the app (Pfizer_API) fire up a terminal and execute:

```cmd
python3 app.py
```
Note that `python3` may not be needed in your setup, and you may need `python` or `python3.8` whatever you have in your 
operating system's PATH

For the GET request (stats) you can go to any browser and type the endpoint in URL.
E.g, `http://127.0.0.1:5000/airbnb/api/v1/stats/price`

For the other POST request regarding the prediction of the price you need to use an HTTP client (Postman for instance).

#### Postman Collection
You can import the collection (Airbnb.postman_collection.json)
directly in Postman where some sample RQs exist already.

![img.png](readme_images/postman.png)
