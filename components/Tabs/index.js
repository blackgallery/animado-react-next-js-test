import { useState } from "react";
 
function Tabs({props}) {
  const [toggleState, setToggleState] = useState(1);

 

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="product-tab">
      <div className="product-tabs-btn">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Product Description    
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Additional Information
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Review (1)
        </button>
      </div>

      <div className="product-content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"} >
           
          <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in </p>

          <p> vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <div className="product_aditi_cont">
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate 
            </p>
            <table className="prod_attributes">
                <tbody>
                    <tr>
                        <th>Color</th>
                        <td>Black</td>
                    </tr>
                    <tr className="attri">
                        <th>Weight</th>
                        <td>50kg</td>
                    </tr>
                    <tr className="attri">
                        <th>Condition</th>
                        <td>New</td>
                    </tr>
                    <tr className="attri">
                        <th>Product</th>
                        <td>Laptop , Samsung</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <div className="product_revi">
                <img alt="" src="/assets/images/testimonial3.jpg" />
                <div className="revi_text"> 
                    <span className="revi_nam">Adam Crist -</span> 
                    <span className="revi_dat">Jan 14, 2019</span>
                    <span className="revi_rating">
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                        <i className="fa fa-star"></i> 
                    </span>
                    <div className="rat_des">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div> 
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
