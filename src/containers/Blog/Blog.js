import React, { Component } from 'react'
import './Blog.css'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

class Blog extends Component {
    state = { auth: false }
    render () {        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { 
                        this.state.auth ? 
                            <Route
                                path="/new-post"
                                exact
                                component={NewPost} />
                            : null
                    }
                    <Route
                        path="/posts"
                        component={Posts} />
                    <Redirect from="/" to="posts" />
                    {/* <Route
                        path="/"
                        component={Posts} /> */}
                </Switch>
            </div>
        )
    }
}

export default Blog