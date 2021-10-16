import React from 'react'
import Bproperty from './Bproperty'
import pimage1 from'../images/p1.png'
import pimage2 from'../images/p2.png'
import pimage3 from'../images/p3.png'

const Properties = () => {
    return (
        <div>
            <div className="product">
                <div className="p-heading">
                    <h3>Properties</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="product-container">
                    <Bproperty image={pimage1} name="item1" price="$200" />
                    <Bproperty image={pimage2} name="item1" price="$200" />
                    <Bproperty image={pimage3} name="item1" price="$200" />
                </div>

            </div>
            
        </div>
    )
}

export default Properties
