import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {Navbar, Footer} from '../../components';

// import TopicHeading from '../TopicHeading';

const About = () => {
    
    // const card_cont=[
    //     {id:'1'},
    //     {id:'2'},
    //     {id:'3'},
    // ]
    return (
        <>
        <Navbar />
        <main style={{marginTop:80}}>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-8 p-md-1 mx-auto my-5">
                <h1 class="display-4 font-weight-normal">Learn Web Development and Python</h1>
                <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                {/* <Link class="btn btn-outline-secondary" to="/courses">All Courses</Link> */}
                </div>
            </div>


            <div class="row w-100 my-md-3 pl-md-3">
                <div class="col-md-6 col-12">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div class="my-3 py-3">
                    <Link to="/courses/react"><h2 class="display-5">ReactJS</h2></Link>
                    <p class="lead">JavaScript Library to build UIs</p>
                </div>
                <div class="bg-light shadow-sm mx-auto" style={{width: "80%", height: 300, borderRadius: '21px 21px 0 0'}}>
                    <ul style={{color:"black", listStyleType:'none'}}>
                        <li>h3llo</li>
                        <li>bye</li>
                    </ul>
                </div>
                </div>
                </div>

                <div class="col-md-6 col-12">
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div class="my-3 p-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">And an even wittier subheading.</p>
                </div>
                <div class="bg-dark shadow-sm mx-auto" style={{width: "80%", height: 300, borderRadius: '21px 21px 0 0'}}></div>
                </div>
                </div>
                
                
                <div class="col-md-6 col-12 mt-5">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div class="my-3 py-3">
                    <h2 class="display-5">ReactJS</h2>
                    <p class="lead">JavaScript Library to build UIs</p>
                </div>
                <div class="bg-light shadow-sm mx-auto" style={{width: "80%", height: 300, borderRadius: '21px 21px 0 0'}}>
                    <ul style={{color:"black", listStyleType:'none'}}>
                        <li>h3llo</li>
                        <li>bye</li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </main>

        <Footer />
        </>
    );
}

export default About;