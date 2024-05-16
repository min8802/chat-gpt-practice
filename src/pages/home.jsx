import { useState } from "react";

const Home = () => {

    const [content, setContent] = useState("값을 입력하세요");
    const inputChange = (e) => {
        setContent(e.target.value);
        console.log(e.target.value);
    }

    const getGPT = async () => {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions", {
                "model": "gpt-3.5-turbo",
                "messages": [
                { 
                    "role": "user",
                    "content":"안녕하세요", 
                }
            ],
            }, {
                headers : {
                    "Content-Type" : "application/json",
                    Authorization : `Bearer ${import.meta.env.VITE_API_KEY}`,
                  },
            }
        );
    };

    

    return (
        <div className="flex justify-center mt-10">
            <form>
                <input className="w-80 h-10 mr-10" type="text" onChange={inputChange}/>
                <button type="submit">
                    제출
                </button>
            </form>
        </div>
    );
};

export default Home;