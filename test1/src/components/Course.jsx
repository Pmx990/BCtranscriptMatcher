import React from 'react'
import { Popover, Button } from 'antd';



//single course component
class Course extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color : 'white',
            isSelected: 0, //0 false, 1 true
            isShown:true,
            info:-1,
            msg:0,
            float:"left",
            width:"60%"
        }
    }

    toParent = () => {
        this.props.parent.getChildrenMsg(this, this.state.msg)
    }


    render(){
        if(this.props.color != undefined){this.state.color = this.props.color;}
        if(this.props.msg != undefined){this.state.msg = this.props.msg}
        if(this.props.float != undefined){this.state.float = this.props.float}
        if(this.props.width != undefined){this.state.width = this.props.width}
        //this.state.isSelected = this.props.isSelected;
//style={{float:this.state.float,border:'1px dashed #ccc',margin:'10px',padding:'3px',boxShadow:'0 0 10px #ccc',width:this.state.width,backgroundColor: this.state.color}
        if(this.state.isShown==true){
    return <div><Button block key={this.props.dep+this.props.no} style={{backgroundColor: this.state.color,width:this.state.width} }
     onClick={()=>this.clickHandler()} >
    <h2  style={{fontSize:'14px'}}>{this.props.dep}{this.props.no} {this.props.name}</h2>
    
    </Button>
    <p/>
    </div>
    }else{
        return <div></div>
}
    
}

    clickHandler = ()=>{
        //this.state.isSelected = this.props.isSelected;
        console.log(this.state)
        this.state.info = this.props.info;
        //this.state.msg = this.props.msg;

        console.log(this.state.isSelected)
        console.log(this.state.info)
        console.log(this.state.msg)

        if(this.state.info==1){
            this.setState({
                color:"#FF8F59",
                msg : 1
            })
        }else if(this.state.info == 0){
            if(this.state.isSelected == 0){
                this.setState({
                    color:"#FF8F59",
                    msg : 1,
                    isSelected : 1
            })
            }else if(this.state.isSelected == 1){
            this.setState({
                color:"white",
                msg : 0,
                isSelected : 0
        })
        }

        


        /*if(this.state.isSelected == true){
            this.setState({
                msg:1
            })
        }
        if(this.state.color=='#FF8F59'){
            //if(this.state.isSelected==true){

            this.setState({
                color:"white",
                //isSelected:false,
                msg:0
            })
            
        }else{
            this.setState({
                color:"#FF8F59", 
                //isSelected:true,
                msg:1
                //isShown:false,
            })
            
            //ShowSelected.setState({
            //    course : 'qwe'
            //})
                
            }*/
        
        
    }
    this.toParent();
    
}
}


export default Course;