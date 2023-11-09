import pandas as pd
import numpy as np
import joblib
from listings_base_logger import logger


def kitchen(values: list):
    if "kitchen" in values:
        return 1
    else:
        return 0


def breakfast(values: list):
    if "Breakfast" in values:
        return 1
    else:
        return 0


def nespresso(values: list):
    if "Nespresso machine" in values:
        return 1
    else:
        return 0


def tv(values: list):
    if "TV" in values:
        return 1
    else:
        return 0


def wifi(values: list):
    if "Wifi" in values:
        return 1
    else:
        return 0


def hot_water(values: list):
    if "hot_water" in values:
        return 1
    else:
        return 0


def boolean(value: str):
    if value == "t":
        return 1
    else:
        return 0


def validate(data: dict):
    # Validations
    required_sample_keys = {"host_is_superhost", "host_identity_verified",
                            "latitude", "bathrooms_text", "instant_bookable",
                            "amenities", "minimum_nights",
                            "maximum_nights", "number_of_reviews", "accommodates"}

    if not (all(key in data for key in required_sample_keys)):
        logger.error("Problem in given keys")
        return None

    sample_to_predict = {
        "host_is_superhost": str(data["host_is_superhost"]),
        "host_identity_verified": str(data["host_identity_verified"]),
        "latitude": float(data["latitude"]),
        "bathrooms_text": str(data["bathrooms_text"]),
        "instant_bookable": str(data["instant_bookable"]),
        "amenities": data['amenities'],
        "minimum_nights": int(data["minimum_nights"]),
        "maximum_nights": int(data["maximum_nights"]),
        "number_of_reviews": int(data["number_of_reviews"]),
        "accommodates": int(data["accommodates"])
    }
    logger.info(f"Sample to predict is {sample_to_predict}")

    if (type(sample_to_predict["host_is_superhost"]) != str or
            type(sample_to_predict['host_identity_verified']) != str or type(sample_to_predict['latitude']) != float or
            type(sample_to_predict["bathrooms_text"]) != str or
            type(sample_to_predict["instant_bookable"]) != str or
            type(sample_to_predict["amenities"]) != list or
            type(sample_to_predict["minimum_nights"]) != int or type(sample_to_predict["maximum_nights"]) != int or
            type(sample_to_predict["number_of_reviews"]) != int or type(sample_to_predict["accommodates"]) != int):
        logger.error("Problem in type checking")
        return None

    # Transformations

    new_sample = {
        "host_is_superhost": boolean(sample_to_predict["host_is_superhost"]),
        "host_identity_verified": boolean(sample_to_predict["host_identity_verified"]),
        "latitude": sample_to_predict["latitude"],
        "bathrooms": float(sample_to_predict["bathrooms_text"].split()[0]),
        "instant_bookable": boolean(sample_to_predict["instant_bookable"]),
        "kitchen": kitchen(sample_to_predict["amenities"]),
        "Breakfast": breakfast(sample_to_predict["amenities"]),
        "Nespresso machine": nespresso(sample_to_predict["amenities"]),
        "TV": tv(sample_to_predict["amenities"]),
        "Wifi": wifi(sample_to_predict["amenities"]),
        "hot_water": hot_water(sample_to_predict["amenities"]),
        "log_min_nights": np.log(sample_to_predict["minimum_nights"] + 0.5),
        "log_max_nights": np.log(sample_to_predict["maximum_nights"] + 0.5),
        "log_nreviews": np.log(sample_to_predict["number_of_reviews"] + 0.5),
        "log_accommo": np.log(sample_to_predict["accommodates"] + 0.5)
    }
    logger.info(f"New sample is {new_sample}")
    return new_sample


def predict(request: dict):

    try:
        loaded_model = joblib.load("finalized_model.sav")
        loaded_scaler = joblib.load("std_scaler.bin")
        data = pd.DataFrame([request])
        X_test_sc = loaded_scaler.transform(data)
        prediction = loaded_model.predict(X_test_sc)
        return {"prediction": {"price": prediction[0]}}
    except Exception as exception:
        logger.error(f"Could not make prediction {exception}")
        return None



