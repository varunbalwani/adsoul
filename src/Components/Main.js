import React,{Component} from 'react';
//import {ReactComponent as homimg} from './asset1.svg';
import RenderDetail from './DetailComponent';
import LeftPanel from './LeftHomeComponent';
import RightPanel from './RightHomeComponent';

class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            list: [],
            show: false,
            detailId: 0,
            dQApp:"",
            dQPublisher:""
        };
        this.back=this.back.bind(this);
        this.detail=this.detail.bind(this);
    }

    back(){
        this.setState({show: false})
    }

    detail(appName,publisher,id){
        this.setState({
            dQApp: appName,
            dQPublisher: publisher,
            detailId: id,
            show: true
        });
    }

    render(){
        return(
            <>
            { !this.state.show?
                <>
                    <LeftPanel/>
                    <RightPanel detail={this.detail}/>
                </>
                :
                <RenderDetail id={this.state.detailId} back={this.back} appName={this.state.dQApp} publisher={this.state.dQPublisher}/>
            }
            </>
                
        );
    }
}

export default Main;