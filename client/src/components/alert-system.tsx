import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { RegistrationAlert } from '@shared/schema';
import { X, Info } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { formatDistanceToNow } from 'date-fns';

export default function AlertSystem() {
  const queryClient = useQueryClient();

  const { data: alerts = [] } = useQuery<RegistrationAlert[]>({
    queryKey: ['/api/alerts'],
    refetchInterval: 5000, // Refresh every 5 seconds for real-time updates
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (alertId: string) => {
      return apiRequest('PATCH', `/api/alerts/${alertId}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/alerts'] });
    },
  });

  const deleteAlertMutation = useMutation({
    mutationFn: async (alertId: string) => {
      return apiRequest('DELETE', `/api/alerts/${alertId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/alerts'] });
    },
  });

  const handleDismiss = (alertId: string) => {
    deleteAlertMutation.mutate(alertId);
  };

  const handleMarkAsRead = (alertId: string) => {
    markAsReadMutation.mutate(alertId);
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2" data-testid="alert-system">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="glass-card border-l-4 border-primary p-4 rounded-lg shadow-xl animate-slide-up max-w-md"
          data-testid={`alert-${alert.id}`}
        >
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">New Registration</p>
              <p className="text-sm text-muted-foreground">{alert.message}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {formatDistanceToNow(new Date(alert.createdAt!), { addSuffix: true })}
              </p>
            </div>
            <button
              onClick={() => handleDismiss(alert.id)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`button-dismiss-alert-${alert.id}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
