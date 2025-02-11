
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const members = [
    {
      id: 1,
      nickname: "创始人",
      joinDate: "2024-02-11",
      position: "管理员",
      status: "在职",
      bio: "工作室创始人简介",
      details: "更详细的个人介绍..."
    },
    // Add more team members as needed
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-center mb-8"
      >
        成员公示
      </motion.h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {members.map((member) => (
          <motion.div
            key={member.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="font-bold text-xl mb-2">{member.nickname}</h2>
                <p className="text-gray-500 text-sm mb-1">
                  加入日期: {member.joinDate}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  职位: {member.position}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  状态: {member.status}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMember?.nickname}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-500 text-sm mb-1">
              加入日期: {selectedMember?.joinDate}
            </p>
            <p className="text-gray-500 text-sm mb-1">
              职位: {selectedMember?.position}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              状态: {selectedMember?.status}
            </p>
            <p className="text-gray-600">{selectedMember?.details}</p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Team;
