import { Book, Home, BookOpen, List, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { tableOfContents } from '@/data/tableOfContents';

export const Sidebar = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Glossary', href: '/glossary', icon: BookOpen },
    { name: 'Quick Reference', href: '/reference', icon: List },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      {/* Header */}
      <div className="border-b p-6 bg-gradient-to-br from-primary to-secondary">
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-primary-foreground" />
          <span className="font-bold text-lg text-primary-foreground">CLDV Study Guide</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        {/* Main Navigation */}
        <div className="space-y-1 mb-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Table of Contents */}
        <div>
          <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Chapters
          </h3>
          <div className="space-y-1">
            {tableOfContents.map((chapter) => {
              const isActive = location.pathname === `/chapter/${chapter.slug}`;
              return (
                <Link
                  key={chapter.number}
                  to={`/chapter/${chapter.slug}`}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <div className="font-medium">
                    Ch {chapter.number}: {chapter.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {chapter.description}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <HelpCircle className="h-4 w-4" />
          <span>Based on J. Scott Long's textbook</span>
        </div>
      </div>
    </div>
  );
};
