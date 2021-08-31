import React from 'react'



export class Reguser extends React.Component{
    
    handleChange = (event : any) => {}
    handleSubmit = (event : any) => {}
    constructor(props:any) {
        super(props);
        const initialState = {
           username : '',
           email : '',
           password : '',
           errors : {
             username : '',
             email : '',
             password : ''
           } 
         }
         this.state = initialState;
         this.handleChange = this.handleChange.bind(this);
   }
   
    render() {
       return (

<div className='wrapper'>
 <div className='form-wrapper'>

<h2>Sign Up</h2>
<form onSubmit={this.handleSubmit} noValidate >
 <div className='fullName'>
    <label htmlFor="fullName">Full Name</label>
     <input type='text' name='fullName' onChange=            {this.handleChange}/>
            </div>

      <div className='email'>
      <label htmlFor="email">Email</label>
      <input type='email' name='email' onChange={this.handleChange}/>
     </div>

      <div className='password'>
      <label htmlFor="password">Password</label>
      <input type='password' name='password' onChange={this.handleChange}/>
        </div>   

      <div className='submit'>
      <button>Register Me</button>
       </div>

            </form>
        </div>
     </div>
    );
   }
  }

export default Reguser;