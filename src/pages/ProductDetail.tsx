
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

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <div>产品不存在</div>;
  }

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="outline"
        size="icon"
        className="absolute top-24 left-8"
        onClick={handleBack}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <p>发布日期: {product.releaseDate}</p>
            <p>更新日期: {product.updateDate}</p>
            <p>发布者: {product.publisher}</p>
          </div>
          <div className="mb-6">
            <Carousel className="w-full">
              <CarouselContent>
                {product.previews.map((preview: string, index: number) => (
                  <CarouselItem key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <img
                          src={preview}
                          alt={`${product.title} - 预览图 ${index + 1}`}
                          className="w-full h-auto rounded-lg cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-[90vw] max-h-[90vh]">
                        <img
                          src={preview}
                          alt={`${product.title} - 预览图 ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
