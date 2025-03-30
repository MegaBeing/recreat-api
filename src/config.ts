import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT
}

export const allowedOrigins = [
    'https://re-create-khaki.vercel.app/',
]