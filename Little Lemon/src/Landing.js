import React from 'react';

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
     <img src={require('./inji.png')} alt="inji" width={200} height={200} />
          </div>
          <div className="col-md-6">
          <p className='text'>Hello I'm Inji </p>
            <h1 className='text'>A frontend developer specialised in React! </h1>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

