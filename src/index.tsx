import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Reset } from 'styled-reset'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <Reset />
                <App />
            </QueryClientProvider>
        </Router>
    </React.StrictMode>
)
