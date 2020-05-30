import BaseLayout from '../components/layout/base-layout';
import { useRedirect } from '../core/hooks/useRedirect';

const Index = () => {
  useRedirect('/docs');

  return (
    <BaseLayout>
      <div style={{ padding: '0 24px' }}>
        Loading docs...
      </div>
    </BaseLayout>
  );
}

export default Index;
