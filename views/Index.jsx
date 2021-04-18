const React = require('react');
const Layout = require('../views/components/Layout.jsx');

class Index extends React.Component {
    render() {

        const {todoList} = this.props;
        console.log(todoList);

        const emptyNotice = (
            <h3>There are no todos</h3>
        );

        const noDatabaseNotice = (
            <div>
                <h3>The database is not connected.</h3>
                <p>Please try refreshing the page.</p>
            </div>
        );
        
        return (
            <Layout>
                <h1>To Do List</h1>
                
                {/* 
                Check for a database connection.
                If it's active, check for an empty list.
                Display empty notice if list is empty 
                */}

                {todoList == 'noDatabase'? noDatabaseNotice 
                : todoList.length === 0? emptyNotice 
                :

                // Show the todos and ADD buttons if everything is working
                <div>
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
                    
                    {/* Add todos here */}
                    <form action="/todo" method="POST">
                        <input type="text" name="todo" required/>
                        <input type="submit" value="Add To Do"/>
                    </form>
                </div>
                }
            </Layout>
        );
    };
};

module.exports = Index;