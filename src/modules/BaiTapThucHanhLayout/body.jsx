import React, { Component } from 'react'
import Banner from './banner'
import Item from './item'

console.log(Banner.a)
export default class Body extends Component {

  addItem() {
    const count = 6;
    const items = [];
  
    for (let i = 0; i < count; i++) {
      items.push(
        <div key={i} className='col-lg-6 col-xxl-4 mb-5'>
          <Item />
        </div>
      );
    }
    return items;
  }
  
  render() {
    return (
      <>
        <Banner />
        <section className='pt-4'>
          <div className='class="container px-lg-5'
          style={{
            marginLeft: 104.500,
            marginRight: 104.500
          }}>
            <div className='row gx-lg-5'>
              {this.addItem()}
            </div>
          </div>
        </section>
      </>
    )
  }
}
