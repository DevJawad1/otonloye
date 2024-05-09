import React from 'react'
import './styling/landing.css'
import Navbar from './Navbar'
import kingimg from '../assets/kingpic-removebg-preview.png'
import AboutUs from './AboutUs'
import logo from '../assets/kinglogo-removebg-preview.png'
import img1 from '../assets/manlining.jpg'
import img2 from '../assets/assembly.jpg'
import img3 from '../assets/womanlaf.jpg'
import congrat from '../assets/congrat.jpg'
import notice from '../assets/notice.jpg'
const Landingpage = () => {
    const enlargImage=(i)=>{
        if(i=="one"){
            document.querySelector('.cvimg').classList.add('cover-img')
        }
        else{
            document.querySelector('.cvimgtwo').classList.add('cover-img')
        }
    }
    const closeImage=(i)=>{
        if(i=="one"){
            document.querySelector('.cvimg').classList.remove('cover-img')
        }else{
            document.querySelector('.cvimgtwo').classList.remove('cover-img')
        }
    }
    return (
        <div>
            <div className="section-one" id='home'>
                <Navbar />
                <div className="cover px-lg-5 p-5">
                    <div className="d-lg-flex h-100">
                        <div>
                            <img src={kingimg} alt="" className='king-img' />
                        </div>
                        <div className='content d-flex justify-content-center w-100 borer text-center text-white'>
                            <div>
                                <p className='name'>Warri Progressive Society</p>
                                <p className='fs-3'>Peace and Unity</p>
                                <div className=' gap-2'>

                                    <button className='btn btn-light w-50' style={{ height: "50px" }}>View all Branch <i className="ri-arrow-drop-right-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-two" id='aboutUs'>
                <div className='cover d-flex mx-lg-5 p-2 mt-2 shdow'>
                    <div className="d-md-flex" style={{ alignItems: "center" }}>
                        <div className='text-center h-100' >
                            <img src={logo} alt="" className='logo' />
                        </div>
                        <div className='p-1 pt-3 w-75 content mx-auto h-75 px-2'>
                            <p className=''>OTOLOYE, UNITED KINGDOM IS THE REGISTERED AND THE ONLY ACKNOWLEDGED UK branch of the WARRI PROGRESSIVE SOCIETY (OTONLOYE) with registered office at OTONLOYE HALL, Warri, having firmly and solemnly resolved to come together in PEACE and UNTTY as one indivisible sovereign people of His Majesty, OG1AME, THE OLU OF WARRI under GOD'S guidance, dedicated to the promotion of our Culture, Social and Economic harmony with understanding and Co-operation in IWERELAND.  We provide for ourselves, byelaws in tandem with the 2018 CONSTITUTION (As Reviewed) for the purpose of enhancing good governance and welfare of all registered and financial members of the Society, based on principles of freedom, equality and Justice to all members.  All Iwere sons and daughters based in the UK are welcome to join us.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-three mt-5 mx-lg-3 pt-3 p-2 border-top border-black">
                <p className='fs-1 fw-bold text-center'>Otonloye UK Mission</p>
                <div className="d-md-flex gap-3">
                    <div id="carouselExampleRide" class="carousel slide slider border " data-bs-ride="true">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="mission shadow p-2 pt-4">
                        <p className='fs-1 title'>Our Mission</p>
                        <ul className='w-75'>
                            <li className='mt-4'>To foster a common understanding for peace and unity amongst Itsekiris and between them and their neighbours,</li>
                            <li className='mt-4'> To uphold those Itsekiri traditions and customs considered good and progressive in a bid to meet the test of time,</li>
                            <li className='mt-4'>To contribute to the educational economic and socio-economic development of our people, particularly in the Riverine Areas.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section-four p-3 mt-5">
                <div className="d-flex gap-2 ">
                    <div className="w-100 latest-news p-2" style={{ lineHeight: "1.5", borderRight: "1px solid" }}>
                        <p className="title fs-3">Latest News</p>
                        <div className='d-md-flex gap-0'>
                            <div style={{lineHeight:"1"}}>
                                <div className="d-flex gap-1">
                                    <p>1.</p>
                                    <p>New Elected Congratulation</p>
                                </div>
                                <div className="text-md-end w-75">
                                    <p className='text-decoration-underline text-primary' onClick={()=>{enlargImage('one')}}>View Image</p>
                                </div>
                                <div className="cvimg text-center">
                                    <div className="w-md-50 mx-auto ">
                                        <button className='border-0 btn btn-dark fs-3 pt-0 d-none' onClick={()=>{closeImage('one')}}>x</button>
                                    </div>
                                    <div>
                                    <img src={congrat} alt="" className='w-75 h-7 cert-one enlarge'/>
                                    </div>
                                </div>
                            </div> 
                            <div style={{lineHeight:"1"}} className='conducted'>
                                <div className="d-flex gap-1">
                                    <p>2.</p>
                                    <p>Election Conducted</p>
                                </div>
                                <div className="text-md-end w-75">
                                    <p className='text-decoration-underline text-primary' onClick={()=>{enlargImage('two')}}>View Image</p>
                                </div>
                                <div className="cvimgtwo text-center">
                                <div className="w-md-50 mx-auto ">
                                        <button className='border-0 btn btn-dark fs-3 pt-0 d-none' onClick={()=>{closeImage('two')}}>x</button>
                                    </div>
                                    <div>
                                    <img src={notice} alt="" className='w-75 h-75 cert-two enlarge' />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 ">
                        <p className="title fs-3">Upcoming Events</p>
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    {/* <th scope="col" className=''>#</th> */}
                                    <th scope="col" className=''>Date</th>
                                    <th scope="col" className=''>Time</th>
                                    <th scope="col" className=''>Events</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <th scope="row">1</th> */}
                                    <td>JUN 1</td>
                                    <td>6.00PM - 9.00PM</td>
                                    <td>Monthly Meeting</td>
                                </tr>
                                <tr>
                                    {/* <th scope="row">2</th> */}
                                    <td>JUN 1</td>
                                    <td>6.00PM - 9.00PM</td>
                                    <td>Monthly Meeting</td>
                                </tr>
                                <tr>
                                    {/* <th scope="row">3</th> */}
                                    <td>JUN 1</td>
                                    <td>6.00PM - 9.00PM</td>
                                    <td>Monthly Meeting</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='border-bottom text-primary border-primary'>View all Events</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage