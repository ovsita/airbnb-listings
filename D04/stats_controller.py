from flask import Blueprint, jsonify
from services import stats_service

api = Blueprint(
    name="stats_controller",
    import_name="stats_controller",
    url_prefix="/airbnb/api/v1/stats",
)


@api.route("/neighbourhood")
def stats_avg_price_neighbourhood():
    return jsonify(stats_service.avg_price_count_per_neighbourhood()), 200


@api.route("/apartment")
def type_apartment():
    return jsonify(stats_service.count_type_apartment()), 200


@api.route("/price")
def price():
    return jsonify(stats_service.hist_price_cat()), 200


@api.route("/bathrooms")
def bathrooms():
    return jsonify(stats_service.hist_bath()), 200


@api.route("/beds")
def bedrooms():
    return jsonify(stats_service.hist_beds()), 200


@api.route("/accommodates")
def accommodates():
    return jsonify(stats_service.hist_accommodates()), 200


@api.route("/host_is_superhost")
def host_is_superhost():
    return jsonify(stats_service.host_is_superhost()), 200
