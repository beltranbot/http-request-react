import React, { Component } from 'react'
import axios from '../../../axios'

import './FullPost.css'

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    async componentDidMount () {
        this.loadData()
    }

    async componentDidUpdate () {
        this.loadData()
    }

    async loadData () {
        const post_id = this.props.match.params.id
        if (!post_id) return
        if (this.state.loadedPost
            && (!this.state.loadedPost
                || this.state.loadedPost.id === +post_id)) return

        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/' + post_id
        )
        this.setState({ loadedPost: response.data })
    }

    deletePostHandler = async () => {
        const post_id = this.props.match.params.id
        const response = await axios.delete(
            'https://jsonplaceholder.typicode.com/posts/' + post_id
        )
        console.log(response)
    }

    render () {
        const post_id = this.props.match.params.id
        let post = (
            <p style={{textAlign: 'center'}}>
                Please select a Post!
            </p>
        )

        if (post_id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                            className="Delete"
                            onClick={this.deletePostHandler}>
                                Delete
                        </button>
                    </div>
                </div>
            )
        }
        
        return post
    }
}

export default FullPost