import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="main">
        <div>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a></div>
        <div ><a href="#" className="main2">CONTACT</a><br/>
        <a href="#" className="main4">RETURN HOME Now</a>
        <ul className="main3">
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>RESERVATION</li>
          <li>PRIVACY POLICY</li>
          <li>TERMS & CONDITION</li>
        </ul>
        </div>
        <div className="main1">
         <u> @ 2020 Copyright:
          <br/>
          MDBootstrap.com
          </u>
        </div>
      </div>
    </>
  );
};
export default Footer;
