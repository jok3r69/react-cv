import React from 'react';
import '../App.css';

function Home() {
  return (
    <React.Fragment>
        <div class="l-wrap">
            <div class="two-col-grid">
                <div class="first-grid"><h5>is this working?</h5>
                </div>
                <div class="second-grid">is it this one?</div>
            </div>
        </div>
        <div class="l-wrap">
            <div class="three-col-grid">
                <div>skills</div>
                <div>projects</div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;