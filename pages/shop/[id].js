import React, { Fragment, useState} from "react";
import LayoutOne from "../../layouts/LayoutOne";
import PageHeader from '../../components/PageHeader/index'; 
import PageWrapper from "../../components/PageWrapper";   
import RelatedProduct from "../../components/RelatedProduct";   
import Slider from "react-slick";
import ProductData from '../../data/Products/products.json';
 

const SingleServicePage = ({name, imageGallery, modelNumber, orginalPrice , discountPrice , brand, categories, tags, description, additionalInfo,review }) => {

  const settings = {
    customPaging: function(i) {
    return (	         
        <img src={`/assets/images/product_${i + 1}.jpg`} alt=""/> 
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Product Tabs
  const [productTabs, setProductTabs] = useState(1);

  // Product Tabs
  const toggleTab = (index) => {
    setProductTabs(index);
  };

  return (
    <Fragment>
        
      <LayoutOne pageTitle="Fizxila - Repair Service React Next Template"> 

        <PageHeader 
          bgImg={('/assets/images/header.jpg')}
          title={name}
        />   

        <PageWrapper classes="shop-product-area">  
 

			<div className="col-md-6 col-sm-12">
				<div className="shop-products">
					<div className="single-item-detail">
						<div className="product-thumbnail">
							{/* Image Gallery */}
							<Slider {...settings}>
								{
								imageGallery.map((gallery,indx)=>( 
								<div  key={indx}>
									<img src={('/assets/images/' + gallery)} alt="gallery" />   
								</div>
								))
								} 
							</Slider>
						</div>
					</div>
				</div>
			</div>

			<div className="col-md-6 col-sm-12">
				<div className="allproduct-info">
					<div className="tittle_product">
						<a href="single-shop"> {name} </a>
						<div className="next_prev">
							<a href="single-shop" className="next"><span className="icon-glyph-205"></span></a>
							<a href="single-shop" className="prev"><span className="icon-glyph-204"></span></a>
						</div>
					</div>
					<div className="allproduct-price-area">    
						{/* Product Price  */} 
						<span className="price">
							<span className="n-amt">{discountPrice}</span>
							<span><del> {orginalPrice} </del></span>
						</span>

						{/* Product rating  */}
						<div className="star-rating rating2">
							<ul>
								<li className="star yes"><i className="fa fa-star"></i></li>
								<li className="star yes"><i className="fa fa-star"></i></li>
								<li className="star yes"><i className="fa fa-star"></i></li>
								<li className="star yes"><i className="fa fa-star"></i></li>
								<li className="star no"><i className="fa fa-star"></i></li>
								<li className="reviews"><a href="single-shop">12 Reviews(s)</a> </li>
								<li> | </li>
								<li className="add-reviews"><a href="single-shop">Add Your Review</a></li>
							</ul>
						</div>

						{/* Product Model  */}
						<div className="product_model">
							<ul className="prd_model">
								<li><span>Model Number:</span>&nbsp;</li>
								<li className="model_no"> {modelNumber} </li>
							</ul>
							<ul className="prd_brand">
								<li><span>Brand:</span>&nbsp;</li>
								<li>{brand}</li>
							</ul>
						</div>  
					</div>
					{/* Product Desctiption  */}
					<div className="p-content"> 
						<p className="d-content">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
					</div>
					<div className="cart-quantity">
						<div className="cart-plus-minus">
							<input  className="cart-plus-minus-box" type="text" name="qtybutton" placeholder="1" />
						<div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
					</div>
					<div className="allchoices">
						<div className="choice-icon">
							<ul>
								<li>
									<a href="single-shop" className="text-uppercase adtocart">add to cart</a>
								</li>
								<li>
									<a href="single-shop"><span className="heart"><i className="icon-glyph-52"></i></span></a>
								</li>
							</ul>
						</div>
					</div>
					<div className="categories-area">
						<p className="category"><span>Categories :</span></p>
						<ul>

							{
								categories.map((cat,indx)=>( 
									<li key={indx}><a href="single-shop"> {cat}, </a></li> 
								))
							} 

						</ul>
					</div>
					
					<div className="categories-area">
						<p className="category"><span>Tags :</span> </p>
							<ul>
							{
								tags.map((tag,indx)=>( 
									<li key={indx}><a href="single-shop"> {tag}, </a></li> 
								))
							}  
						</ul>
					</div>
					
					<div className="share-area">
						<ul>
							<li><a href="single-shop"><i className="fa fa-instagram"></i></a></li>
							<li><a href="single-shop"><i className="fa fa-pinterest"></i></a></li>
							<li><a href="single-shop"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="single-shop"><i className="fa fa-dribbble"></i></a></li>
						</ul>
					</div>
				</div>
			</div>

			
			<div className="cust-reviews-area">
				<div className="container">  
				<div className="product-tab">
					{/* Start: Tab Button*/}
					<div className="product-tabs-btn">
						<button
						className={productTabs === 1 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(1)}
						>
						Product Description    
						</button>
						<button
						className={productTabs === 2 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(2)}
						>
						Additional Information
						</button>
						<button
						className={productTabs === 3 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(3)}
						>
						Review (1)
						</button>
					</div>
					{/* end: Tab Button */}

					{/* Start: Product Content */}
					<div className="product-content-tabs">
						<div className={productTabs === 1 ? "content  active-content" : "content"} >
							{<div dangerouslySetInnerHTML={{__html: description}}/>}
						</div>
						{/*  End: Product Description  */}

						{/*  Start: Additional Info */}
						<div className={productTabs === 2 ? "content  active-content" : "content"}>
							<div className="product_aditi_cont">
								<p>{additionalInfo.des}</p>
								<table className="prod_attributes">
									<tbody>
										<tr>
											<th>Color</th>
											<td>{additionalInfo.color}</td>
										</tr>
										<tr className="attri">
											<th>Weight</th>
											<td>{additionalInfo.weight}</td>
										</tr>
										<tr className="attri">
											<th>Condition</th>
											<td>{additionalInfo.condition}</td>
										</tr>
										<tr className="attri">
											<th>Product</th>
											<td> {additionalInfo.product}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						{/*  End: Additional Info */}

						{/*  Start: Product Description  */}
						<div className={productTabs === 3 ? "content  active-content" : "content"}>
							<div className="product_revi">
								<img alt="" src={('/assets/images/' + review.img)} />
								<div className="revi_text"> 
									<span className="revi_nam"> {review.name} - </span> 
									<span className="revi_dat">{review.date}</span>
									<span className="revi_rating">
										<i className="fa fa-star"></i> 
										<i className="fa fa-star"></i> 
										<i className="fa fa-star"></i> 
										<i className="fa fa-star"></i> 
										<i className="fa fa-star"></i> 
									</span>
									<div className="rat_des">
										<p>{review.text}</p>
									</div>
								</div> 
							</div>
						</div>
						{/* end: Review  */}
					</div>
					{/* end: Product Content */}
				</div>
				{/* end: Product tabs */} 
				</div>
				{/* end: container */}
			</div>
			{/* end: cust-reviews-area */}
	 
        </PageWrapper>
		

		<RelatedProduct />
		{/* Related Product */}

     </LayoutOne>

    </Fragment>
  );
};

export default SingleServicePage;


export async function getStaticProps(context) {
  const { params } = context; 
  return {
    props:  ProductData.find((item) => item.id.toString() === params.id)
  };
}

export async function getStaticPaths() {
  return {
    paths: ProductData.map((item) => ({
      params: {
        id: item.id.toString()
      },
    })),
    fallback: false,
  };
}