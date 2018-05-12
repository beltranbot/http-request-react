import React, {Component} from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'

import './Post.css'

class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id })
    }

    async componentDidMount() {
        const response = await axios.get('/posts')
            // .catch(error => this.setState({ error: true }))
            .catch(err => console.log(err))
        if (!response) return
        const posts = response.data.slice(0, 4)
        const updatedPost = posts.map(p => ({ ...p, author: 'max' }))
        this.setState({ posts: updatedPost })
    }

    render () {
        let posts = (
            <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        )

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                )
            })
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}
export default Posts