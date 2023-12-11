import React from "react";
import '../Footer/footer.css'
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-section-div">
        <div className="footer-menu">
              <Link to="/">
                <div>ABOUT</div>
              </Link>
              <Link to="/kyf">
                <div>KNOW ABOUT YOUR FRUIT</div>
              </Link>
              <a href="https://www.google.com/maps/search/grocery+store+near+me/" target="_blank">
              <div>SPOT YOUR GROCERY STORE<FiExternalLink/></div>
              </a>
              <Link to="/contact">
              <div>CONTACT US  </div>
              </Link>
        </div>
        <h2>FOLLOW ME</h2>
      <div className="connectdiv">
        
        <div>
          <a href="https://facebook.com" target="_blank">
          <img
            className="facebookicon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLJP2fP32ZvZNFcuwFOZpIMgg0s3B7bqDdBWMvLXV5g&s"
          />
          </a>
        </div>
        <div>
        <a href="https://twitter.com" target="_blank">
          <img
            className="twittericon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbAF3oMGusYqooYnDM1Pt1jJWF4b0JaBd475M-KpTRw&s"
          />
          </a>
        </div>
        <div>
        <a href="https://instagram.com" target="_blank">
          <img
            className="instagramicon"
            src="https://t3.ftcdn.net/jpg/03/00/02/08/360_F_300020899_N275TqND1g3LDqinhrvLhDpCy4RjYG8m.jpg"
          />
          </a>
        </div>
        <div>
        <a href="https://pinterest.com" target="_blank">
          <img
            className="pinteresticon"
            src="https://i.pinimg.com/originals/57/36/fd/5736fd67958b680d3aa824d74195058b.jpg"
          />
          </a>
        </div>
        <div>
        <a href="https://youtube.com" target="_blank">
          <img
            className="youtubeicon"
            src="https://i.pinimg.com/originals/0e/17/41/0e1741bd58d614ed7f38950948d3f7e0.jpg"
          />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
