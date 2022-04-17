import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 g-4'>
                <div className='col-12 text-center'>
                    <h3 className='fw-bold text-black-50'>Question 1. <span className='text-black'>Difference between authorization and authentication</span></h3>
                    <p className='text-black fw-bold container'>ANS: <span className='text-black-50 fw-light'>Authorization is the process to check what specific applications, files, and data a user is accessing. While Authentication is to verify who the user is. The situation is like someone traveling by train and he is asked about who he is and if he is able to get access of train and authorization is like if that person is able to travel in luxury or VIP or normal seat.</span></p>
                </div>
                <div className='col-12 text-center'>
                    <h3 className='fw-bold text-black-50'>Question 2. <span className='text-black'>Why are you using firebase? What other options do you have to implement authentication?</span></h3>
                    <p className='text-black fw-bold container'>ANS: <span className='text-black-50 fw-light'>I'm using firebase because it reduces my development and workload time. And it is easy to use.
                        There are many alternatives of firebase to authenticate such as, mongoDb, PassPort, Okta, Auth0, Keyclock, amazon cognitio.</span></p>
                </div>
                <div className='col-12 text-center'>
                    <h3 className='fw-bold text-black-50'>Question 3. <span className='text-black'>What other services does firebase provide other than authentication</span></h3>
                    <p className='text-black fw-bold container'>ANS: <span className='text-black-50 fw-light'>Firebase provides many features other than just authentication. It lets user to host a site and also create dynamic IP address. Also it has AI system which can help many people who are into Ai. Also it provides 10GB of storage to host your site and store your and users data.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;