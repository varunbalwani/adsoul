import React from 'react';


    function Card(props){

        function renderDetail(){
            props.detail(props.id);
        }

        return(
            <center>
                <div className="container mt-4 detailCard col-10" align="left" onClick={renderDetail} style={{fontFamily:"Arial"}}>
                    <div className="row col-12" style={{lineHeight:"0.5"}}>
                        <div className="col-md-1 col-2">
                            <i className="fa fa-square fa-3x" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-10 col-8 mt-2" style={{lineHeight:"0.4"}}>
                            <p className="appName" style={{fontSize:"1.1rem"}}>{props.name}</p>
                            <p style={{fontSize:"0.6rem",color:"#808080"}}>{props.publisher}</p>
                        </div>
                        <div className="col-md-1 col-2 mt-2">
                            <i className="fa fa-arrow-right" aria-hidden="true" style={{color:"#BFBFBF"}}></i>
                        </div>   
                    </div> 
                    <div className="row col-12 mt-3" style={{fontFamily:"Arial",fontSize:"0.8rem",color:"#808080"}}>
                        <div className="col-3">Revenue</div>
                        <div className="col-3">Ad Requests</div>
                        <div className="col-3">Ad Response</div>
                        <div className="col-3">Impressions</div>
                    </div>
                    <div className="row col-12">
                        <div className="col-3"><strong>$345</strong></div>
                        <div className="col-3"><strong>34M</strong></div>
                        <div className="col-3"><strong>10M</strong></div>
                        <div className="col-3"><strong>10M</strong></div>
                    </div>                             
            </div>
            </center>
        );
    }

export default Card;