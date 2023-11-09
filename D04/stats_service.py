import pandas as pd
import numpy as np
import os


def avg_price_count_per_neighbourhood():
    """
    Calculates the average price per neighbourhood and the count of occurrences of each neighbourhood

    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")

    stats_df = round(df.groupby('neighbourhood_cleansed').agg({"neighbourhood_cleansed": ["count"],
                                                               "price": ['median']}), 2)

    s = stats_df.to_dict("index")
    neigh_stats = []
    for k, v in s.items():
        neigh = {"neighbourhood": k, "neighbourhood_count": 0, "median_price": 0}

        neigh["neighbourhood_count"] = v[('neighbourhood_cleansed', 'count')]
        neigh["median_price"] = v[('price', 'median')]
        neigh_stats.append(neigh)

    return neigh_stats


def count_type_apartment():
    """
    Calculates the count of occurrences of each room_type

    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")

    df["room_type"] = df["room_type"].replace("Entire home/apt", "Entire home/apartment")

    stats_df = round(df.groupby('room_type').agg({"room_type": ["count"]}), 2)
    s = stats_df.to_dict("index")
    room_stats = []
    for k, v in s.items():
        room = {"room_type": k, "count": 0}

        room["count"] = v[('room_type', 'count')]
        room_stats.append(room)

    return room_stats


def hist_price_cat():
    """
    Calculates the price ranges and categorizing into bins

    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")
    df['price_cat'] = pd.cut(df["price"],
                             bins=[0., 25., 50., 100., 150., 200., np.inf],
                             labels=["0-25", "25-50", "50-100", "100-150", "150-200", "200-max"])

    stats_df = df.groupby("price_cat").agg({"price_cat": ["count"]})
    s = stats_df.to_dict("index")
    price_stats = []
    for k, v in s.items():
        price = {"price_range": k, "count": 0}

        price["count"] = v[('price_cat', 'count')]
        price_stats.append(price)

    return price_stats


def hist_bath():
    """
    Calculates the bathrooms ranges and categorizing into bins

    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")
    df['bath_cat'] = pd.cut(df["bathrooms"],
                            bins=[1., 2., 3., 4., 5., 6., np.inf],
                            labels=["1-2", "2-3", "3-4", "4-5", "5-6", "6-max"])

    stats_df = df.groupby("bath_cat").agg({"bath_cat": ["count"]})
    s = stats_df.to_dict("index")
    bath_stats = []
    for k, v in s.items():
        bathrooms = {"bathrooms_range": k, "count": 0}

        bathrooms["count"] = v[('bath_cat', 'count')]
        bath_stats.append(bathrooms)

    return bath_stats


def hist_beds():
    """
    Calculates the ranges of beds and categorizing into bins
    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")
    df['beds_cat'] = pd.cut(df["beds"],
                            bins=[1., 2., 3., 4., 5., 6., np.inf],
                            labels=["1-2", "2-3", "3-4", "4-5", "5-6", "6-max"])

    stats_df = df.groupby("beds_cat").agg({"beds_cat": ["count"]})
    s = stats_df.to_dict("index")
    beds_stats = []
    for k, v in s.items():
        beds = {"beds_range": k, "count": 0}

        beds["count"] = v[('beds_cat', 'count')]
        beds_stats.append(beds)

    return beds_stats


def hist_accommodates():
    """
    Calculates the accommodates and categorizing into bins
    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")
    df['accommodates_cat'] = pd.cut(df["accommodates"],
                                    bins=[1., 2., 3., 4., 5., 6., np.inf],
                                    labels=["1-2", "2-3", "3-4", "4-5", "5-6", "6-max"])

    stats_df = df.groupby("accommodates_cat").agg({"accommodates_cat": ["count"]})
    s = stats_df.to_dict("index")
    accommodates_stats = []
    for k, v in s.items():
        accommodates = {"accommodates_range": k, "count": 0}

        accommodates["count"] = v[('accommodates_cat', 'count')]
        accommodates_stats.append(accommodates)

    return accommodates_stats


def host_is_superhost():
    """
    Calculates the count of hosts that are superhost

    :return: List of dicts to be used to the exposed response
    """
    # Because we are in Windows environment
    df = pd.read_csv(os.getcwd() + r"\repo\curated_listings.csv")
    df["host_is_superhost"] = df["host_is_superhost"].replace("t", "True")
    df["host_is_superhost"] = df["host_is_superhost"].replace("f", "False")
    stats_df = round(df.groupby('host_is_superhost').agg({"host_is_superhost": ["count"]}), 2)
    s = stats_df.to_dict("index")
    host_is_superhost_stats = []
    for k, v in s.items():
        host_is_superhost = {"host_is_superhost": k, "count": 0}

        host_is_superhost["count"] = v[('host_is_superhost', 'count')]
        host_is_superhost_stats.append(host_is_superhost)

    return host_is_superhost_stats
