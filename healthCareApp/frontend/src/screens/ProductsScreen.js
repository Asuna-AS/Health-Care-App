import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Heading from '../components/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';
import fit from "../fit.png" 
import yb from "../yoga-brain.png" 
import yh from "../yoga-heart.png" 
const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <section className="max-w-screen-xl py-36 mx-auto px-6">
            {/* heading  */}
            <Heading title="Blogs" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white hover:shadow- duration-300'><a href='https://www.credihealth.com/blog/things-to-do-to-stay-fit-and-healthy/'><img src={fit}></img><p className='text-center poppins pt-3'>How to stay fit and Healthy?</p></a></div>
                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300'><a href="https://www.artofliving.org/in-en/health-and-wellness/20-postures-healthy-heart"><img src={yh}></img><p className='text-center poppins pt-3'>Yoga for healthy heart</p></a></div>
                <div className='bg-white mt-6 p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300'><a href="https://www.stylecraze.com/articles/effective-yoga-poses-to-increase-your-brain-power/"><img src={yb}></img><p className='text-center poppins pt-3'>Yoga for brain power</p></a></div>
            </div>

        </section>
    )
}

export default ProductsScreen
