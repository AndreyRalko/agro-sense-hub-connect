
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tractor, Wrench, CheckCircle, AlertTriangle, MoreHorizontal } from 'lucide-react';

const MachineryStatus = () => {
  const machinery = [
    { 
      id: 'JD-001', 
      name: 'John Deere 8370R', 
      status: 'active', 
      location: 'Поле №1',
      fuelLevel: 85,
      workHours: 145
    },
    { 
      id: 'MF-002', 
      name: 'Massey Ferguson 8737', 
      status: 'maintenance', 
      location: 'Мастерская',
      fuelLevel: 30,
      workHours: 892
    },
    { 
      id: 'NH-003', 
      name: 'New Holland T8.435', 
      status: 'active', 
      location: 'Поле №3',
      fuelLevel: 65,
      workHours: 234
    },
    { 
      id: 'CL-004', 
      name: 'Claas Lexion 780', 
      status: 'idle', 
      location: 'База',
      fuelLevel: 95,
      workHours: 67
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4 text-agro-500" />;
      case 'maintenance': return <Wrench className="h-4 w-4 text-yellow-500" />;
      case 'idle': return <AlertTriangle className="h-4 w-4 text-gray-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Работает';
      case 'maintenance': return 'ТО';
      case 'idle': return 'Простой';
      default: return 'Неизвестно';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-agro-100 text-agro-700 border-agro-300';
      case 'maintenance': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'idle': return 'bg-gray-100 text-gray-700 border-gray-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-slide-up">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-agro-900 flex items-center gap-2">
            <Tractor className="h-5 w-5" />
            Статус техники
          </CardTitle>
          <Button variant="outline" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {machinery.map((machine) => (
            <div key={machine.id} className="p-4 rounded-lg bg-white border border-agro-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {getStatusIcon(machine.status)}
                  <div>
                    <h4 className="text-sm font-medium text-agro-900">{machine.name}</h4>
                    <p className="text-xs text-agro-600">ID: {machine.id}</p>
                  </div>
                </div>
                <Badge variant="outline" className={getStatusColor(machine.status)}>
                  {getStatusText(machine.status)}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <p className="text-agro-600">Местоположение</p>
                  <p className="font-medium text-agro-900">{machine.location}</p>
                </div>
                <div>
                  <p className="text-agro-600">Топливо</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-agro-500 h-2 rounded-full transition-all"
                        style={{ width: `${machine.fuelLevel}%` }}
                      ></div>
                    </div>
                    <span className="font-medium text-agro-900">{machine.fuelLevel}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-agro-600">Моточасы</p>
                  <p className="font-medium text-agro-900">{machine.workHours}ч</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MachineryStatus;
