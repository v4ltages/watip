import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
    const [weather, setWeather] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await axios.get('https://wttr.in?format=3'); 
                setWeather(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return (
        <motion.div whileHover={{ scale: 1.05 }}>{weather}</motion.div>
    );
};
