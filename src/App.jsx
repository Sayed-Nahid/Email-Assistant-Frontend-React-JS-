import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Box, Container, Typography } from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
      <Container maxWidth="md" sx={{py:4}}>
        <Typography variant='h3' component="h1" gutterBottom>
          Generate Email Reply Here:
        </Typography>
        <Box sx={{ mx: 3 }}>
          <TextField 
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb:2 }}/>
        </Box>
      </Container>
  )
}

export default App
