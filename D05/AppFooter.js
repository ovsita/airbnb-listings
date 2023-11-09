import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => (
  <Footer className="align-center">
    <h4>A team work by Charis Bligoridis, Maria Ovsepian, Nick Gkizelis and Stavroula Mantziou</h4>
    <b>Powered by CodeHub</b>
    <a href="https://www.pfizer.gr/">
    <img style={{width:210,height:150,position: "absolute",right:50}} src = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pfizer_%282021%29.png" alt = "Pfizer logo"/>
    </a>
    <a href="https://codehub.gr/">
    <img style={{width:250,height:130,position: "absolute",left: 50}} src = "https://www.codehub.gr/wp-content/uploads/2018/01/cropped-CodeHub-logo_320x132.png" alt = "CodeHub logo"/>
    </a>
    <a href="https://centerfordigitalinnovation.pfizer.com/">
    <p style={{position:"absolute",left:200,right:200,fontSize:20}}><b> Central for Digital Innovation (CDI) in Thessaloniki </b></p>
    </a>
  </Footer>
);

export default AppFooter;
