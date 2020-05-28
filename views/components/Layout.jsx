const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                <link href="/css/style.css" rel="stylesheet"/>
                    <title>To Do List</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    };
};

module.exports = Layout;