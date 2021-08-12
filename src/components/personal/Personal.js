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
        const { fullName, contact } = this.state;

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
                  <TextField 
                    label="contact"
                    defaultValue={contact}
                    variant="outlined"
                    fullWidth
                /> 
                <TextField 
                    label="email"
                    defaultValue={this.state.email}
                    variant="outlined"
                    fullWidth
                /> 
                <TextField 
                    label="address"
                    defaultValue={this.state.address}
                    variant="outlined"
                    fullWidth
                />  
                <TextField 
                    label="Imagration Status"
                    defaultValue={this.state.imgrationStatus}
                    variant="outlined"
                    fullWidth
                /> 
                <TextField 
                    label="Imagration Status"
                    defaultValue={this.state.imgrationStatus}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                /> 
               <Button color="primary">Submit</Button>
              </form>  
            </>
        )
    }
}

export default Personal
