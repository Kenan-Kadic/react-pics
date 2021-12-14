import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.unsplash.com',
    headers: {
        Authorization: 'Client-ID DXS62BNm6mLX19_kqJmP2qI4eW-7G_SAuzhvC8iigFE'
    }
})