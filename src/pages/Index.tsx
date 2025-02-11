
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            梦笔笙花工作室
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            创造独特的数字体验，让每个项目都成为艺术品
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">创新设计</h3>
              <p className="text-gray-600">
                将创意转化为现实，打造独特的用户体验
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">专业团队</h3>
              <p className="text-gray-600">
                经验丰富的团队，确保每个项目的完美执行
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">品质保证</h3>
              <p className="text-gray-600">
                注重细节，追求卓越，为客户提供最好的服务
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
