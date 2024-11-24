// import React from 'react';

// const About = () => {
//     return (
//         <div style={{ position: 'relative', minHeight: '100vh', fontFamily: "montserrat" }}>

//             {/* Card Section - Left-aligned */}
//             <div className="card mb-3" style={{
//                 maxWidth: "540px",
//                 margin: "20px",
//                 color: "black",
//                 backgroundColor: "white",
//                 float: "left"
//             }}>
//                 <div className="row g-0">
//                     <div className="col-md-4" style={{ height: '100%' }}>
//                         <img
//                             src={require('../assets/about.png')}
//                             className="img-fluid rounded-start"
//                             alt="About us"
//                             style={{
//                                 width: '70%',
//                                 objectFit: 'cover'
//                             }}
//                         />
//                     </div>
//                     <div className="col-md-8" style={{}}>
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 <span>We,</span> <span style={{ color: "blueviolet", fontStyle: "oblique" }}>The HairExpert&Co</span>
//                             </h5>
//                             <p className="card-text">
//                                 <small className="text-muted">
//                                     Welcome to HairExpert&Co, where style meets expertise. Nestled in the heart of <span style={{ fontWeight: "600" }}>Noida</span>, our salon is dedicated to transforming your hair into a masterpiece. With years of experience, a passion for creativity, and a commitment to excellence, we have become the go-to destination for those seeking premium hair care and styling services.
//                                 </small>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Section */}
//             <div
//                 className="bot"
//                 style={{
//                     backgroundColor: 'rgb(76, 0, 76)',
//                     height: '50px',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0
//                 }}
//             >
//                 <h6 style={{ margin: '0.5rem', color: 'lightgray' }}>
//                     ©2024 HairExpert&Co Salon All rights reserved. by Pratham Choudhary
//                 </h6>
//             </div>
//         </div>
//     );
// };

// export default About;

import React from 'react';

const About = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', fontFamily: "Montserrat" }}>

            {/* About Section with Image and Text */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
                padding: '50px 100px',
                height: '100vh',
            }}>

                {/* Text Section */}
                <div style={{ width: '50%' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>
                        Welcome to our world.
                    </h1>
                    <h3 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '30px' }}>
                        Pushing the boundaries of beauty and technology.
                    </h3>
                    <p style={{ fontSize: '16px', fontWeight: '300' }}>
                    Welcome to <span style={{ fontWeight: "600" }}>HairExpert&Co,</span> where style meets expertise. Nestled in the heart of <span style={{ fontWeight: "600" }}>Noida</span>, our salon is dedicated to transforming your hair into a masterpiece. With years of experience, a passion for creativity, and a commitment to excellence, we have become the go-to destination for those seeking premium hair care and styling services.
                    </p>
                    <button style={{
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        marginTop: '30px',
                    }}>
                        Discover our history
                    </button>
                </div>

                {/* Image Section */}
                <div style={{ width: '50%' }}>
                    <img 
                        src="https://www.lorealprofessionnel.in/-/media/project/loreal/brand-sites/lp/apac/in/about-us/landing-page/about_us_banner_image.jpg?rev=54703725fc964e50af25698858f950b5&cx=0.47&cy=0.49&cw=720&ch=720&hash=C9E98F4E00E64DC4079EED9CE1173281"
                        alt="About Us"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }} 
                    />
                </div>

            </div>

            {/* Footer Section */}
            <div
                className="bot"
                style={{
                    backgroundColor: 'rgb(76, 0, 76)',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
            >
                <h6 style={{ margin: '0.5rem', color: 'lightgray' }}>
                    ©2024 HairExpert&Co Salon All rights reserved. by Pratham Choudhary
                </h6>
            </div>
        </div>
    );
};

export default About;
