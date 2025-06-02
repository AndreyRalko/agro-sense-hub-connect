
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Tractor, 
  Wheat, 
  MapPin,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  BarChart3,
  Settings,
  Bell
} from 'lucide-react';
import WeatherCard from '@/components/WeatherCard';
import FieldMap from '@/components/FieldMap';
import MachineryStatus from '@/components/MachineryStatus';
import YieldAnalytics from '@/components/YieldAnalytics';
import Header from '@/components/Header';

const Index = () => {
  const [notifications] = useState([
    { id: 1, type: 'warning', message: 'Поле №3 требует полива', time: '2 часа назад' },
    { id: 2, type: 'success', message: 'Сбор урожая на поле №1 завершен', time: '5 часов назад' },
    { id: 3, type: 'info', message: 'Техническое обслуживание трактора JD-001', time: '1 день назад' }
  ]);

  return (
    <div className="min-h-screen bg-agro-gradient">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Быстрые метрики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-agro-700">Общая площадь</CardTitle>
              <MapPin className="h-4 w-4 text-agro-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-agro-900">2,450 га</div>
              <p className="text-xs text-agro-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.5% с прошлого года
              </p>
            </CardContent>
          </Card>

          <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-agro-700">Активная техника</CardTitle>
              <Tractor className="h-4 w-4 text-agro-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-agro-900">12/15</div>
              <p className="text-xs text-agro-600">3 на обслуживании</p>
            </CardContent>
          </Card>

          <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-agro-700">Урожайность</CardTitle>
              <Wheat className="h-4 w-4 text-agro-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-agro-900">8.2 т/га</div>
              <p className="text-xs text-agro-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5.2% от плана
              </p>
            </CardContent>
          </Card>

          <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-agro-700">Эффективность</CardTitle>
              <BarChart3 className="h-4 w-4 text-agro-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-agro-900">94.8%</div>
              <p className="text-xs text-agro-600">За последнюю неделю</p>
            </CardContent>
          </Card>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Карта полей */}
          <div className="lg:col-span-2">
            <FieldMap />
          </div>

          {/* Погода */}
          <div>
            <WeatherCard />
          </div>
        </div>

        {/* Дополнительные панели */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <MachineryStatus />
          <YieldAnalytics />
        </div>

        {/* Уведомления */}
        <Card className="bg-agro-card border-agro-200 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-agro-900 flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Последние уведомления
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-agro-100">
                  {notification.type === 'warning' && (
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  )}
                  {notification.type === 'success' && (
                    <CheckCircle className="h-5 w-5 text-agro-500 mt-0.5" />
                  )}
                  {notification.type === 'info' && (
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
