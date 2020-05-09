const React = require('react')

class Default extends React.Component{
    render(){
        return (
            <html>
                <link rel="stylesheet" href="/stylesheets/style.css"/>
            <body>
                {this.props.children}
            </body>
            </html>
        )
    }
}

module.exports = Default;