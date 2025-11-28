'use client';

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 사이드바 */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 헤더 */}
        <Header onMenuToggle={handleMenuToggle} />

        {/* 페이지 콘텐츠 */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
