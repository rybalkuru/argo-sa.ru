import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    fetch("http://bird.7host.ru:5050/test_api")
        .then((res) => res.json())
        .then((data: any) => {
            return response.json(data);
        });
}
