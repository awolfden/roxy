import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EmailCapture extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
        }
    }

    useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '15px'
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
        },
        dense: {
          marginTop: theme.spacing(2),
        },
        menu: {
          width: 200,
        },
      }));

    handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = async (formData, e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData));
        // const urlEncObj = this.JSON_to_URLEncoded(formData);
        // console.log(urlEncObj);

        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwk6luus1PihIxp6fDMMd5-nZuDyFJNq6VgRygE8ccXhudSXME/exec", {
                method: 'POST',
                // body: JSON.stringify("{\"name\":[\"adam\"],\"email\":[\"awolfmil@gmail.com\"]}"),
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.status !== 200){
              throw(Error(response.statusText));
            }
            const parsedResponse = await response.json();
            console.log(parsedResponse);

            document.getElementById('form').reset();
            document.getElementById('emailForm').style.display = 'none';

        } catch (err) {
            console.log(err);
        }

    }
        

    render(){
        const classes = this.useStyles;
        
        return(
            <div id="emailForm" style={{display:'flex', justifyContent: 'center', marginBottom: '35px'}}>
                <div style={{width: '65%'}}>
                <h2 style={{textAlign: 'center'}}>Join the mailing list for 10% off your next order!</h2>
                <form 
                    id={'form'}
                    style={{display: 'flex', flexDirection: 'column'}}
                    noValidate autoComplete="off"
                    onSubmit={this.handleSubmit.bind(null, this.state)}
                    >
                    
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        name="name"
                    />
                    <TextField
                        id="outlined-name"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        name="email"
                    />
                    
                    
                    <Button type="submit" variant="outlined" className={classes.button}>
                        Submit
                    </Button>
                </form>
                </div>
            </div>
        )
    
    }
}

export default EmailCapture;