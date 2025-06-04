
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { WeatherCard } from '@/components/WeatherCard';
import { FieldMap } from '@/components/FieldMap';
import { MachineryStatus } from '@/components/MachineryStatus';
import { YieldAnalytics } from '@/components/YieldAnalytics';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WeatherCard />
          
          <Card className="md:col-span-2 p-6 bg-agro-card border-agro-200">
            <h3 className="text-lg font-semibold text-agro-900 mb-4">Быстрая статистика</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-agro-600">24</div>
                <div className="text-sm text-agro-700">Полей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-agro-600">12</div>
                <div className="text-sm text-agro-700">Техники</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-agro-600">89%</div>
                <div className="text-sm text-agro-700">Эффективность</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card className="p-6 bg-agro-card border-agro-200">
            <h3 className="text-lg font-semibold text-agro-900 mb-4">Карта полей</h3>
            <FieldMap />
          </Card>

          <Card className="p-6 bg-agro-card border-agro-200">
            <h3 className="text-lg font-semibold text-agro-900 mb-4">Статус техники</h3>
            <MachineryStatus />
          </Card>
        </div>

        <Card className="p-6 bg-agro-card border-agro-200">
          <h3 className="text-lg font-semibold text-agro-900 mb-4">Аналитика урожайности</h3>
          <YieldAnalytics />
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
