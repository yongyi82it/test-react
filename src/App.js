import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './style.css';

/*
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!fff</h2>
    </div>
  );
}
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'world wide web!!!!!!'},
      welcome:{title:'Welcome',desc:'Hello,React!!!'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for infomation'},
        {id:2,title:'CSS',desc:'CSS is design'},
        {id:3,title:'JS',desc:'JavaScript is for interaction'}
      ]
    }
  }

  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} disc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      var i=0;
      while(i<this.state.contents.length){
        var data=this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }
      _article = <ReadContent title={_title} disc={_desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article = <CreateContent></CreateContent>
    }

    return (
      <div className="App">
        
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangPage={function(){
            this.setState({mode:'welcome'})
          }.bind(this)}>  
        </Subject>
        <Control onChangMode={function(_mode){
          this.setState({mode:_mode});
        }.bind(this)}></Control>
        <TOC 
          onChangPage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        
        {_article}
      </div>
    );
  }
}
export default App; 
/*추가수정111111111*/ 

