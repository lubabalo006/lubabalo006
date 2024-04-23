import { useEffect, useState } from "react";

const ApiData = () => {
    const [data, setData] = useState<Array<any>>([]); // Specify the type as Array<any>

    useEffect(() => {
        const startDate = new Date("2024-04-01");
        const endDate = new Date("2024-04-09");

        const fetchCurrencyData = async () => {
            const promises = [];
            for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
                const dateString = date.toISOString().slice(0, 10);
                const apiUrl = `https://api.freecurrencyapi.com/v1/historical?apikey=fca_live_CdiqhZ2CxxjCMJl8utS2CaN9iHk7dee10JtiWxNg&date=${dateString}&base_currency=USD&currencies=ZAR,EUR`;
                promises.push(fetch(apiUrl).then(response => response.json()));
            }
            
            try {
                const results = await Promise.all(promises);
                setData(results);
                console.log(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCurrencyData();
    }, []);

    console.log(data);

    return data;
};

export default ApiData;
