import React from 'react';
import ReactDOM from 'react-dom';
import GitGraph from '../../src/GitGraph';

class App extends React.Component{
  constructor(props){
    super(props);
    this.initializeGraph = this.initializeGraph.bind(this);
    this.onChangeGraph = this.onChangeGraph.bind(this);
  }

  componentDidMount(){

  }

  onChangeGraph(){
    this.gitgraph.getGitGraph().commit();
  }

  initializeGraph(gitgraph){
    let master = gitgraph.branch("master");
    gitgraph.commit().commit().commit();         // 3 commits upon HEAD
    let develop = gitgraph.branch("develop");    // New branch from HEAD
    let myfeature = develop.branch("myfeature"); // New branch from develop
    let hotfix = gitgraph.branch({
        parentBranch: develop,
        name: "hotfix",
        column: 2             // which column index it should be displayed in
    });
    gitgraph.commit().commit().commit();
    master.commit().commit().commit();
  };

  render(){
    return(
      <div>
        <GitGraph
          initializeGraph={this.initializeGraph}
          ref={(gitgraph)=>{this.gitgraph=gitgraph}}
          options={{
                template: "metro",
                reverseArrow: false,
                orientation: "horizontal",
                mode: "compact"}}    />
          <button onClick={this.onChangeGraph}>Change</button>
      </div>

    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
