import React from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, removeTask } from './actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      error: false,
      updateMode: false,
      updateIndex: 0,
      updateText: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleUpdate = (event) => {
    this.setState({updateText: event.target.value});
  }

  editTask = (index, text) => {
    this.setState({
      updateMode: true,
      updateIndex: index,
      updateText: text
    });
  }

  saveTask = () => {
    this.setState({
      updateMode: false
    })
  }

  handleSubmit = () => {
    if(this.state.value === ''){
      this.setState({
        error: true
      });
    } else {
      this.setState({
        value: '',
        error: false
      });
      this.props.addTask(this.state.value);
    }
  }

  render(){
    const list = this.props.tasklist.map((item,index) => {
      return(
        <tr key={index} >
          <td>{(this.state.updateMode && this.state.updateIndex === index) ? <input value={this.state.updateText} type="text" onChange={this.handleUpdate} /> : item}</td>
          <td>{ (this.state.updateMode && this.state.updateIndex === index) ? <button onClick={() => this.saveTask()}>Update</button> : <button onClick={() => this.editTask(index,item)}>Edit</button>}</td>
          <td><button onClick={() => this.props.removeTask(index)}>X</button></td>
        </tr>
      )
    });
    return (
      <div className="App">
        <h1>Hello, you have {this.props.tasklist.length === 1 ? this.props.tasklist.length + " thing": this.props.tasklist.length + " things"} to do.</h1>
        <h4>Add Task</h4>
        <input value={this.state.value} type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add Task</button>
        <h4 style={{color: 'red'}}>{this.state.error ? "No task entered" : ""}</h4>
        <table>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    isLogged: state.isLogged,
    tasklist: state.tasklist
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTask,
    removeTask,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
