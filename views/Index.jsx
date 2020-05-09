const React = require('react');

class Index extends React.Component{
    render(){
        const toDos = this.props.foundTodos;
        let list;
        toDos.length === 0 ? list = <h2>'There are no To Dos Yet'</h2> : list = toDos.map(item => {return <li>{item.name}: {item.done}</li>});
        return (
            <>
                <div>
                    <h1>To Do List</h1>
                    {list}
                </div>
            </>
        )
    }
}

module.exports = Index;