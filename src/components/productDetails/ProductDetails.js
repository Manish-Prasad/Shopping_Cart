import React, { Component } from 'react';
import product from '../../assets/images/product.jpg';
import tv1 from '../../assets/images/tv1.jpg';
import tv2 from '../../assets/images/tv2.jpg';
import tv3 from '../../assets/images/tv3.jpg';
import {Tabs,Tab} from 'react-bootstrap';
import './ProductDetails.css'
// import {Tabs,Tab} from 'react-bootstrap'

class ProductDetails extends Component {

    state={
        img:tv1,
        item:1
    }

    render() {
        return (
            <div>
                <div>
                    <img className='product-header-img' alt='product-header-img' src={product} />
                </div>
                <div>
                    <h3>Featured Products</h3>
                    <p className='product-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                    <div className='col-md-12'>
                        <img className='product-img' alt='product-img' src={this.state.img}/>
                        <div className='product-text'>
                            <h4>Product Title</h4>
                            <h6>SKU</h6>
                            <p>$19.00</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div>
                                <span>Type : </span>{' '}
                                <select style={{borderRadius:'3px'}} >
                                    <option>Pleas select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                            </div><br/>
                            <div>
                                <span>Qty : </span>{' '}
                                <input 
                                    style={{borderRadius:'3px',textAlign:'center'}} 
                                    size='3' value={this.state.item} 
                                    onChange={(e)=>this.setState({item:e.target.value}) }
                                />{' '}
                                <button style={{borderRadius:'40%'}}>Add</button>
                            </div>
                        </div>
                    </div><br/>
                    <div className='col-md-12'>
                        <img onMouseEnter={()=>this.setState({img:tv1})} className='thumb-img' alt='thumb-img' src={tv1}/>
                        <img onMouseEnter={()=>this.setState({img:tv2})} className='thumb-img' alt='thumb-img' src={tv2}/>
                        <img onMouseEnter={()=>this.setState({img:tv3})} className='thumb-img' alt='thumb-img' src={tv3}/>
                    </div>
                    <div className='col-md-12 user-tab'>
                        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                          <Tab eventKey={1} title="Overview">
                            <p class='tab-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </Tab>
                          <Tab eventKey={2} title="Specifications">
                            <p class='tab-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </Tab>
                          <Tab eventKey={3} title="Related Products">
                            <p class='tab-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;