import React from 'react'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()//将跳转等默认的行为静止掉
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}> 
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => {this.textInput = textInput}}
                        //ref接受一个回调函数,参数为对应的DOM节点，将textInput赋值到class的一个变量上
                        //此方法可以拿到DOM节点
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
                 <p>已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }
}
export default CommentBox