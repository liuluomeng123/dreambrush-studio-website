
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">联系我们</h1>
      <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto gap-8">
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-bold text-xl mb-4">联系方式</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">QQ群</p>
                  <p className="text-gray-600">待添加</p>
                </div>
                <div>
                  <p className="font-semibold">微信公众号</p>
                  <p className="text-gray-600">梦笔笙花工作室</p>
                </div>
                <div>
                  <p className="font-semibold">电子邮箱</p>
                  <p className="text-gray-600">mengbishenghuagongzuoshi2024@163.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-bold text-xl mb-4">扫码关注</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-center mb-2">QQ群</p>
                  <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg"></div>
                </div>
                <div>
                  <p className="text-center mb-2">公众号</p>
                  <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
