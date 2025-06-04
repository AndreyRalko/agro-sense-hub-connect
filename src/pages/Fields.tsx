import { Card } from '@/components/ui/card';
import FieldMap from '@/components/FieldMap';

const Fields = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-agro-900">Карта полей</h1>
      
      <Card className="p-6 bg-agro-card border-agro-200">
        <FieldMap />
      </Card>
    </div>
  );
};

export default Fields;
