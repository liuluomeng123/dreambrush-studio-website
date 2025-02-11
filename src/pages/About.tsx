
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">关于我们</h1>
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <p className="text-gray-600 mb-4">
            梦笔笙花工作室是一个充满创意和激情的团队，致力于为用户提供优质的产品和服务。
          </p>
          <p className="text-gray-600 mb-4">
            我们的团队由来自不同领域的专业人士组成，包括设计师、开发者和内容创作者。
            我们相信通过协作和创新，可以创造出卓越的作品。
          </p>
          <p className="text-gray-600">
            成立至今，我们始终坚持以用户为中心，不断追求进步和突破，
            致力于为每一位用户带来独特而优质的体验。
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
