
import { Card } from '@/components/ui/card';
import { YieldAnalytics } from '@/components/YieldAnalytics';

const Analytics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-agro-900">Аналитика урожайности</h1>
      
      <Card className="p-6 bg-agro-card border-agro-200">
        <YieldAnalytics />
      </Card>
    </div>
  );
};

export default Analytics;
