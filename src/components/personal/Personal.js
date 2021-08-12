import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';





class Personal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            contact: '',
            email: '',
            address: '',
            imgrationStatus: '',
            personalSummary: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            fullName: e.target.value,
        })
        console.log(e.target.value)

    }
    
    onSubmitForm = (e) => {
        e.preventDefault()

        this.setState({
            fullName: this.state.fullName
        })
    }

    
    render() {
        const { fullName } = this.state;

        return (
            <>
              <form onSubmit={this.onSubmitForm}> 
                <TextField
                    onChange={this.handleChange} 
                    label="Full Name"
                    value={fullName}
                    variant="outlined"
                    fullWidth
                />  
                  
               <Button type="submit" variant="contained" color="primary">Submit</Button>
              </form>  
            </>
        )
    }
}

export default Personal
