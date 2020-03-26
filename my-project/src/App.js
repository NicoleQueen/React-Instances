import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './components/CommentList'
import CommentBox from './components/CommentBox'
import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'

const themes = {
  light: {
    classname: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'

  },
  dark: {
    classname: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  },
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['This is my fiirst reply']
      
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })// [旧的comment, 新的comment] 将新的插入到旧的后面
  }
  render() {
    const { comments } = this.state
  return (
    <ThemeContext.Provider value={themes.light}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="#theme-switcher" className="btn btn-light">浅色主题</a>
        <a href="#theme-switcher" className="btn btn-secondary">深色主题</a>
      </header>
      <ThemedBar/>
      <CommentList comments={comments}/>
      <CommentBox 
        commentsLength={comments.length}
        onAddComment={this.addComment}
      />
    </div>
    </ThemeContext.Provider>
  );
}
}

export default App;
