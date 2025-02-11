
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { products } from "./Products";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productFromState = location.state?.product;
  
  // Fallback to products array if state is not available
  const product = productFromState || 
    products.find(p => p.id === Number(location.pathname.split('/').pop()));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">产品不存在</h1>
        <Button onClick={() => navigate('/products')} className="mt-4">
          返回产品列表
        </Button>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <Button
          variant="outline"
          size="icon"
          className="fixed top-24 left-8 z-10"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <Card>
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <div className="text-sm text-gray-500 mb-4">
                <p>发布日期: {product.releaseDate}</p>
                <p>更新日期: {product.updateDate}</p>
                <p>发布者: {product.publisher}</p>
              </div>
              
              <div className="mb-6 relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.previews.map((preview: string, index: number) => (
                      <CarouselItem key={index}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src={preview}
                              alt={`${product.title} - 预览图 ${index + 1}`}
                              className="w-full h-64 object-cover rounded-lg cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                            <div className="w-full h-full flex items-center justify-center">
                              <img
                                src={preview}
                                alt={`${product.title} - 预览图 ${index + 1}`}
                                className="max-w-full max-h-[85vh] object-contain"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">产品简介</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <Button
                className="w-full"
                onClick={() => window.open(product.detailLink, "_blank")}
              >
                {product.detailLink.includes("http") ? "前往使用" : "下载使用"}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
