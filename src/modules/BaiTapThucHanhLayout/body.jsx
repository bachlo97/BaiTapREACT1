import React, { Component } from 'react'
import Banner from './banner'
import Item from './item'

console.log(Banner.a)
export default class Body extends Component {

  addItem() {
    const count = 6;
    const items = [];

    for (let i in count) {
      items.push(
        <div className='col-lg-6 col-xxl-4 mb-5'>
          <Item />
        </div>
      );
    }

    console.log('1235134',items)
    return items;
  }

  render() {
    return (
      <>
        <Banner />
        <Item/>
        <section className='pt-4'>
          <div className='class="container px-lg-5'>
            <div className='row gx-lg-5'>
              {this.addItem()}
            </div>
          </div>
        </section>
      </>
    )
  }
}
