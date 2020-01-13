import React, {Component} from 'react';
import SHOP_DATA from './data';
import  PreviewCollection from '../../components/preview-collection/preview-collection';

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
render() {
    const {collections} = this.state;
    return (
        <div className='shop-page'>
            {collections.map(({id, name, title, items, price, imageUrl}) => (
                <PreviewCollection key={id} name={name} title={title} items={items} price={price} imageUrl={imageUrl}/>
            )
            )}
        </div>
    )
    }
}

export default ShopPage;