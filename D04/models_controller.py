from flask import Blueprint, jsonify, request, abort
from services import models_service
from listings_base_logger import logger

api = Blueprint(
    name="models_controller",
    import_name="models_controller",
    url_prefix="/airbnb/api/v1/models",
)


@api.route("/", methods=['POST'])
def models():
    rq = request.get_json()
    logger.info(f"Requested {rq}")
    validation = models_service.validate(rq)
    if not validation:
        logger.error(f"Could not make prediction for {rq} from {request.remote_addr}")
        abort(400)
    else:
        result = models_service.predict(validation)
        if result is None:
            logger.error("Server error in prediction")
            abort(500)
        else:
            logger.info(f"Prediction for {rq} made")
    return jsonify(result), 200
