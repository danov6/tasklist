// import React from 'react';

// class TodoControls extends React.Component {

//     state = {
//         input: ''
//     };
  
//     handleChange = (event) => {
//       this.setState({input: event.target.value});
//     }
  
//     handleSubmit = (event) => {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }