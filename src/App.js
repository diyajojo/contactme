
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { send } from '@emailjs/browser';
import emailjs from '@emailjs/browser';


function App()
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state variable

  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    if (name.trim() === '' || email.trim() === '' || number.trim() === '' || message.trim() === '')
     {
      alert('Please fill in all the fields.');
      return;
    }
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Message:', message);

    const serviceID='service_199vne7';
    const templateId='template_i272ivw';
    const publicKey='dvpy4HwSXrz0wWyTh';
    
    const templateParams = 
    {
      name: name,
      email: email,
      number: number,
      message: message,
    };

    try
     {
      const response = await emailjs.send(serviceID, templateId, templateParams, publicKey);
      console.log("Message has been sent", response);
      setSubmitted(true);
    } 
    catch (error)
     {
      console.error("Message couldn't be sent ", error);
    }

    setSubmitted(true);
    setName('');
    setEmail('');
    setNumber('');
    setMessage('');
  }
   const resetName = (e) => {
    setName(e.target.value);
    }
   const resetEmail = (e) => {
    setEmail(e.target.value);
    }
   const resetNumber = (e) => {
    setNumber(e.target.value);
    }
   const resetMsg = (e) => {
    setMessage(e.target.value);
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#121212', color: '#e0e0e0' }}>
        <form onSubmit={handleSubmit}>
          <Card style={{ maxWidth: 450, padding: "20px 5px", backgroundColor: '#1e1e1e' }}>
            <Typography variant="h4" align='center' style={{ marginBottom: 10, color: '#ffffff' }}>
              CONNECT WITH ME
            </Typography>
            <Grid container spacing={2}>
              {!submitted && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      name='name'
                      onChange={resetName} 
                      label='Name'
                      placeholder='Enter your name'
                      variant='outlined'
                      value={name}
                      fullWidth
                      required
                      InputLabelProps={{ style: { color: '#e0e0e0' } }}
                      InputProps={{ style: { color: '#e0e0e0', backgroundColor: '#333333' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='email'
                      onChange={resetEmail}
                      type='email'
                      label='Email'
                      placeholder='Enter your email-id'
                      variant='outlined'
                      value={email}
                      fullWidth
                      required
                      InputLabelProps={{ style: { color: '#e0e0e0' } }}
                      InputProps={{ style: { color: '#e0e0e0', backgroundColor: '#333333' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='number'
                      onChange={resetNumber}
                      type='number'
                      label='Number'
                      placeholder='Enter your phone number'
                      variant='outlined'
                      value={number}
                      fullWidth
                      required
                      InputLabelProps={{ style: { color: '#e0e0e0' } }}
                      InputProps={{ style: { color: '#e0e0e0', backgroundColor: '#333333' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='message'
                      onChange={resetMsg}
                      type='text'
                      label='Message'
                      multiline
                      rows={6}
                      placeholder='Enter message here'
                      variant='outlined'
                      value={message}
                      fullWidth
                      required
                      InputLabelProps={{ style: { color: '#e0e0e0' } }}
                      InputProps={{ style: { color: '#e0e0e0', backgroundColor: '#333333' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' style={{ backgroundColor: '#3f51b5', color: '#ffffff' }} variant='contained' fullWidth disabled={submitted}>
                      Submit
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
        </Card>
      </form>
    </div>
  );
}


document.body.style.backgroundColor = 'black';
document.body.style.margin = '0';

export default App;
