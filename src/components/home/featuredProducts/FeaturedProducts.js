import React,{Component} from 'react';

import './FeaturedProducts.css'

class FeaturedProducts extends Component {

    state={
        isClicked:false,
        len:100
    }
    
    render(){
        const text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'
        return (
            <div>
                <div className='boxed'>
                    <img className='boxed-img' alt='boxed-img' src={this.props.image}/>
                    <div className='prod-desc'>
                        <h4>Product Title</h4>
                        <h6>SKU</h6>
                        <p>
                            {text.length > this.state.len?text.substr(0,100):text}
                        </p>
                        {
                            text.length > this.state.len && this.state.isClicked===false?
                            <span 
                                onClick={()=>this.setState({isClicked:true,len:500})} 
                                style={{color:'rgb(37, 52, 139)',cursor:'pointer'}}>
                                <i>...Read more</i>
                            </span>
                            :
                            null
                        }

                    </div>
                </div>
                    
            </div>
        );
    }
}

export default FeaturedProducts;