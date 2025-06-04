
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings as SettingsIcon, User, Bell, Shield, Database } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-agro-900">Настройки системы</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Настройки профиля */}
        <Card className="p-6 bg-agro-card border-agro-200">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-5 h-5 text-agro-600" />
            <h3 className="text-lg font-semibold text-agro-900">Профиль</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Публичный профиль</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Двухфакторная аутентификация</span>
              <Switch />
            </div>
            <Button variant="outline" className="w-full">
              Изменить пароль
            </Button>
          </div>
        </Card>

        {/* Уведомления */}
        <Card className="p-6 bg-agro-card border-agro-200">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-5 h-5 text-agro-600" />
            <h3 className="text-lg font-semibold text-agro-900">Уведомления</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Email уведомления</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Push уведомления</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-agro-700">SMS уведомления</span>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Безопасность */}
        <Card className="p-6 bg-agro-card border-agro-200">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-5 h-5 text-agro-600" />
            <h3 className="text-lg font-semibold text-agro-900">Безопасность</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Автоматический выход</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Логирование действий</span>
              <Switch defaultChecked />
            </div>
            <Button variant="outline" className="w-full">
              Просмотреть логи
            </Button>
          </div>
        </Card>

        {/* Система */}
        <Card className="p-6 bg-agro-card border-agro-200">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="w-5 h-5 text-agro-600" />
            <h3 className="text-lg font-semibold text-agro-900">Система</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Версия системы</span>
              <span className="text-sm text-agro-600">2.1.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-agro-700">Последнее обновление</span>
              <span className="text-sm text-agro-600">2 дня назад</span>
            </div>
            <Button className="w-full bg-agro-600 hover:bg-agro-700">
              Проверить обновления
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
