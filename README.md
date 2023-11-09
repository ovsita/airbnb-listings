# I.  Introduction:

Airbnb is a home-sharing platform that allows home-owners and renters ('hosts') to put their properties ('listings') online, so that guests can pay to stay in them. Hosts are expected to set their own prices for their listings. Although Airbnb and other sites provide some general guidance, there are currently no free services which help hosts price their properties. Paid third party pricing software is available, but generally you are required to put in your own expected average price ('base price'), and the algorithm will vary the daily price around that base price on each day depending on day of the week, seasonality, how far away the date is, and other factors.

Airbnb pricing is important to get right, particularly in big cities like Athens where there is lots of competition and even small differences in prices can make the difference between optimum occupancy and high earnings, or being priced out of the market. It is also a difficult thing to do correctly, in order to balance the price with occupancy (which varies inversely with price) in order to maximise revenue.


#### Project Overview:
The main objective of this project is to make a model that predicts the price of a listing, given its attributes. Several subtasks can be spawned from this objective. The main categories are:

	● Explore the given data. See what they describe and gather valuable insights about their properties.
	
	● Preprocess the data so that they can be used for predicting the listing price.
	
	● Model the data.

    ● Create an API that provides access to the Airbnb data. The goal of this task is to expose the processed data and the created models from the two previous tasks to the world via a RESTful API.

    ● Present above to the web. The goal of this task is to consume the RESTful API - developed in the previous step - and present it in a web application. 
	
#### Dataset:
The dataset is provided in a file called listings.csv and contains nominal information about the listings, like its neighbourhood, its description, amenities, bedrooms, bathrooms and much more.

# II. Software Requirements:
This project requires **Python 3.7** (or latest version) and the following Python libraries installed:
- [Python 3.7](https://www.python.org/downloads/) 
- [NumPy](http://www.numpy.org/), [Pandas](https://pandas.pydata.org/) , [matplotlib*](http://matplotlib.org/)
- [Scikit-learn](http://scikit-learn.org/stable/)
- [Seaborn](https://seaborn.pydata.org/)
- [XGBoost](https://xgboost.readthedocs.io/en/stable/)
- [Shap](https://shap.readthedocs.io/en/latest/index.html)
- [Datetime](https://docs.python.org/3/library/datetime.html), [Imageio](https://imageio.readthedocs.io/en/stable/), [pprint](https://docs.python.org/3/library/pprint.html), [Wordcloud](https://amueller.github.io/word_cloud/)

* matplotlib 3.4 >= version is needed

### Installation
1. Clone this repository.
2. Install ```Python 3.7``` or latest version.
3. Ensure all libraries are installed using ```pip install <library> --user```

# III. Project Architecture:
This repository [pfizer-dsmasterclass-team2](https://github.com/codehub-learn/pfizer-dsmasterclass-2022-team2) includes 5 deliverables, this readme file and a license:

### III-1. Deliverables:

    - Deliverable01.ipynb: A notebook which contains the Exploratory Data Analysis (EDA) we performed.

	- Deliverable02.ipynb: A notebook which contains the preprocessing steps.
	
	- Deliverable03.ipynb: A notebook which contains the steps we followed to build the model.

	- Deliverable04: The code for implementing the API described and instructions on how the code will run.
	
	- Deliverable05: The code for implementing the described web app and instructions on how the code will run.

## Authors

* **ChBligo**,**ovsita**,**NickGiz**,**smantziou** - *Initial work* - [ChBligo](https://github.com/ChBligo) -[ovsita](https://github.com/ovsita) -[NickGiz](https://github.com/NickGiz) -[smantziou](https://github.com/smantziou) 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
  
	
