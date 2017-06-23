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
      let gitgraph = new GitGraph(options);
      this.props.initializeGraph(gitgraph);

      this.setState({
          gitgraph: gitgraph
      });
  }

  getGitGraph(){
    return this.state.gitgraph;
  }

  initializeGraphInner(){
    let gitgraph = this.state.gitgraph;
    this.props.initializeGraph(gitgraph);
    this.setState({
      gitgraph: gitgraph
    })
  }

  commit(){
      let gitgraph = this.state.gitgraph;
      gitgraph.commit();
      this.setState({
          gitgraph: gitgraph
      });
  }

  render(){
    return(
      <canvas id="gitGraph" ref={(canvas) => { this.canvas = canvas; }}></canvas>
    );
  }
}

ReactGitGraph.propTypes = {
    options: PropTypes.object.isRequired,
    graph: PropTypes.object,
    gitgraph: PropTypes.object,
    initializeGraph: PropTypes.func.isRequired
};
