
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const News = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const newsItems = [
    {
      id: 1,
      title: "工作室成立公告",
      date: "2024-02-11",
      author: "管理员",
      summary: "梦笔笙花工作室正式成立，开启新的篇章。",
      content: "详细的工作室成立公告内容..."
    },
    // Add more news items as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">新闻动态</h1>
      <div className="space-y-6">
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedNews(news)}
          >
            <h2 className="font-bold text-xl mb-2">{news.title}</h2>
            <p className="text-gray-500 text-sm">
              {news.date} · {news.author}
            </p>
            <p className="text-gray-600 mt-2">{news.summary}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl h-[calc(100vh-6cm)] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              {selectedNews?.title}
            </DialogTitle>
            <div className="text-center text-gray-500 text-sm mt-2">
              {selectedNews?.author} · {selectedNews?.date}
            </div>
          </DialogHeader>
          <div className="mt-6">{selectedNews?.content}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default News;
