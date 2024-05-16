import React, { useState } from 'react';
import Header from './Header';
const Faq = () => {

    const [showMsg, setShowMsg] = useState(false)

    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">Frequently asked questions</h1>


                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    <div className="md:w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">What is Covercrafter?</p>
                        <p className="text-lg text-gray-700">Covercrafter is a tool to create cover images for your blogs quickly and easily.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold py-2">Is Covercrafter free?</p>
                        <p className="text-lg text-gray-700">Yes! Covercrafter is absolutely free to use.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">Can I upload my custom brand logo?</p>
                        <p className="text-lg text-gray-700">Yes.Just search and select <span className="font-semibold">custom</span> in icon section and you can upload your own logo to personalize your cover images.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Can I use Covercrafter for non-technical/personal blogs?</p>
                        <p className="text-lg text-gray-700">Yes! Why not? Even though Covercrafter was built with technical blogs in mind, you can still use it for your personal blogs. Check out the stylish theme for more.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Why use Covercrafter?</p>
                        <p className="text-lg text-gray-700">Because it's simple, quick and easy to use. Why spend hours designing when you can create cover images in seconds?</p>
                    </div>

                </div>

                <div className="md:w-1/2 mx-auto text-center mt-20">
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    <p className="text-xl font-Anek font-semibold text-gray-800">Want to know a secret? Click me</p>

                </div>

                {
                    showMsg ?
                        <div>
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">Blog titles with a minimum of 8 words have 21% better click-through</h2>
                        </div> :
                        <div></div>
                }

            </div>
        </div>
    );
}

export default Faq;