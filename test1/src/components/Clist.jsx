import React,{ useState,Children } from 'react'
import Course from './Course'
import Select from 'react-select'
import 'antd/dist/antd.css';
import { Drawer, Button,Affix,Divider} from 'antd';





class Clist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //hard coded data
            CourseListTest: [],
            SelectCourseList: [],
            value: []

        };
        this.handleChange = this.handleChange.bind(this);
    }


    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    

    getChildrenMsg = (result, msg) => {
        //msg = 0, means adding to the arr

        /*
        if(result.state.isSelected == true){
            result.state.isSelected = false;
        }else if(result.state.isSelected == false){
            result.state.isSelected = true;
        }*/
        if (result.state.msg === 0) {
            let tempArr = this.state.SelectCourseList;
            result.state.msg = 1;
            //console.log(result.props.state)
            tempArr.push(result.props);
            //tempArr.isSelected = false;
            this.setState({
                SelectCourseList: tempArr
            })
        } else if (result.state.msg === 1) {
            //msg = 1, means remove from the arr

            let tempArr = this.state.SelectCourseList;
            var index = result.props.index
            if (index !== -1) {
                tempArr.splice(index, 1);
                this.setState({ SelectCourseList: tempArr });
            }

        }
    }

    handleChange(event) {
        //this.setState({value: event});0
        var arr = Object.keys(this.props).map(key => this.props[key]);
        this.setState({ value: arr })
        console.log(arr)

        if (event != undefined && event != null) {
            var test = Object.keys(event).map(key => event[key]);

            //var arr3 = this.state.value;
            var tempArr = []
            var i;
            var ii;
            // console.log(test[0].value)
            for (i = 0; i < arr.length; i++) {
                for (ii = 0; ii < test.length; ii++) {
                    if (test[ii].value == arr[i].dep) {
                        tempArr.push(arr[i]);
                    }
                    // console.log(test[ii])
                    //console.log(arr3[0].dep)
                }
                ii = 0;
                //test[i].value = arr3[i].dep
                //tempArr.push(arr3[i])
            }
            //console.log(this.state.value)
            //console.log(tempArr)
            this.setState({ value: tempArr })
        }
        return tempArr
    }

    handleShow(event, course) {
    }


    render() {
        const options = [
            { value: 'CS', label: 'Computer Science' },
            { value: 'MATH', label: 'Math' },
            { value: 'ENG', label: 'English' }
        ]
/*
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        )
*/

        //console.log(arr)

        var arr2 = Object.keys(this.state.SelectCourseList).map(key => this.state.SelectCourseList[key]);
        var arr3 = Object.keys(this.state.value).map(key => this.state.value[key]);

        /* if(this.state.value.length==0){
          this.state.value = arr;
         }*/
        //this.state.CourseListTest = this.state.aaa[0];
        //<Course parent = {this}/>
        var test = this;
        return <div>
            <h1 style={{ color:"#FF8F59", fontSize: '35px', fontWeight: 200, textAlign: 'center' }}>Course Management</h1>

            <Divider>How to Use</Divider>

            <div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <Affix  offsetTop={120} onChange={affixed => {}}>
                <Button type="primary"style={{ background: "#FF8F59", borderColor: "#ff7a45" }} onClick={this.showDrawer}  >Selected</Button>
            </Affix>
                <Drawer
                    title="Selected courses:"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                     {arr2.map(item => {
                return <Course key={item.dep+item.no}name={item.name} no={item.no} dep={item.dep} parent={this} isSelected={item.isSelected} msg={1} color={"#FF8F59"} info={1} float={"left"} width={"30%"}></Course>

            })}
                </Drawer>

            </div>  

           

            <Divider></Divider>
            <Select onChange={this.handleChange}
                closeMenuOnSelect={false}
                isMulti
                options={options}
            />

            <Divider>Classes</Divider>



            {
                arr3.map(item =>
                //todo: search
                {
                    return <Course key={item.dep+item.no} name={item.name} no={item.no} dep={item.dep} parent={this} isSelected={item.isSelected} msg={item.msg} info={0} ></Course>
                })}
            <Divider></Divider>
        </div>


    }
}



export default Clist;