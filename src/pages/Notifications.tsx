
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'warning',
      title: 'Низкий уровень топлива',
      message: 'Трактор МТЗ-82 требует дозаправки',
      time: '5 минут назад',
      read: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Погодные условия',
      message: 'Ожидается дождь в течение 2 часов',
      time: '30 минут назад',
      read: false
    },
    {
      id: 3,
      type: 'success',
      title: 'Задача выполнена',
      message: 'Посев на поле №7 завершен успешно',
      time: '2 часа назад',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-agro-900">Уведомления</h1>
        <Badge className="bg-red-100 text-red-800">
          {notifications.filter(n => !n.read).length} новых
        </Badge>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`p-4 border-agro-200 ${
              !notification.read ? 'bg-blue-50 border-l-4 border-l-blue-500' : 'bg-white'
            }`}
          >
            <div className="flex items-start space-x-3">
              {getIcon(notification.type)}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-agro-900">{notification.title}</h3>
                  <span className="text-sm text-agro-600">{notification.time}</span>
                </div>
                <p className="text-agro-700 mt-1">{notification.message}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
