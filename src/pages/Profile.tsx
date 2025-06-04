
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-agro-900">Профиль пользователя</h1>
        <Button className="bg-agro-600 hover:bg-agro-700">
          <Edit className="w-4 h-4 mr-2" />
          Редактировать
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Основная информация */}
        <Card className="lg:col-span-2 p-6 bg-agro-card border-agro-200">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-agro-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-agro-900">Иванов Сергей Петрович</h2>
              <p className="text-agro-600">Главный агроном</p>
              <Badge className="mt-2 bg-green-100 text-green-800">Активен</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-agro-600" />
              <div>
                <p className="text-sm text-agro-600">Email</p>
                <p className="font-medium text-agro-900">s.ivanov@agrotech.ru</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-agro-600" />
              <div>
                <p className="text-sm text-agro-600">Телефон</p>
                <p className="font-medium text-agro-900">+7 (495) 123-45-67</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-agro-600" />
              <div>
                <p className="text-sm text-agro-600">Локация</p>
                <p className="font-medium text-agro-900">Московская область</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-agro-600" />
              <div>
                <p className="text-sm text-agro-600">Дата регистрации</p>
                <p className="font-medium text-agro-900">15 января 2023</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Статистика */}
        <Card className="p-6 bg-agro-card border-agro-200">
          <h3 className="text-lg font-semibold text-agro-900 mb-4">Статистика</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-agro-600">Полей под контролем</span>
              <span className="font-bold text-agro-900">24</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-agro-600">Техники в управлении</span>
              <span className="font-bold text-agro-900">12</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-agro-600">Задач выполнено</span>
              <span className="font-bold text-agro-900">156</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-agro-600">Уведомлений</span>
              <Badge className="bg-red-100 text-red-800">3 новых</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Последние действия */}
      <Card className="p-6 bg-agro-card border-agro-200">
        <h3 className="text-lg font-semibold text-agro-900 mb-4">Последние действия</h3>
        
        <div className="space-y-3">
          {[
            { action: "Обновлен план посева для поля №7", time: "2 часа назад" },
            { action: "Добавлена новая техника: Трактор МТЗ-82", time: "4 часа назад" },
            { action: "Проведен анализ урожайности за Q3", time: "1 день назад" },
            { action: "Настроены уведомления для поля №12", time: "2 дня назад" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-agro-100 last:border-b-0">
              <span className="text-agro-900">{item.action}</span>
              <span className="text-sm text-agro-600">{item.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Profile;
