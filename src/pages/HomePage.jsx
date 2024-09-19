import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card"
import '../styles/HomePage.css';
export const HomePage = () => {
    return <div className="home-page">
        <div className="bg-router-home">
            <div className='main-bg-router'>
                <div className='text-bg-router-home'>
                    <h3>A travel planner for everyone</h3>
                    <p>Organize flights & hotels and map your trips in a free travel app designed for vacation planning & road trips, powered by AI and Google Maps.</p>
                    <div className="click-router-home">
                        <a href="">Start planning</a>
                    </div>
                </div>
            </div>

            <img src='https://wanderlog.com/assets/LandingPageHero__path.png'></img>
        </div>
        <div className='bg-map-home'>
            <div className='img-bg-map'>
                <img src='https://wanderlog.com/assets/LandingPageProductAnimation__background.jpg'></img>
            </div>
            <div className='item-img-bg-map'>
                <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card0.jpg" alt="" />
                <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card3.jpg" alt="" />
                <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card2.jpg" alt="" />
                <img src="https://wanderlog.com/assets/LandingPageProductAnimation__card1.jpg" alt="" />
            </div>
            <div className='text-bg-map'>
                <h3>Your itinerary and your map in one view</h3>
                <p>No more switching between different apps, tabs, and tools to keep track of your travel plans.</p>
            </div>
        </div>
        <div className='review-home'>
            <h3>What travelers are raving about</h3>



        </div>
        <div className='replace-home'>
            <h3>Features to replace all your other tools</h3>
            <div className='list-item-replace'>
                <div className='item-replace-home'>
                    <img src='https://wanderlog.com/assets/MainFeatureTiles__addPlaces.png'></img>
                    <h3>Add places from guides with 1 click</h3>
                    <p>We crawled the web so you don’t have to. Easily save mentioned places.</p>
                </div>
                <div className='item-replace-home'>
                    <img src='https://wanderlog.com/assets/MainFeatureTiles__collaborate.png'></img>
                    <h3>Collaborate with friends in real time</h3>
                    <p>Plan along with your friends with live syncing and collaborative editing.</p>
                </div>
                <div className='item-replace-home'>
                    <img src='https://wanderlog.com/assets/MainFeatureTiles__import.png'></img>
                    <h3>Import flight and hotel reservations</h3>
                    <p>Connect or forward your emails to get them magically added into your trip plan.</p>
                </div>
                <div className='item-replace-home'>
                    <img src='https://wanderlog.com/assets/MainFeatureTiles__budget.png'></img>
                    <h3>Expense tracking and splitting</h3>
                    <p>Keep track of your budget and split the cost between your tripmates.</p>
                </div>
                <div className='item-replace-home'>
                    <img src='https://wanderlog.com/assets/MainFeatureTiles__checklist.png'></img>
                    <h3>Checklists for anything</h3>
                    <p>Stay organized with a packing list, to-do list, shopping list, any kind of list.</p>
                </div>
                <div className='item-replace-home'>
                    <img src='https://wanderlog.com/assets/MainFeatureTiles__recommendations.png'></img>
                    <h3>Get personalized suggestions</h3>
                    <p>Find the best places to visit with smart recommendations based on your itinerary.</p>
                </div>
            </div>

        </div>
        <div className='plan-pro-home'>
            <h3>Plan like a Pro</h3>
            <p>Unlock premium features like offline access, unlimited attachments, flight deals, export to Google maps, and <span><a href=''>much more</a></span></p>
            <div className='list-plan-pro'>
                <div className='item-plan-pro'>
                    <img src='https://wanderlog.com/assets/LandingPageProFeatureTiles__offline.png'></img>
                    <h3>Offline access</h3>
                    <p>No wifi, no problem. Your trip plans are locally downloaded for access anywhere.</p>
                </div>
                <div className='item-plan-pro'>
                    <img src='https://wanderlog.com/assets/LandingPageProFeatureTiles__attachments.png'></img>
                    <h3>Unlimited attachments</h3>
                    <p>Never dig through your emails again — access all your trip files and PDFs in one place.</p>
                </div>
                <div className='item-plan-pro'>
                    <img src='https://wanderlog.com/assets/LandingPageProFeatureTiles__optimize.png'></img>
                    <h3>Optimize your route</h3>
                    <p>Perfect for road trips and saving $$$ on gas! Get the best route auto-rearranged.</p>
                </div>
            </div>
        </div>
        <div className='destination-home'>
            <h3>Discover your next favorite destination</h3>
            <p>Get inspired from guides around the world — with expert tips and recommendations from the Wanderlog community. <span><a href=''>See all Wanderlog travel guides.</a></span></p>
            <div className='main-destination-home'>
                <div className='item-destination-home'>
                    <div>
                        <div className='name-destination'>
                            <img src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/U5pgNWs51ya0orps" alt="" />
                            <div>
                                <p>Lionel Perera</p>
                                <p>5560 views • 1 like</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='item-destination-home1'>
                    <div>
                        <div className='name-destination'>
                            <img src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/U5pgNWs51ya0orps" alt="" />
                            <div>
                                <p>Lionel Perera</p>
                                <p>5560 views • 1 like</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='item-destination-home2'>
                    <div>
                        <div className='name-destination'>
                            <img src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/U5pgNWs51ya0orps" alt="" />
                            <div>
                                <p>Lionel Perera</p>
                                <p>5560 views • 1 like</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item-destination-home3'>
                    <div>
                        <div className='name-destination'>
                            <img src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/U5pgNWs51ya0orps" alt="" />
                            <div>
                                <p>Lionel Perera</p>
                                <p>5560 views • 1 like</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='router-destination'>
                <p>Have tips of your own? Write a guide to share with other travelers like you!</p>
                <a href=''>Write your own guide</a>
            </div>
        </div>

    </div >
}