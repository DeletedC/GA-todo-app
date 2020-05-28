const React = require('react');

class Index extends React.Component {
    render() {

        const {todoList} = this.props;

        const emptyNotice = (
            <h3>There are no todos</h3>
        );
        
        return (
            <>
            <h1>To Do List</h1>
            <ul>
                {todoList.length === 0? emptyNotice : ""}
                {todoList.map((item, index) => {
                    return (
                        <li>{item.todo}</li>
                    );
                })}
            </ul>
            </>
        );
    };
};

module.exports = Index;