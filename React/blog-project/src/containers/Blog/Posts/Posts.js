import React, { Component } from 'react';
import Post from "../../../components/Post/Post";
import axios from "axios";
import "./Posts.css";
import { Route, Link } from 'react-router-dom';
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: []
    };


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }


    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    };

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    };

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link key={post.id} to={'/posts/' + post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    { posts }
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;