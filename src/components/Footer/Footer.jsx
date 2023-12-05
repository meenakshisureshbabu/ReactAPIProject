import React from "react";
import '../Footer/footer.css'

function Footer() {
  return (
    <div className="footer-div">
      <div className="connectdiv">
        <div>
          <img
            className="facebookicon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLJP2fP32ZvZNFcuwFOZpIMgg0s3B7bqDdBWMvLXV5g&s"
          />
        </div>
        <div>
          <img
            className="twittericon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbAF3oMGusYqooYnDM1Pt1jJWF4b0JaBd475M-KpTRw&s"
          />
        </div>
        <div>
          <img
            className="instagramicon"
            src="https://t3.ftcdn.net/jpg/03/00/02/08/360_F_300020899_N275TqND1g3LDqinhrvLhDpCy4RjYG8m.jpg"
          />
        </div>
        <div>
          <img
            className="pinteresticon"
            src="https://i.pinimg.com/originals/57/36/fd/5736fd67958b680d3aa824d74195058b.jpg"
          />
        </div>
        <div>
          <img
            className="youtubeicon"
            src="https://i.pinimg.com/originals/0e/17/41/0e1741bd58d614ed7f38950948d3f7e0.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
