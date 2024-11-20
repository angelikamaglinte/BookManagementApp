import React from 'react'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'
import landingPageLogo from '../../assets/Page Pilot.png'
import landingPageSection1Image from '../../assets/landingPageSection1Image.png'
import section3Video from '../../assets/section3Video.gif'
import section4Image from '../../assets/section4Booklist.png'
import section5Image from '../../assets/section5Dashboard.png'

const LandingPage = () => {
    return (
        
                <div className='landingPageContent'>
                    <img src={landingPageLogo} id='landingPageLogo' alt=''></img> 
                    <div className='landingPageActions'>
                        <NavLink className='landingPageButtons' to="/login">Login</NavLink>
                    </div>

                    <div className='landingPageSection1'>
                        <h1>Manage Your Library with Ease</h1>  

                         <p id='section1Description'> 
                             As a Page Pilot Administrator, you have full control over your book collection. 
                             From adding new titles to updating existing entries or 
                             removing outdated books, 
                             our intuitive admin dashboard makes library management simple and efficient. 
                         </p>

                        <img id='landingPageSection1Image' src={landingPageSection1Image} alt=''></img>
                    </div>

                    <div className='landingPageSection2'>
                        <h1>Manage Your Library with Ease</h1>
                        <p>
                        Keep your catalog accurate and up to date, 
                        and ensure your readers always have access to the best information.
                        </p>
                    </div>

                    <div className='landingPageSection3'>
                        <div className='section3Subsection1'>
                            <h1>Seamless Book Management</h1>
                            <p id='section3Description'>     
                            Take control of your library today with Page Pilot’s powerful admin tools.
                            </p>
                        </div>
                        <div className='section3Subsection2'>
                            <img src={section3Video} className='landingpageVideo' alt=''></img>
                        </div>
                    </div>

                    <div className='landingPageSection4'>
                        <div className='section4Subsection2'>
                            <img src={section4Image} className='section4Image' alt=''></img>
                        </div>
                        <div className='section4Subsection1'>
                            <h1>Real-Time Updates</h1>
                            <p id='section4Description'>     
                            Ensure your collection stays current and organized.
                            </p>
                        </div>
                     
                    </div>

                    <div className='landingPageSection5'>
                       
                        <div className='section5Subsection1'>
                            <h1>User-Friendly Interface</h1>
                            <p id='section5Description'>     
                            Manage your library effortlessly, whether you’re overseeing a small collection or a large archive.
                            </p>
                        </div>

                        <div className='section5Subsection2'>
                            <img src={section5Image} className='section5Image' alt=''></img>
                        </div>
                     
                    </div>

                    

                </div>  
           
    )
}

export default LandingPage