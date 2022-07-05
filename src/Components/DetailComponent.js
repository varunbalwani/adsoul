import React,{Component} from 'react';
import { Navbar } from 'reactstrap';
import axios from 'axios';
import {Loading} from './LoadingComponent';

class RenderDetail extends Component{
    constructor(props){
        super(props);

        this.state={
            detailData: [],
            isLoading: false
        };
        this.fetchDetail=this.fetchDetail.bind(this);
        this.renderRate=this.renderRate.bind(this);
    }

    componentDidMount(){
        this.fetchDetail();
    }

    fetchDetail(){
        this.setState({isLoading: true});
        axios({
            method: "GET",
            url:'https://api.npoint.io/baf8dba5974d29aa094b/'+this.props.id,
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=> {
            this.setState({
                detailData: res.data,
                isLoading: false
            });
        })
        .catch(error=>{
            return;
        });
    }

    renderRate(impressions,adResponse){
        var res=(impressions/adResponse)*100;
        return res.toFixed(2);
    }

    render(){
        return(
            <>
                <Navbar style={{background:"#6155DB",color:"#FFFFFF",height:"7vh",fontVariantCaps:"small-caps",fontFamily:"Varela Round",fontStretch:"ultra-expanded"}}>
                            <strong>A D S O U L</strong>
                        </Navbar>
                        <div className="row" style={{padding:"1.5rem 0 1.5rem 1.5rem"}}>
                            <div>
                                <i className="btn fa fa-arrow-left" aria-hidden="true" style={{color:"#808080"}} onClick={this.props.back}></i>
                            </div>
                            <div className="ml-2">
                                <i className="fa fa-square fa-3x" aria-hidden="true" style={{color:"#4CBB17"}}></i>
                            </div>
                            <div className="ml-1" style={{lineHeight:"0.5"}}>
                                <h4>{this.props.appName}</h4>
                                <p style={{fontSize:"0.7rem",color:"#808080"}}>{this.props.publisher}</p>
                            </div>
                        </div>
                        <div className="container box" style={{fontFamily:"Arial"}}>
                            <div className="row" style={{padding:"0 0 1rem 1rem",border:"0.5px solid",borderColor:"#dfdfdf"}}>                       
                                <div className="col-2" style={{paddingBottom:"1rem"}}><strong>Date</strong></div>
                                <div className="col-1" style={{paddingBottom:"1rem"}}><strong>Revenue</strong></div>
                                <div className="col-2" style={{paddingBottom:"1rem"}}><strong>Ad Requests</strong></div>
                                <div className="col-2" style={{paddingBottom:"1rem"}}><strong>Ad Responses</strong></div>
                                <div className="col-2" style={{paddingBottom:"1rem"}}><strong>Impressions</strong></div>
                                <div className="col-1" style={{paddingBottom:"1rem"}}><strong>Clicks</strong></div>
                                <div className="col-2" style={{paddingBottom:"1rem"}}><strong>Render Rate</strong></div>
                            </div>
                            {this.state.isLoading?
                                <Loading/>
                                :
                                <>
                                    { this.state.detailData.map((res,i)=>{
                                        return(
                                            <div key={i} className="row" 
                                                style={{padding:"0 0 1rem 1rem",borderStyle:"solid",borderWidth:"0 0.5px 0.5px 0.5px",borderColor:"#dfdfdf",fontFamily:"Arial"}}>

                                                <div className="col-2 detail" style={{paddingTop:"1.5rem"}}>{res.date}</div>
                                                <div className="col-1 detail" style={{paddingTop:"1.5rem"}}>{res.revenue}</div>
                                                <div className="col-2 detail" style={{paddingTop:"1.5rem"}}>{res.adRequest}</div>
                                                <div className="col-2 detail" style={{paddingTop:"1.5rem"}}>{res.adResponse}</div>
                                                <div className="col-2 detail" style={{paddingTop:"1.5rem"}}>{res.impressions}</div>
                                                <div className="col-1 detail" style={{paddingTop:"1.5rem"}}>{res.clicks}</div>
                                                <div className="col-2 detail" style={{paddingTop:"1.5rem"}}>{this.renderRate(res.impressions,res.adResponse)}%</div>
                                                
                                            </div>
                                        );
                                    })} 
                                </>
                            }   
                            </div>
            </>
        );
    }
}

export default RenderDetail;