import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { IntegrationsHeader } from '../../components/integrations/IntegrationsHeader';
import { AdsIntegration } from '../../components/integrations/ads/AdsIntegration';
import { WebhooksIntegration } from '../../components/integrations/webhooks/WebhooksIntegration';
import { UtmIntegration } from '../../components/integrations/utm/UtmIntegration';
import { PixelIntegration } from '../../components/integrations/pixel/PixelIntegration';

const Integrations = () => {
  return (
    <div className="space-y-8">
      <IntegrationsHeader />

      <Tabs defaultValue="ads" className="w-full">
        <TabsList>
          <TabsTrigger value="ads">Anúncios</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="utms">UTMs</TabsTrigger>
          <TabsTrigger value="pixels">Pixels</TabsTrigger>
        </TabsList>

        <TabsContent value="ads">
          <AdsIntegration />
        </TabsContent>

        <TabsContent value="webhooks">
          <WebhooksIntegration />
        </TabsContent>

        <TabsContent value="utms">
          <UtmIntegration />
        </TabsContent>

        <TabsContent value="pixels">
          <PixelIntegration />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Integrations;