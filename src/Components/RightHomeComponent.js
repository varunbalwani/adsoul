import React,{Component} from 'react';
import Card from './CardComponent';
import axios from 'axios';
import {Loading} from './LoadingComponent';

class RightPanel extends Component{
    constructor(props){
        super(props);

        this.state={
            list: [],
            isLoading: false
        }
        this.UpdateDetailApp=this.UpdateDetailApp.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    UpdateDetailApp(id){
        var appName=this.state.list[id-1].appName;
        var publisher=this.state.list[id-1].publisherName;
        this.props.detail(appName,publisher,id);
    }

    fetchData(){
        this.setState({isLoading: true});
        axios({
            method: "GET",
            url:'https://api.npoint.io/adf6676a313fa01f787d/',
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=> {
            this.setState({
                list: res.data,
                isLoading: false
            });
        })
        .catch(error=>{
            return;
        });
    };

    render(){
        return(
            <div className="col-md-6" style={{float:"left",padding:"0"}}>
                <div className="jumbotron" style={{background:"#FFFFFF"}}>
                    <div style={{float:"left"}}>
                        <h3 align="left" style={{paddingTop:"3rem",fontFamily:"Arial"}}>Apps</h3>
                    </div>
                    <div style={{float:"right"}}>
                        <i className="fa fa-cog fa-2x" aria-hidden="true" style={{color:"#808080",paddingTop:"3rem"}}></i>
                    </div>
                </div>
                <div style={{background:"#E7E7E7",height:"78vh"}}>
                    {this.state.isLoading?
                        <Loading/>
                        :
                        <div style={{height:"75vh",overflowY:"scroll"}}>
                            {this.state.list.map((res,i) => (
                                <Card key={i} id={res.id} name={res.appName} publisher={res.publisherName} detail={this.UpdateDetailApp} />
                            ))}
                         </div>
                    }
                </div>
            </div>
        );
    }
}

export default RightPanel;