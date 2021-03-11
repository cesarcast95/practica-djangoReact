import React from 'react';
import axios from 'axios';

import Article from '../components/Article';
import CustomForm from '../components/Form';

class ArticleList extends React.Component {

    state = {
        articles: []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Article data={this.state.articles} />
                <br />
                <h2>Crear un artículo</h2>
                <CustomForm
                    requestType="post"
                    articleID={null}
                    btnText="Crear" />
            </div>
        );
    }
}
export default ArticleList;