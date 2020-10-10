import React from 'react';
import Topics from '../components/Topics';

const TopicHeading = () => {
    const cards=[
        {id:'',title:'',para:'',btn:''}
    ]
    return (
        <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            {cards.map(card=>{
                return(
                    <h1>hello</h1>
                )
            })}
            <Topics />
            <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
                <h2 class="display-5">Another headline</h2>
                <p class="lead">And an even wittier subheading.</p>
            </div>
            <div class="bg-dark shadow-sm mx-auto" style={{width: "80%", height: 300, borderRadius: '21px 21px 0 0'}}></div>
            </div>
        </div>  
    );
}
export default TopicHeading;