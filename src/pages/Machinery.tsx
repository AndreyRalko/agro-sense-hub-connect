
import { Card } from '@/components/ui/card';
import { MachineryStatus } from '@/components/MachineryStatus';

const Machinery = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-agro-900">Статус техники</h1>
      
      <Card className="p-6 bg-agro-card border-agro-200">
        <MachineryStatus />
      </Card>
    </div>
  );
};

export default Machinery;
