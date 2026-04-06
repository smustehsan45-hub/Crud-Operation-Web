require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require ("./router/contact-router")
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router")
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');
// lets use cors to allow cross-origin requests
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET, POST, DELETE, PUT, PATCH, HEAD',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)

// lets define admin route
app.use("/api/admin",adminRoute)

app.use(errorMiddleware)

const PORT=3000;
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
})         