
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, TrendingDown, Calendar } from 'lucide-react';

const YieldAnalytics = () => {
  const crops = [
    { name: 'Пшеница', current: 8.5, target: 8.0, lastYear: 7.8, trend: 'up' },
    { name: 'Кукуруза', current: 12.3, target: 11.5, lastYear: 11.8, trend: 'up' },
    { name: 'Соя', current: 3.2, target: 3.5, lastYear: 3.4, trend: 'down' },
    { name: 'Ячмень', current: 6.8, target: 6.5, lastYear: 6.2, trend: 'up' }
  ];

  const monthlyData = [
    { month: 'Янв', yield: 0 },
    { month: 'Фев', yield: 0 },
    { month: 'Мар', yield: 2.1 },
    { month: 'Апр', yield: 4.5 },
    { month: 'Май', yield: 7.2 },
    { month: 'Июн', yield: 8.8 }
  ];

  return (
    <Card className="bg-agro-card border-agro-200 hover:shadow-lg transition-all duration-300 animate-slide-up">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-agro-900 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Аналитика урожайности
          </CardTitle>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            2024
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* График урожайности по месяцам */}
          <div>
            <h4 className="text-sm font-medium text-agro-900 mb-3">Урожайность по месяцам (т/га)</h4>
            <div className="flex items-end justify-between h-24 gap-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-agro-100 rounded-t flex items-end justify-center relative">
                    <div
                      className="w-full bg-agro-500 rounded-t transition-all duration-500"
                      style={{ height: `${(data.yield / 10) * 80}px` }}
                    ></div>
                    {data.yield > 0 && (
                      <span className="absolute -top-5 text-xs font-medium text-agro-900">
                        {data.yield}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-agro-600 mt-1">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Урожайность по культурам */}
          <div>
            <h4 className="text-sm font-medium text-agro-900 mb-3">Урожайность по культурам</h4>
            <div className="space-y-3">
              {crops.map((crop, index) => (
                <div key={index} className="p-3 rounded-lg bg-white border border-agro-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-agro-900">{crop.name}</span>
                    <div className="flex items-center gap-2">
                      {crop.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-agro-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm font-bold text-agro-900">{crop.current} т/га</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-agro-600">План: {crop.target} т/га</span>
                    <span className="text-agro-600">2023: {crop.lastYear} т/га</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        crop.current >= crop.target ? 'bg-agro-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${Math.min((crop.current / crop.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <Badge 
                      variant="outline" 
                      className={
                        crop.current >= crop.target 
                          ? 'bg-agro-100 text-agro-700 border-agro-300'
                          : 'bg-yellow-100 text-yellow-700 border-yellow-300'
                      }
                    >
                      {crop.current >= crop.target ? 'План выполнен' : 'Ниже плана'}
                    </Badge>
                    <span className="text-xs text-agro-600">
                      {((crop.current / crop.target - 1) * 100).toFixed(1)}%
                    </span>
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

export default YieldAnalytics;
