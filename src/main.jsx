import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/route';
import AuthProvider from './providers/Auth/AuthProvider'
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './providers/Theme/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={route} />
        <Toaster position='top-right' reverseOrder={false} />
      </AuthProvider>
    </ThemeProvider>
    
  </StrictMode>,
)
