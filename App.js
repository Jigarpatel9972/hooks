import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  onChangeProcess(event){
    console.log("Event Target Name is " + event.target.name + "value is " + event.target.value);
  }
  render(){
    return(
      <>
      <input type="text" name="txt1" onChange={this.onChangeProcess.bind(this)}/></>
    );
  }
} */}

{/* class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { };
  }
  handleChange(event) {
    console.log(event.target.value);
  }
  render() {
    return(
      <>
      <input type="text" name="txt1" onChange={this.handleChange.bind(this)}/>
      </>
    );
  }
} */}

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {txt1: ""};
  }
  render() {
    return(
      <>
      <input type='text' onChange={(e)=> (this.setState({txt1: e.target.value}))}/>
      <br/>
      {this.state.txt1}
      </>
    );
  }
} */}

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { };
  }
  onChangeData(e) {
    var a = e.target.value;
    if(a % 4 == 0) {
      this.setState({msg:"year is leap year "});
    }else{
      this.setState({msg:"year is not leap year "});
    }
  }
  render() {
    return(
      <>
      year: <input type="text" name="txt1" autoComplete="off" onChange={this.onChangeData.bi}/>
      <br/>
      {this.state.msg}
      </>
    );
  }
} */}

{/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  onChangeData(e) {
    console.log(e.target.value);
    this.setState({ txt1: e.target.value});
}
onClickData() {
  var a = this.state.txt1;
  if(a % 4 == 0) {
    this.setState({msg:"year is leap year "});
  }else{
    this.setState({msg:"year is not leap year "});
  }
}
render() {
  return(
    <>
    year:<input type="text" name="text1" onChange={this.onChangeData.bind(this)}/>
    <input type="button" onClick={this.onClickData.bind(this)} value="click me"/>
    <br/>
    {this.state.msg}
    </>
  )
}
} */}

{/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt1: "", ans:"" };
  }
  onSumitData(e) {
    this.setState({ans: "ans is " + this.State.txt1});
    e.preventDefault();
  }
  render() {
    return(
      <>
      <form onSubmit={this.setState.bind(this)}>
      name:<input type="text"
      onChange={(e) => (this.setState({txt1:e.target.value}))} />
      <br/>
      <input type="submit"/>
      </form>
      {this.state.ans}  
      </>
    );
  }
} */}

{/* class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {txt1 : "", txt2 : ""}
  }
  handleChange1(event) {
    this.setState({txt1 : event.target.value});
  }
  handleChange2(event) {
    this.setState({txt2 : event.target.value});
  }
  handleSubmit(event) {
    alert(this.state.txt1 + this.state.txt2);
    event.preventDefault();
  }
  render() {
    return(
      <>
      <form onSubmit={this.handleSubmit.bind(this)}>
        Name : <input type="text" name="txt1" autoComplete="off" onChange={this.handleChange1.bind(this)}/> <br/>
        Surname : <input type="text" name="txt2" autoComplete="off" onChange={this.handleChange2.bind(this)}/> <br/>
        <input type="submit" value="Submit"/> <br/>
        txt1 : {this.state.txt1} <br/>
        txt2 : {this.state.txt2}
      </form>
      </>
    )
  }
} */}


{/* class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  doSum() {
    var a = parseInt(this.state.txt1);
    var b = parseInt(this.state.txt2);
    var c = a + b;
    this.setState({msg: "sum is " + c});
  }
  render() {
    return(
      <>
      N01 : <input type="text" onChange={(e) => this.setState({txt1: e.target.value})} name='txt1'/>
      N02 : <input type="text" onChange={(e) => this.setState({txt2: e.target.value})} name='txt2'/>
      <input type='button' value='sum' onClick={this.doSum.bind(this)}/>
      <br/>
      {this.state.msg}
      </>
    );
  }
} */}

{/*} class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {txt1: "",txt2: "",txt3: "",}
  }
  onChangeProcess(event) {
    this.setState({txt1: event.target.value});
  }
  onChangeProcess1(event) {
    this.setState({txt2: event.target.value});
  }
  onClickDatat(event) {
    var a = this.state.txt1;
    var b = this.state.txt2;
    var c = parseInt(a) + parseInt(b);
    this.setState({txt3: c});
    event.preventDefault();
  }
  render() {
    return (
      <>
      <form onSubmit={this.onClickDatat.bind(this)}/>
      <input type="text" oname='txt1'nChange={this.onChangeProcess.bind(this)} />
      <input type="text" name='txt2' onChange={this.onChangeProcess1.bind(this)} />
      {this.state.txt3}
      <input type="submit"/>
      <form/>
      </>
    );
  }

} */}

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {txt1 : "", txt2: "",txt3: ""}
  }
  handleChange(event) {
    this.setState({[event.target.name]:[event.target.value]}
    );
  }
  handleSubmit(event) {
    alert(this.state.txt1 + this.state.txt2 + this.state.txt3);
    event.preventDefault();
  }
  render(){
    return(
      <>
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}/>
        Name : <input type="text" name="txt1" autoComplete="off" onChange={this.handleChange.bind(this)}/> <br/>
        Surname : <input type="text" name="txt2" autoComplete="off" onChange={this.handleChange.bind(this)}/> <br/>
        Middle name :  <input type="text" name="txt3" autoComplete="off" onChange={this.handleChange.bind(this)}/> <br/>
        <input type="submit"/> <br/>
        txt1 is : {this.state.txt1}<br/>
        txt2 is : {this.state.txt2}<br/>
        txt3 is : {this.state.txt3}<br/>
      </div>
      </>
    );
  }
} */}
 

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {no1: "",n02:"",ans:""}
  }
  handleChange(event) {
    this.setState({[event.target.name]:[event.target.value]}
    );
  }
  handleSubmit(event) {
    var a = parseInt(this.state.no1)
    var b = parseInt(this.state.no2)
    var c = a + b;
    this.setState({ans : this.state.ans});
    alert("Ans is" + c);
    event.preventDefault();
  }
  render() {
    return(
      <>
      <form onSubmit={this.handleSubmit.bind(this)}>
        No1: <input type="number" name="no1" onChange={this.handleChange.bind(this)}/>
        No2: <input type="number" name="no2" onChange={this.handleChange.bind(this)}/>
        <input type="submit"/> <br/>
      </form>
      </>
    )
  }
} */}

