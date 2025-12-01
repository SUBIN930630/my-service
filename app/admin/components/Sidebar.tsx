'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    label: '홈 (대시보드)',
    href: '/admin',
    icon: '📊'
  },
  {
    label: '실시간 모니터링',
    href: '/admin/monitoring',
    icon: '📡'
  },
  {
    label: '고객 분석',
    href: '/admin/customers',
    icon: '👥'
  },
  {
    label: '매출 분석',
    href: '/admin/revenue',
    icon: '💰'
  },
  {
    label: 'AI 모니터링',
    href: '/admin/ai-monitoring',
    icon: '🤖'
  },
  {
    label: '리스크 관리',
    href: '/admin/risk',
    icon: '⚠️'
  },
  {
    label: '설정',
    href: '/admin/settings',
    icon: '⚙️'
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* 모바일 배경 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={onClose}
        ></div>
      )}

      {/* 사이드바 */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out md:relative md:transform-none z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } pt-20 md:pt-0`}
      >
        <nav className="flex flex-col h-full">
          {/* 메뉴 아이템 */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* 하단 영역 */}
          <div className="border-t border-gray-200 p-4">
            <div className="text-xs text-gray-600 space-y-3">
              <div className="px-4 py-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">🎯 팁</p>
                <p>대시보드에서 실시간으로 KPI를 모니터링하세요.</p>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};
