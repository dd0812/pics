import React from 'react';

class SeacrhBar extends React.Component{
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    state ={term : ''};

    onFormSubmit = (event) =>{   // one of the main advantage of arrow func is that it automatically binds the value of this for all of the code inside the func
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
        // console.log(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange={e=> this.setState({term : e.target.value})}
                        />                
                    </div> 
                </form>
            </div>    
        );
    }
}

export default SeacrhBar;