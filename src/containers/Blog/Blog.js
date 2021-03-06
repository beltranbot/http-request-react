import React, { Component } from 'react'
import './Blog.css'
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
// import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import {Route, NavLink, Switch} from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'

const asyncNewPost = asyncComponent(() => import('./NewPost/NewPost')) 

class Blog extends Component {
    state = { auth: true }

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
                                component={asyncNewPost} />
                            : null
                    }
                    <Route
                        path="/posts"
                        component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/* <Redirect from="/" to="posts" /> */}
                    {/* <Route
                        path="/"
                        component={Posts} /> */}
                </Switch>
            </div>
        )
    }
}

export default Blog