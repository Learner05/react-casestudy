var React=require('react');
var Rater =require('./Rater.jsx').Rater;
var Button = require('react-bootstrap/lib/Button');
import {Link} from 'react-router-dom';

class Product extends React.Component{
  constructor(){
    super();
    this.state={
      rating:''
    }
  }
  componentDidMount(){
    this.setState({rating:this.props.rating});
  }
  render(){
    return(
        <div className={"thumbnail"}>
          <img src={this.props.img} className={"img img-rounded img-responsive"}/>
          <div className={"caption"} style={{"textAlign":"center"}}>
              <Link to={`/productDetails/${this.props.pid}`}><h3>{this.props.name}</h3></Link>
              <h4><span style={{"color":"red"}}>Rs.{this.props.price}</span></h4>
              {this.props.status ? <h5 style={{"color":"red","font-weight":"bold"}}>The product is discontinued.</h5> :<p className={"description"}>{this.props.desc}</p>}
              <Rater value={this.props.rating} maxlength="6"/>&nbsp;&nbsp;
              <span style={{"fontSize":"9px"}}>{this.props.rating}/5</span>
          </div>
        </div>
    )
  }
}

export default Product;
