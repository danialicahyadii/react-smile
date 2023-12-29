import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component{
  // state = {
  //   email: "",
  //   password: "",
  //   emailError: '',
  //   passError: '',
  //   details: "",
  //   age:"",
  // }

  // validate(){
  //   if(!this.state.email>0 && !this.state.password>0){
  //     this.setState({emailError: "Masukkan Email",passError: "Masukkan Password"})
  //   }else if(!this.state.email>0){
  //     this.setState({emailError: "Masukkan Email"})
  //   }else if(!this.state.password>0){
  //     this.setState({passError: "Masukkan Password"})
  //   }
  //   else{
  //     return true
  //   }
  // }
  
  // formSubmit = (e) => {
  //   e.preventDefault()
  //   if(this.validate()){
  //     alert("Form Submit Done")
  //   }
  // }

  render(){
    // const names = [
    //   {name: 'Dani', age: '22', grade: 3.71},
    //   {name: 'Gilang', age: '23', grade: 3.89},
    //   {name: 'Ruth', age: '27', grade: 3.91},
    // ]
    // const items = names.map((item, index)=>{
    //   return <li key={index} class="list-item mb-1">
    //     Name : {item.name}, Age : {item.age}, Grade : {item.grade} <button class="btn btn-sm btn-info">Edit</button> | <button class="btn btn-sm btn-danger">Delete</button>
    //   </li>
    // })
    return (
      <div className='App' style={{ marginLeft:200 }}>
        {/* <div style={{ marginLeft:200}}>
          <h1>Login Panel</h1>
          <form onSubmit={this.formSubmit}>
            <div class="form-group">
              <label>Email : </label> <br/>
              <input type="email" onChange={(e)=>{this.setState({email:e.target.value})} } name="email"></input>
              <strong style={{ color:'red' }}> {this.state.emailError}</strong>
              <br/>
              <label>Password : </label> <br/>
              <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} name="password"></input>
              <strong style={{ color:'red' }}> {this.state.passError}</strong>
              <br/>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div style={{ marginLeft:200}}>
              <label>Details : </label> <br/>
              <textarea onChange={(e)=>{this.setState({details:e.target.value})}}>write on here</textarea>
              <h6>{this.state.details}</h6>
              <br/>
              <h1>Select Option</h1>
              <label>Your Age : </label> <br/>
              <select onChange={(e)=>{this.setState({age:e.target.value})}}>
                <option value="" disabled selected>select your age</option>
                <option value="15-20">15 - 20</option>
                <option value="21-25">21 - 25</option>
                <option value="26-30">26 - 30</option>
              </select>
              <br/>
              <h6>My Age : {this.state.age}</h6>
        </div> */}
        {/* <div style={{ marginLeft:200}}>
              <h1>Student List</h1>
              {items}
        </div> */}
        <h1>This is Home component</h1>
      </div>
    )
  }
}