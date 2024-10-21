import React from 'react'
import '../index.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';




const MainPage = () => {
    return (
        <>
            <div className="p-4 bg-black flex justify-between items-center ">
                <h1 className="text-4xl text-white font-serif font-extralight ml-10">Sony</h1>

                <div className="flex space-x-6 text-white text-2xl" style={{position:"absolute",left:"1220px"}}>
                <span><i className="fa-solid fa-user"></i></span>
                    <span><i className="fa-solid fa-heart"></i></span>
                    <span><i className="fa-solid fa-magnifying-glass"></i></span> 
                    <span><i className="fa-solid fa-bars"></i></span>
                   
                </div>
            </div>

            <div>
                <img src="https://www.sony.co.in/content/dam/sony/contents/regional-FSMC/india/common/homepage/primary-tout/2024/diwali-2024/Diwali-Banner_Desktop_4000x980.jpg" alt="" style={{width:"1590px",height:"420px"}}/>
                <div  style={{position:"absolute",top:"220px",left:"220px"}} >
                <h2 className='text-xl font-mono'>THIS FESTIVE SEASON</h2>
                <h1 className='text-3xl font-medium font-sans'>CINEMA IS COMING HOME</h1><br />
                <button  className='border p-2 bg-blue-500 text-white hover:bg-blue-800 hover:text-white transition duration-300 rounded-md'>Learn More</button>
                </div>

            </div>
            <h1 className='text-4xl font-medium m-5 '>The Latest</h1>
            {/* Carosouel */}
            <div>
                <div className="m-5">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={4} // Display 4 slides at a time
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {/* SwiperSlide Components */}
                        <SwiperSlide>
                            <div className="bg- p-4 rounded-lg">
                                <img
                                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_UH_HP_4span_D?$promotionTilesDesktop4span$&fmt=png-alpha" // Replace with your actual image URL
                                    alt="Image 1"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">Bravia 9</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg- p-4 rounded-lg">
                                <img
                                    src="https://www.sony.co.in/content/dam/sony/contents/regional-FSMC/india/common/homepage/promotion-tiles/2024/ult-series-oofm/ult-Banner_Desktop-revised.jpg" // Replace with your actual image URL
                                    alt="Image 2"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">ULT POWER SOUND Series</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg- p-4 rounded-lg">
                                <img
                                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/4span_desktop-1?$promotionTilesDesktop4span$" // Replace with your actual image URL
                                    alt="Image 2"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">ULT POWER SOUND Series</h2>
                            </div>
                        </SwiperSlide>
                        {/* Add more SwiperSlides similarly */}

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/HAVFY24_SF3_HP_4span_D?$promotionTilesDesktop4span$&fmt=png-alpha" // Replace with your actual image URL
                                    alt="Image 8"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">Bravia Theater Bar 9</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/WF-1000X-M5-Web-Banners-760x960?$promotionTilesDesktop4span$" // Replace with your actual image URL
                                    alt="Image 8"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">King X wf</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/4span-8?$promotionTilesDesktop4span$" // Replace with your actual image URL
                                    alt="Image 8"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">ZEV 10 Vlog | Camera</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://www.sony.co.in/content/dam/sony/contents/regional-FSMC/india/common/homepage/2024/srs-xv500-regional-banner/D-SRS-XV500_760X960_desktop-new.png" // Replace with your actual image URL
                                    alt="Image 8"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">SRS XV-500</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/HAVFY24_SF2_HP_4span_D?$promotionTilesDesktop4span$&fmt=png-alpha" // Replace with your actual image URL
                                    alt="Image 8"
                                    className="w-full h-auto"
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center">SRS XV-500</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <br />
            <h1 className='text-4xl font-medium m-5'>WHAT'S HOT</h1>
            <div className='m-10 text-2xl'>
                <button className='border p-2 hover:bg-gray-500 hover:text-white transition duration-300 rounded-md'>Best Of Sony</button> &nbsp; &nbsp;
                <button className='border p-2 hover:bg-gray-500 hover:text-white transition duration-300 rounded-md'>Lifestyle</button>&nbsp;&nbsp;&nbsp;
                <button className='border p-2 hover:bg-gray-500 hover:text-white transition duration-300 rounded-md'>Comfort</button>&nbsp;&nbsp;
            </div>
            
           <div style={{height:"500px"}}>
           <div className='' style={{}}>
                
                <Swiper  modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1} // Display 4 slides at a time
                        navigation
                        pagination={{ clickable: true }}
                >
                <SwiperSlide style={{}}>
                            <div className="  p-4 rounded-lg" style={{}}>
                                <img
                                    src="https://i.imghippo.com/files/eI4fI1729085627.png" // Replace with your actual image URL
                                    alt="Image 9"
                                    className="w-full " style={{height:"550px", width:"1300px",position:"absolute", left:"120px"}}
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center"></h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://i.imghippo.com/files/WXyFr1729085799.png" // Replace with your actual image URL
                                    alt="Image 9"
                                    className="w-full h-auto"  style={{height:"550px", width:"1300px",position:"absolute", left:"120px"}}
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center"></h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="  p-4 rounded-lg">
                                <img
                                    src="https://i.imghippo.com/files/HQbga1729086911.png" // Replace with your actual image URL
                                    alt="Image 9"
                                    className="w-full h-auto" 
                                    style={{height:"550px",width:"1300px", position:"relative",marginLeft:"120px"}}
                                />
                                <h2 className="text-xl mt-2 font-semibold text-center"></h2>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
           </div>

           <div>
            <br /><br /><br /><br />
<br />
           <footer class="bg-gray-900 text-gray-300 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Discover</h3>
        <ul>
          <li><a href="#" class="hover:text-gray-400">New Products</a></li>
          <li><a href="#" class="hover:text-gray-400">PlayStation</a></li>
          <li><a href="#" class="hover:text-gray-400">Cameras</a></li>
          <li><a href="#" class="hover:text-gray-400">TV & Home Theater</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Customer Support</h3>
        <ul>
          <li><a href="#" class="hover:text-gray-400">Help Center</a></li>
          <li><a href="#" class="hover:text-gray-400">Warranty</a></li>
          <li><a href="#" class="hover:text-gray-400">Contact Us</a></li>
          <li><a href="#" class="hover:text-gray-400">Shipping Info</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-gray-400">Facebook</a></li>
          <li><a href="#" class="hover:text-gray-400">Twitter</a></li>
          <li><a href="#" class="hover:text-gray-400">Instagram</a></li>
          <li><a href="#" class="hover:text-gray-400">YouTube</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Legal</h3>
        <ul>
          <li><a href="#" class="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-gray-400">Terms of Use</a></li>
          <li><a href="#" class="hover:text-gray-400">Cookies Policy</a></li>
        </ul>
      </div>
    </div>


    <div class="mt-8 border-t border-gray-700 pt-6 text-center">
      <p class="text-sm">&copy; 2024 Sony Corporation. All Rights Reserved.</p>
      <p class="text-xs mt-2">Sony and the Sony logo are trademarks of Sony Corporation.</p>
    </div>
  </div>
</footer>

           </div>
        </>

    )
}

export default MainPage