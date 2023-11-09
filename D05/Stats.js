import { useState, useEffect} from "react";
import { Typography, Divider, Row, Col, Spin } from "antd";
import {
  ResponsiveContainer,
  /*LineChart,*/
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  /*Treemap,*/
  ComposedChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getStats } from "../api/api";
import { apart } from "../api/api";
import {neighbourhood} from "../api/api";
import {superhost} from "../api/api";
import {accommodates} from "../api/api";

const { Title } = Typography;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Stats = () => {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    getStats().then((data) => {
      console.log(data);
      setStatsData(data);
    });
  }, []);

  return (
    <div>
      <Title>Descriptive Statistics for the listings in Athens</Title>
      <Divider />
      {statsData ? (
        <>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{width:"100%"}}>
              <div className="chart-container">
                <Title level={4}>Bar Chart: Number of lisitings per price range</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={statsData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}>
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="price_range" />
                      <YAxis/>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Number of listings" fill= "#FF7F50" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>   
  );
};

const Stats1 = () => {
  const [stats1Data, setStats1Data] = useState([]);

  useEffect(() => {
    apart().then((data) => {
      console.log(data);
      setStats1Data(data);
    });
  }, []);


  return (
    <div>
      <Divider />
      {stats1Data ? (
        <>
        <Row className="row" gutter={[24, 24]}>
            <Col sm={{ span: 24 }} lg={{ span: 12 }}>
              <div className="chart-container">
                <Title level={4}>Pie Chart: Number of listings per room type</Title>
                <div className="chart-inner">
                <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="count" data={stats1Data} fill="#8884d8" label>
            <Legend layout="vetical" verticalAlign="middle" align="right" />
            {stats1Data.map((entry, index) => (
                          <Cell
                            key={`cell-${entry.room_type}`}
                            fill={COLORS[index % COLORS.length]}
                            />
            ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
                </div>
              </div>
            </Col>
            <Col sm={{ span: 24 }} lg={{ span: 12 }}>
              <div className="chart-container">
                <Title level={4}>Room types</Title>
            <h3 style={{color:"#0088FE"}}> Entire home/apartment </h3>
                <h3 style={{color:"#00C49F",position:"top",left:50}}> Hotel room </h3>
                <h3 style={{color:"#FFBB28"}}> Private room </h3>
                <h3 style={{color:"#FF8042"}}> Shared room </h3>
                </div>
                </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

const Stats2 = () => {
  const [stats2Data, setStats2Data] = useState([]);

  useEffect(() => {
    neighbourhood().then((data) => {
      console.log(data);
      setStats2Data(data);
    });
  }, []);


  return (
    <div>
      <Divider />
      {stats2Data ? (
        <>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{width:"100%", height:"100%"}}>
              <div className="chart-container">
                <Title level={4}>Bar Chart: Number of lisitings per neighbourhood</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                    style={{width:"100%", height:"100%"}}
                      data={stats2Data}
                      margin={{
                        top: 5,
                        right: 15,
                        left: 15,
                        bottom: 120,
                      }}>
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="neighbourhood" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start"  interval={0} angle= "-40" stroke="black" 
                      tick={{fontSize: 9}} style={{fontFamily:"bold",color:"black"}}></XAxis> 
                      <YAxis/>
                      <Tooltip />
                      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />                      
                      <Bar dataKey="neighbourhood_count" name="Number of listings" fill= "#68C29B"/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{width:"100%", height:"100%"}}>
              <div className="chart-container">
                <Title level={4}>Bar Chart: Median price per neighbourhood</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                    style={{width:"100%", height:"100%"}}
                      data={stats2Data}
                      margin={{
                        top: 5,
                        right: 15,
                        left: 15,
                        bottom: 120,
                      }}>
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="neighbourhood" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start"  interval={0} angle= "-40" stroke="black" 
                      tick={{fontSize: 9}} style={{fontFamily:"bold",color:"black"}}></XAxis> 
                      <YAxis unit="$"/>
                      <Tooltip />
                      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />                      
                      <Bar dataKey="median_price" name="Median price" unit="$" fill= "#66664B"/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{width:"100%", height:"100%"}}>
              <div className="chart-container">
                <Title level={4}>Composed Chart: Median price and number of listings per neighbourhood</Title>
                <div className="chart-inner">
                <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          style={{width:"100%", height:"100%"}}
          data={stats2Data}
          margin={{
            top: 1,
            right: 15,
            bottom: 80,
            left: 15,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="neighbourhood" scale="band" textAnchor= "end" sclaeToFit="true" verticalAnchor= "start"  interval={0} angle= "-40" stroke="black" 
                      tick={{fontSize: 8}} style={{fontFamily:"bold",color:"black"}}></XAxis> 
          <YAxis  />
          <Tooltip/>
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />  
          <Bar dataKey="neighbourhood_count" name ="Number of listings" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="median_price" name="Median price" unit="$" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>   
  );

};

const Stats3 = () => {
  const [stats3Data, setStats3Data] = useState([]);

  useEffect(() => {
    superhost().then((data) => {
      console.log(data);
      setStats3Data(data);
    });
  }, []);

  return (
    <div>
      <Divider />
      {stats3Data ? (
        <>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{width:"90%"}}>
              <div className="chart-container">
                <Title level={4}>Bar Chart: Number of superhosts</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={stats3Data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}>
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="host_is_superhost" />
                      <YAxis/>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Number of hosts" fill= "#3EC2B6" barSize={140}/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>   
  );
}

const Stats4 = () =>{
  const [stats4Data, setStats4Data] = useState([]);

  useEffect(() => {
    accommodates().then((data) => {
      console.log(data);
      setStats4Data(data);
    });
  }, []);

  return (
    <div>
      <Divider />
      {stats4Data ? (
        <>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{width:"100%"}}>
              <div className="chart-container">
                <Title level={4}>Bar Chart: Number of accommodates</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <BarChart
                      data={stats4Data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}>
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="accommodates_range" />
                      <YAxis/>
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="count" fill= "#7B6B80" barSize={120} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>   
  );
}
export {Stats,Stats1,Stats2,Stats3,Stats4} 