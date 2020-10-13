import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Fr5WOly263zMDFAc6lXYBMGSsPqWN1XVpNrAed37l2c'
    }
})