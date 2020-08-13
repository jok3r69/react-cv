import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Home() {
  return (
    <React.Fragment>
        <div class="l-wrap">
            <div class="two-col-grid">
                <div class="first-grid">personal presentation</div>
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
// we can have only onde default export
export default Home;