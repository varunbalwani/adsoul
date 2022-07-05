import React from 'react';
import { Navbar } from 'reactstrap';
import image from './assets/asset1.svg';
import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';
import icon3 from './assets/icon3.svg';
import icon4 from './assets/icon4.svg';

function LeftPanel(){
    return(
        <div className="col-md-6" style={{float:"left",color:"#FFFFFF",padding:"0"}}>
            <div style={{background:"#7164FF", height:"50vh"}}>
                <Navbar style={{height:"7vh",fontVariantCaps:"small-caps",fontFamily:"Varela Round",fontStretch:"ultra-expanded"}}>
                    <strong>A D S O U L</strong>
                </Navbar>
                <div className="col-12" align="center">
                    <img src={image} alt="preview Image"/>
                </div>
            </div>
            <div style={{background:"#6155DB", height:"50vh",padding:"2rem",fontFamily:"Arial"}}>
                <h3 align="left">Revenue Optimization</h3>
                <div className="row" style={{padding:"1rem"}}>
                    <div className="col-6" style={{padding:"0.95rem"}}>
                        <img src={icon1} alt="Fill Rate"/>
                        <p>Fill Rate</p>
                    </div>
                    <div className="col-6" style={{padding:"1rem"}}>
                        <img src={icon2} alt="Improve CTR"/>
                        <p>Improve CTR</p>
                    </div>
                </div>
                <div className="row" style={{padding:"0.95rem"}}>
                    <div className="col-6" style={{padding:"1rem"}}>
                        <img src={icon3} alt="Refresh Rate"/>
                        <p>Refresh Rate</p>    
                    </div>
                    <div className="col-6" style={{padding:"1rem"}}>
                        <img src={icon4} alt="Quick Integration"/>
                        <p>Quick Integration</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftPanel;