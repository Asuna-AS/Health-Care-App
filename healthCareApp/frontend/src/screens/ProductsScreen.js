import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Heading from '../components/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';

const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <section className="max-w-screen-xl py-36 mx-auto px-6">
            {/* heading  */}
            <Heading title="Products" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
              <span><h1 className="oxygen text-xl text-green-500"><b>Cost-Effectiveness, Enhanced Production Capacity, Timely Supply</b></h1></span>
              <span><p>Lucent Biotech Ltd. is at the forefront of the fast-growing Pharmaceutical company in India. Large pharmaceutical companies depend on outsourcing of Pharmaceutical products for cost-effectiveness, enhanced production capacity, timely supply, professional expertise or any specific needs. </p>
              <button className="btn-primary"></button></span>
            </div>
            
        </section>
    )
}

export default ProductsScreen
