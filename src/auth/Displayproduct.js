import React from 'react';
// import './mystyle.css';
import { Link } from 'react-router-dom';

class Displayproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [] }
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(response => {
        this.setState({ mydata: response.products });
      });
  }

  addToCart = (productId) => {
    // You can perform your add to cart logic here, using the productId
    console.log("Adding product to cart with ID:", productId);
  }

  render() {
    return (
      <>
        <h3 className="heading"> Product Grid</h3>
        <div className="container">
          <div className="row product">
            {this.state.mydata.map(productdata => {
              return (
                <div className="col-md-4" key={productdata.id}>
                  <div className="card">
                    <h4>Title : {productdata.title}</h4>
                    <p> Description: {productdata.description}</p>
                    <h6>Price: {productdata.price}</h6>
                    <h6>DiscountPercentage : {productdata.discountPercentage}</h6>
                    <h6>Rating: {productdata.rating}</h6>
                    <h6>Stock :{productdata.stock}</h6>
                    <h6>Brand:{productdata.brand}</h6>
                    <h6>Category: {productdata.category}</h6>
                    <button type='button' onClick={() => this.addToCart(productdata.id)}>add to cart</button>
                    <Link to={`/product/${productdata.id}`} className="btn btn-primary">View Details</Link>
                    <div className="ccc">
                      <p className="text-center"><img src={productdata.thumbnail} className="imw" width={150} /></p>
                    </div>
                    <div className="card-body">
                      <p className="text-center"><input type="submit" name="Save" value="Buy" className=" cc1" /></p>
                    </div>
                    <hr />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Displayproduct;
