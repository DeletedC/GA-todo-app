const React = require('react');
const Layout = require('../views/components/Layout.jsx');

class Index extends React.Component {
    render() {

        const {todoList} = this.props;

        const emptyNotice = (
            <h3>There are no todos</h3>
        );
        
        return (
            <Layout>
                <h1>To Do List</h1>
                
                {/* Display empty notice if list is empty */}
                {todoList.length === 0? emptyNotice : ""}
                <ul>
                    {todoList.map((item, index) => {
                        return (
                                <li key={index}>{item.todo}
                                    <form action={`/todo/${item._id}?_method=DELETE`} method="post">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </li>
                        );
                    })}
                </ul>
                
                <hr></hr>
                
                <form action="/todo" method="POST">
                    <input type="text" name="todo" required/>
                    <input type="submit" value="Add To Do"/>
                </form>
            </Layout>
        );
    };
};

module.exports = Index;