{/* class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {txt1:"",txt2:"",ans:""};
  }
  onSubmitChange(e) {
    var no1 = this.state.txt1;
    var no2 = this.state.txt2;
    var c = parseInt(no1) + parseInt(no2);
    this.setState({ ans: "sum is " + c});
    e.preventDefault(); 
  }
  render(){
    return(
      <>
      <form onSubmit={this.onSubmitChange.bind(this)}>
        No1: <input type="text" onChange={(e) => (this.setState({txt1:e.target.value}))}/>
        <br/>
        No2: <input type="text" onChange={(e) => (this.setState({txt2:e.target.value}))}/>
        <br/>
        <input type="submit"/>
        </form>
        {this.state.ans}
        </>
    )
  }
} */}

{/* class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {studentName:""
      ,studentAge:""
      ,gender:""
      ,location:"Goa"
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
  render(){
    return(
      <>
      <h1>form</h1>
      <form>
        studentName: <input type="text" name="studentName" placeholder="Name" onChange={this.onChangeHandler}/>
        <br/>
        studentAge: <input type="text" name="studentAge" placeholder="Age" onChange={this.onChangeHandler}/>
        <br/>
        gender : male<input type="radio" name="gender" value="male" checked={this.state.gender == "male"} onChange={this.onChangeHandler}/>
        Female<input type="radio" name="gender" value="female" checked={this.state.gender == "female"} onChange={this.onChangeHandler}/>
        <br/>
        location: <select name="location" value={this.state.location} onChange={this.onChangeHandler}>
        <option value="">select</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Delhi">Delhi</option>
        <option value="Goa">Goa</option>
        <option value="Mumbai">Mumbai</option>
</select>
      </form>
      <>
      <pre>{JSON.stringify(this.state,null,2)}</pre></>
      </>
    );
  }
} */}

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {ans:""}
  }
  updateData(event){
    this.setState({[event.target.name]:[event.target.value]});
  }
  getsum() {
    var a = this.state.txt1;
    var b = this.state.txt2;
    var c = parseInt(a) + parseInt(b);
    this.setState({ans:"sum is:" + c});
  }
  getsub() {
    var a = this.state.txt1;
    var b = this.state.txt2;
    var c = parseInt(a) - parseInt(b);
    this.setState({ans:"sub is :"+c});
  }
  render() {
    return(
      <>
      No1: <input type="text" onChange={this.updateData.bind(this)}/>
      <br/>
      No2: <input type="text" onChange={this.updateData.bind(this)}/>
      <br/>
      <button onClick={this.getsum.bind(this)}>sum</button>
      <button onClick={this.getsub.bind(this)}>sub</button>
      <br/>
      {this.state.ans}
      </>
    );
  }
} */}

{/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {txt1value: '',ans:''};
  }
  onChangeHandle(event) {
    var myvalue = event.target.value;
    this.setState({txt1value: myvalue});
  }
  onSubmitHandle(event) {
    event.preventDefault();
    var year = parseInt(this.state.txt1value);
    if(year%4 == 0) {
      this.setState({ans: "year is leap year"})
    }else{
      this.setState({ans: "year is not a leap year"})
    }
  }
  render() {
    return(
      <>
      <form onSubmit={this.onSubmitHandle.bind(this)}>
        year: <input type="text" onChange={this.onChangeHandle.bind(this)} name="txt1" />
<input type="submit"/>
<br/>
{this.state.ans}
      </form>
      </>
    )
  }
} */}
 
//2nd method for calculator
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {ans:""};
  }

  updateData(event){
    this.setState({ans: event.target.value});
  }
  getAns(event){
    var a = this.state.txt1;
    var b = this.state.txt2;
    if(event.target.value == "sum")
    {
      let c = parseInt(a) + parseInt(b);
      this.setState({ans:"sum is: "+c});
    }else{
      let c = parseInt(a) - parseInt(b);
      this.setState({ans:"sum is: "+c});
    }
  }
  render(){
    return(
      <>
      No1: <input type="text" onChange={this.updateData.bind(this)}/>
      <br/>
      No2: <input type="text" onChange={this.updateData.bind(this)}/>
      <br/>
      <input type="button" onClick={this.getAns.bind(this)} value="sum"/>
      <input type="button" onClick={this.getAns.bind(this)} value="sub"/>
      <br/>
      {this.state.ans}
      </>
    )
  }
}

export default App;