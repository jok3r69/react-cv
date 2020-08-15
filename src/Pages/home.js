import React from 'react';
import '../App.css';

function Home() {
  return (
    <React.Fragment>
        <div className="l-wrap">
            <div className="two-col-grid">
                <div className="first-grid"><img className="Homeimg rounded-circle" src="https://imagizer.imageshack.com/img923/3553/qR2tRV.jpg" alt=""/>
                </div>
                <div className="second-grid">is it this one?</div>
            </div>
        </div>
        <div className="l-wrap">
            <div className="three-col-grid">
                <div>skills</div>
                <div>projects</div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;