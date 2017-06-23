import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
require('gitgraph.js/src/gitgraph.js');

export default class ReactGitGraph extends React.Component{
  constructor(props){
    super(props);
    this.state={
        gitgraph: null
    };
    this.commit = this.commit.bind(this);
  };

  componentDidMount() {
      let options = {
          ...this.props.options,
          canvas: this.canvas
      };
      let gitgraph = this.props.gitgraph || new GitGraph(options);

      this.setState({
          gitgraph: gitgraph
      });
  }

  commit(){
      let gitgraph = this.state.gitgraph;
      gitgraph.commit();
      this.setState({
          gitgraph: gitgraph
      });
  }

  render(){
    let {gitgraph} = this.state;
    if(gitgraph){
        let master = gitgraph.branch("master");
        gitgraph.commit().commit().commit();         // 3 commits upon HEAD
        let develop = gitgraph.branch("develop");    // New branch from HEAD
        let myfeature = develop.branch("myfeature"); // New branch from develop
        let hotfix = gitgraph.branch({
            parentBranch: develop,
            name: "hotfix",
            column: 2             // which column index it should be displayed in
        });
    }

    return(
      <canvas id="gitGraph" ref={(canvas) => { this.canvas = canvas; }}></canvas>
    );
  }
}

ReactGitGraph.propTypes = {
    options: PropTypes.object.isRequired,
    graph: PropTypes.object,
    gitgraph: PropTypes.object
};
