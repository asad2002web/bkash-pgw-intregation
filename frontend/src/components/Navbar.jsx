import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">b
                    <span className="text-red-500">Kash</span>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/about" className="text-white">About</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                </div>
            </div>
        </nav>
    )
}
