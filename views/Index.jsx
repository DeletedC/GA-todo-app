const React = require('react');

class Index extends React.Component {
    render() {

        const {todoList} = this.props;

        return (
            <>
            <h1>Todo List</h1>
            <ul>
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