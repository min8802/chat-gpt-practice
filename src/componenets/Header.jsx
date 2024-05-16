import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center gap-8 text-2xl pt-4">
        <Link to={"/"}>질문하기</Link>
        <Link to={"chat-list"}>질문 리스트</Link>
        </div>
    );
};

export default Header;