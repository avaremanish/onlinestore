import axios from "axios"

const BASE_URL = "http://localhost:8000/api/"

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2I2Y2EzMTFjNjYzNGFkMzgzOWE1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg0MDQ3NywiZXhwIjoxNjU4MDk5Njc3fQ.lriFx-0VsIOfFp93xh0YEA3f0tE80YrvBvpoCrUNLSI";

export const publicRequest = axios.create({
    baseURL:  BASE_URL,
});

export const userRequest = axios.create({
    baseURL:  BASE_URL,
    header: {token: `Bearer${TOKEN}`}
});
