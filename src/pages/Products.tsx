import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const products = [
  {
    id: 1,
    title: "示例产品",
    releaseDate: "2024-02-11",
    version: "1.0.0",
    updateDate: "2024-02-11",
    publisher: "梦笔笙花工作室",
    previews: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "这是一个示例产品描述。",
    detailLink: "https://example.com"
  },
    // Add more products as needed
];

const Products = () => {
  const navigate = useNavigate();

  const handleViewDetail = (product: any) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-center mb-8">产品展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="font-bold text-xl mb-2">{product.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  发布日期: {product.releaseDate} · 版本: {product.version}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  更新日期: {product.updateDate} · 发布者: {product.publisher}
                </p>
                <img
                  src={product.previews[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button
                  className="w-full"
                  onClick={() => handleViewDetail(product)}
                >
                  查看详情
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
