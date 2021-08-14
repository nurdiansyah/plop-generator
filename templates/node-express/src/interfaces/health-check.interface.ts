export interface HealthCheck {
  message: 'healthy' | 'bad'
  status: 200 | 400 | 500
}

export default interface HealthCheckSchema extends HealthCheck {}
