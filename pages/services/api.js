import axios fron "axios";

export const api = axios.created ({
    baseURL: 'https://cmptkglryinbhikleiax.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtcHRrZ2xyeWluYmhpa2xlaWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNjgwNTQsImV4cCI6MjAxMTc0NDA1NH0.E-WS-9x2_eUabQU6vkqaIeAPfCcxOkHC0tCjFp63pFs",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtcHRrZ2xyeWluYmhpa2xlaWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNjgwNTQsImV4cCI6MjAxMTc0NDA1NH0.E-WS-9x2_eUabQU6vkqaIeAPfCcxOkHC0tCjFp63pFs"
    }
})