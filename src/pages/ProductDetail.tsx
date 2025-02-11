
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>产品不存在</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <p>发布日期: {product.releaseDate}</p>
            <p>更新日期: {product.updateDate}</p>
            <p>发布者: {product.publisher}</p>
          </div>
          <div className="mb-6">
            <img
              src={product.preview}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
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
