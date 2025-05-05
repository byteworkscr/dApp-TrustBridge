"use client";

import { ChatDialog } from "@/components/modules/chat/ui/dialogs/ChatDialog";

export default function ChatPage() {
  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-56px)] w-full">
      <ChatDialog />
    </div>
  );
}
