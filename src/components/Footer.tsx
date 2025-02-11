
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {currentYear} 梦笔笙花工作室. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
