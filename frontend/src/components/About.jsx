import React from 'react';

const About = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', fontFamily: "montserrat" }}>
            <div>
                <h1 style={{ textAlign: "center", margin: '100px'}}>
                <span style={{ color: "aliceblue" }}>We,</span> <span style={{ color: "blueviolet", fontStyle: "oblique" }}>The HairExpert&Co</span>
                </h1>
                <h3 style={{ textAlign: "center", color: "aliceblue", margin: '100px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ea commodi adipisci optio magnam eveniet officiis consectetur cumque? Reiciendis nisi at esse aspernatur non excepturi itaque nulla quos nemo corrupti.</h3>
            </div>

            <div className="bot" style={{ backgroundColor: 'rgb(76, 0, 76)', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <h6 style={{ margin: '0.5rem', color: 'lightgray' }}>
                    ©2024 HairExpert&Co Salon All rights reserved. by Pratham Choudhary
                </h6>
            </div>
        </div>
    );
}

export default About;
