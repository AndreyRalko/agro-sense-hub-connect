
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Settings, User, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-agro-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-agro-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-agro-900">Smart Centre</h1>
                <p className="text-xs text-agro-600">ООО "АгроТех"</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-agro-700" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 text-white">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-agro-700" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-agro-700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
