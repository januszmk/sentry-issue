import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: '',
  environment: 'pr',
  debug: true,
  release: process.env.RELEASE_ID,
  tracesSampleRate: 1.0,
  enableTracing: true,
  profilesSampleRate: 1.0,
  integrations: [nodeProfilingIntegration()],
});
