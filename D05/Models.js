import {useState } from "react";
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  /*Radio,
  Switch,*/
  Button,
  Divider,
} from "antd";
import { makeModelsPost } from "../api/api";
/*import axios from "axios";*/

const { Title } = Typography;
const { Option } = Select;

const formValuesInitialState = {
  latitude: "",
  bathrooms_text:"",
  minimum_nights:"",
  maximum_nights:"",
  number_of_reviews: "",
  accommodates:"",
  host_is_superhost: "",
  host_identity_verified: "",
  instant_bookable: "",
  amenities: [],
  /*radioField: "",
  switchField: false,*/
};

const Models = () => {
  const [formValues, setFormValues] = useState(formValuesInitialState);
  const [models, setModels] = useState(null);
  const isdisabled = !Boolean(formValues.host_is_superhost) || !Boolean(formValues.instant_bookable) || !Boolean(formValues.latitude) || !Boolean(formValues.bathrooms_text)|| !Boolean(formValues.minimum_nights) || !Boolean(formValues.maximum_nights) || !Boolean(formValues.number_of_reviews) || !Boolean(formValues.accommodates) || !Boolean(formValues.host_identity_verified) ||!Boolean(formValues.host_identity_verified) || !Boolean(formValues.amenities)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSelectChange = (value) => {
    setFormValues({ ...formValues, host_is_superhost: value });
  };
  const handleSelectChange1 = (value) => {
    setFormValues({ ...formValues, host_identity_verified: value });
  };
  const handleSelectChange3 = (value) => {
    setFormValues({ ...formValues, instant_bookable: value });
  };
  const handleMultipleSelectChange = (value) => {
    setFormValues({ ...formValues, amenities: value });
  };
  /*const handleSwitchChange = (value) => {
    setFormValues({ ...formValues, switchField: value });
  };*/
  const resetForm = () => {
    setFormValues(formValuesInitialState);
    setModels(null)
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    // Make the POST HTTP request here
    // Sample POST file api/api.js
    makeModelsPost(formValues).then((responseData) => {
      setModels(responseData);
    });
  };

  return (
    
    <Card>
      <Title>Predict the price of a listing in Athens</Title>
      <form>
      <div className="all14">
      <div className="first7">
        <Form.Item  style={{width:300,fontSize:15}}>
        <font color="white"> <label>Host is superhost:</label> </font> <br></br>
          <Select
            name="host_is_superhost"
            defaultValue=""
            value={formValues.host_is_superhost}
            onChange={handleSelectChange}>
            <Option value="t">True</Option>
            <Option value="f">False</Option>
          </Select>
        </Form.Item>
        <Form.Item  style={{width:300,fontSize:15}}>
        <font color="white"> <label>Host identity verified:</label> </font> <br></br> 
          <Select
            name="host_identity_verified"
            defaultValue=""
            value={formValues.host_identity_verified}
            onChange={handleSelectChange1}>
            <Option value="t">True</Option>
            <Option value="f">False</Option>
          </Select>
        </Form.Item>
        <Form.Item style={{width:300,fontSize:15}} >
        <font color="white"> <label>Latitude:</label> </font><br></br>
          <Input
            type="number"
            min="37.8"
            max="38.3"
            step="0.000001"
            placeholder="Athens latitude (between 37.8 and 38.3)"
            name="latitude"
            value={formValues.latitude}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item  style={{width:300,fontSize:15}}>
        <font color="white"> <label>Bathrooms:</label> </font> <br></br>
          <Input
            placeholder="Number of bathrooms"
            name="bathrooms_text"
            value={formValues.bathrooms_text}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item style={{width:300,fontSize:15}} >
        <font color="white"><label>Instant bookable:</label> </font><br></br>
          <Select 
            name="instant_bookable"
            defaultValue=""
            value={formValues.instant_bookable}
            onChange={handleSelectChange3}>
            <option value="" disabled selected hidden><font color="white">Choose True or False </font></option>
            <Option value="t">True</Option>
            <Option value="f">False</Option>
          </Select>
        </Form.Item>
        </div>
        <div className="last7">
        <Form.Item style={{width:300,fontSize:15}} >
        <font color="white"> <label>Amenities:</label> </font><br></br>
          <Select
            name="amenities"
            mode="multiple"
            allowClear
            value={formValues.amenities}
            onChange={handleMultipleSelectChange}>
            <Option value="Breakfast">Breakfast</Option>
            <Option value="Nespresso machine">Nespresso machine</Option>
            <Option value="TV">TV</Option>
            <Option value="kitchen">Kitchen</Option>
            <Option value="Wifi">Wifi</Option>
            <Option value="">Hot water</Option>
          </Select>
        </Form.Item>
        <Form.Item  style={{width:300,fontSize:15}}>
        <font color="white"> <label>Minimum nights:</label> </font> <br></br>
          <Input
            type="number"
            min="1"
            placeholder="Write a natural number (e.g. 1)"
            name="minimum_nights"
            value={formValues.minimum_nights}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item  style={{width:300,fontSize:15}}>
        <font color="white"> <label>Maximum nights:</label> </font><br></br>
          <Input
            type="number"
            min={formValues.minimum_nights}
            placeholder="Write a natural number (e.g. 1)"
            name="maximum_nights"
            value={formValues.maximum_nights}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item  style={{width:300,fontSize:15}} >
        <font color="white"><label>Number of reviews:</label> </font><br></br>
          <Input
            type="number"
            min="0"
            placeholder="Write a natural number (e.g. 1)"
            name="number_of_reviews"
            value={formValues.number_of_reviews}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item style={{width:300, fontSize:15}}>
        <font color="white"><label>Accommodates:</label> </font><br></br>
          <Input
            type="number"
            min="1"
            placeholder="Write a natural number (e.g. 1)"
            name="accommodates"
            value={formValues.accommodates}
            onChange={handleInputChange}
          />
        </Form.Item>
      </div>
      </div>
      
          <div className="buttons">
        <Form.Item>
        <Button className="button-33" role="button" type="secondary" onClick={resetForm} style={{width:90,height:30,fontSize:14}}>
            Reset 
          </Button>
          &nbsp;
          <Button className="button-27" role="button"type="primary" onClick={handleFormSubmit} style={{width:100,height:40,fontSize:15}}
          disabled={isdisabled}>
            Predict 
          </Button>
        </Form.Item>
        </div>
      </form>

      <Divider />
      {models && (
        <div className ="output">
          <Title level={3}>Prediction</Title>
          <h2>
          {JSON.stringify(models,null,2).replace(":{","").replace("}","").replace("{","").replace("}","").replace(' " ',"").replace(
            ' "',"").replace(' "" ',"").replace("prediction","").replace(' ": ','').replace("{","").replace('"',"").replace(
              "price","").replace('":',"")}$ per night</h2>
              <div className="airbnb">
              <img  style={{width:250, height:100}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="airbnb logo"/>
                </div>
        </div> 
      )}
    </Card>
  );
};

export default Models;
