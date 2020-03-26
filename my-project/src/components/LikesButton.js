import React from 'react';
import { render } from '@testing-library/react';

class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }
    increaseLikes() {
        this.setState( {
            likes: ++this.state.likes
        } )//里面传入的是一个参数，这个参数是一个object，指代的是this.state
    }
       
    render() {
        return (
            <div className="likes-button-component">
                <button 
                    type="button" 
                    onClick={()=> { this.increaseLikes() }}
                    className="btn btn-outline-primary btn-lg"
                >
                [强] {this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButton