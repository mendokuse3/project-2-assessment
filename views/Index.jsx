const React = require('react');

class Index extends React.Component{
    render(){
        const toDos = this.props.foundTodos;
        let list;
        if (toDos.length === 0){
            list = <h3>There are no To Dos Yet</h3> 
        } else {
            list = toDos.map(item => {
                let done;
                item.done === true ? done = 'done' : done = "not done"
                return <li>{item.name}: {done}</li>;
            })
        }
        return (
            <>
                <div>
                    <h1>To Do List</h1>
                    {list}
                    <hr/>
                    {/* <form action=""></form> */}
                </div>
            </>
        )
    }
}

module.exports = Index;