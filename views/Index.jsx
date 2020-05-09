const React = require('react');
const Default = require('./Default');

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
                return (
                <li>{item.name}: {done}
                <form action={`/?_method=DELETE`} method='POST'>
                    <input type="submit" name={item._id} value='DELETE'/>
                </form>
                </li>
                )
            })
        }
        return (
            <Default>
                <div>
                    <h1>To Do List</h1>
                    <ul>
                    {list}
                    </ul>
                    <hr/>
                    <form action="/" method="POST">
                        <input type="text" name='name' required/>
                        Done: <input type="checkbox" name='done'/>
                        <input type="submit" value='ADD TO DO'/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Index;