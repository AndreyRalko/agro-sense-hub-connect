
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Maximize2, Layers } from 'lucide-react';

const FieldMap = () => {
  const fields = [
    { id: 1, name: 'Поле №1', status: 'harvested', area: 245, crop: 'Пшеница', yield: 8.5 },
    { id: 2, name: 'Поле №2', status: 'growing', area: 180, crop: 'Кукуруза', yield: null },
    { id: 3, name: 'Поле №3', status: 'irrigation', area: 320, crop: 'Соя', yield: null },
    { id: 4, name: 'Поле №4', status: 'planting', area: 150, crop: 'Ячмень', yield: null }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'harvested': return 'bg-agro-500';
      case 'growing': return 'bg-green-400';
      case 'irrigation': return 'bg-blue-400';
      case 'planting': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'harvested': return 'Убрано';
      case 'growing': return 'Растет';
      case 'irrigation': return 'Полив';
      case 'planting': return 'Посев';
      default: return 'Неизвестно';
    }
  };

  return (
    <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-agro-900 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Карта полей
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Layers className="h-4 w-4 mr-2" />
              Слои
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Имитация карты */}
          <div className="relative h-64 bg-gradient-to-br from-agro-100 to-agro-200 rounded-lg border-2 border-agro-300 overflow-hidden">
            <div className="absolute inset-0 p-4">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className={`absolute rounded-lg border-2 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform ${getStatusColor(field.status)}`}
                  style={{
                    width: `${Math.min(field.area / 8, 80)}px`,
                    height: `${Math.min(field.area / 12, 60)}px`,
                    top: `${20 + (index * 25)}%`,
                    left: `${10 + (index * 20)}%`
                  }}
                >
                  <div className="p-2 text-white text-xs font-medium">
                    {field.name}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Легенда */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
              <div className="text-xs font-medium text-agro-900">Статус полей:</div>
              {['harvested', 'growing', 'irrigation', 'planting'].map((status) => (
                <div key={status} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded ${getStatusColor(status)}`}></div>
                  <span className="text-xs text-agro-700">{getStatusText(status)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Список полей */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-agro-900">Детали полей</h4>
            {fields.map((field) => (
              <div key={field.id} className="flex items-center justify-between p-3 rounded-lg bg-white border border-agro-100">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(field.status)}`}></div>
                  <div>
                    <p className="text-sm font-medium text-agro-900">{field.name}</p>
                    <p className="text-xs text-agro-600">{field.crop} • {field.area} га</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-agro-600 border-agro-300 mb-1">
                    {getStatusText(field.status)}
                  </Badge>
                  {field.yield && (
                    <p className="text-xs text-agro-600">{field.yield} т/га</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FieldMap;
