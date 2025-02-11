
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">
            梦笔笙花工作室
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-white/80 transition-colors ${
                isActive("/") ? "font-bold" : ""
              }`}
            >
              首页
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-white/80 transition-colors ${
                isActive("/about") ? "font-bold" : ""
              }`}
            >
              关于我们
            </Link>
            <Link
              to="/news"
              className={`text-white hover:text-white/80 transition-colors ${
                isActive("/news") ? "font-bold" : ""
              }`}
            >
              新闻动态
            </Link>
            <Link
              to="/products"
              className={`text-white hover:text-white/80 transition-colors ${
                isActive("/products") ? "font-bold" : ""
              }`}
            >
              产品展示
            </Link>
            <Link
              to="/team"
              className={`text-white hover:text-white/80 transition-colors ${
                isActive("/team") ? "font-bold" : ""
              }`}
            >
              成员公示
            </Link>
            <Link
              to="/contact"
              className={`text-white hover:text-white/80 transition-colors ${
                isActive("/contact") ? "font-bold" : ""
              }`}
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
