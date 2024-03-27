import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    // Fetch the product details based on productId and update the state
    fetch(`https://your-api-url/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(error => console.error('Error fetching product:', error));
  }

  render() {
    const { product } = this.state;
    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        {/* Render other product details here */}
      </div>
    );
  }
}

export default ProductDetails;
