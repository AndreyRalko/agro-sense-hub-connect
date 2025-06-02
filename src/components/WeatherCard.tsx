
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye } from 'lucide-react';

const WeatherCard = () => {
  const currentWeather = {
    temperature: 24,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    rainfall: 0
  };

  const forecast = [
    { day: 'Сег', temp: 24, condition: 'sunny' },
    { day: 'Зав', temp: 22, condition: 'cloudy' },
    { day: 'Пт', temp: 19, condition: 'rainy' },
    { day: 'Сб', temp: 21, condition: 'cloudy' },
    { day: 'Вс', temp: 25, condition: 'sunny' }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy': return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy': return <CloudRain className="h-6 w-6 text-blue-500" />;
      default: return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-agro-900 flex items-center justify-between">
          Погода
          <Badge variant="outline" className="text-agro-600 border-agro-300">
            Сегодня
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Текущая погода */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              {getWeatherIcon(currentWeather.condition)}
            </div>
            <div className="text-3xl font-bold text-agro-900">{currentWeather.temperature}°C</div>
            <p className="text-sm text-agro-600">Солнечно</p>
          </div>

          {/* Детали */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-xs text-agro-600">Влажность</p>
                <p className="text-sm font-medium text-agro-900">{currentWeather.humidity}%</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-agro-500" />
              <div>
                <p className="text-xs text-agro-600">Ветер</p>
                <p className="text-sm font-medium text-agro-900">{currentWeather.windSpeed} км/ч</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-agro-500" />
              <div>
                <p className="text-xs text-agro-600">Видимость</p>
                <p className="text-sm font-medium text-agro-900">{currentWeather.visibility} км</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <CloudRain className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-xs text-agro-600">Осадки</p>
                <p className="text-sm font-medium text-agro-900">{currentWeather.rainfall} мм</p>
              </div>
            </div>
          </div>

          {/* Прогноз на 5 дней */}
          <div>
            <h4 className="text-sm font-medium text-agro-900 mb-3">Прогноз на 5 дней</h4>
            <div className="space-y-2">
              {forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white border border-agro-100">
                  <span className="text-sm text-agro-700">{day.day}</span>
                  <div className="flex items-center gap-2">
                    {getWeatherIcon(day.condition)}
                    <span className="text-sm font-medium text-agro-900">{day.temp}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
