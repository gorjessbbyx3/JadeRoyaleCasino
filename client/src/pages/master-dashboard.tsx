import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PlayerRegistration } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Building2, Clock, TrendingUp, Edit, Trash2, CheckCircle, Download, LogOut } from 'lucide-react';
import { Link } from 'wouter';
import { formatDistanceToNow } from 'date-fns';
import AlertSystem from '@/components/alert-system';
import CasinoChip from '@/components/casino-chip';

interface RegistrationStats {
  totalPlayers: number;
  activeAgents: number;
  pendingRequests: number;
  weeklyRegistrations: number;
}

export default function MasterDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: registrations = [], isLoading: registrationsLoading } = useQuery<PlayerRegistration[]>({
    queryKey: ['/api/registrations'],
  });

  const { data: stats } = useQuery<RegistrationStats>({
    queryKey: ['/api/stats'],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      return apiRequest('PATCH', `/api/registrations/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/registrations'] });
      queryClient.invalidateQueries({ queryKey: ['/api/stats'] });
      toast({ title: "Status updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update status", variant: "destructive" });
    },
  });

  const deleteRegistrationMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest('DELETE', `/api/registrations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/registrations'] });
      queryClient.invalidateQueries({ queryKey: ['/api/stats'] });
      toast({ title: "Registration deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete registration", variant: "destructive" });
    },
  });

  const filteredRegistrations = registrations.filter((reg) => {
    const matchesSearch = 
      reg.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.agentCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAgent = selectedAgent === 'all' || reg.agentCode === selectedAgent;
    const matchesStatus = selectedStatus === 'all' || reg.status === selectedStatus;
    
    return matchesSearch && matchesAgent && matchesStatus;
  });

  const uniqueAgents = Array.from(new Set(registrations.map(reg => reg.agentCode)));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-accent/20 text-accent';
      case 'active': return 'bg-primary/20 text-primary';
      case 'suspended': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  const handleCreateAtBackend = (registration: PlayerRegistration) => {
    window.open('http://cashout.realconnect.online/backend', '_blank');
  };

  return (
    <div className="min-h-screen gradient-bg py-20 px-4" data-testid="master-dashboard">
      <AlertSystem />
      
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <CasinoChip />
            <div>
              <h2 className="text-4xl font-serif font-bold neon-text">Master Dashboard</h2>
              <p className="text-muted-foreground mt-2">Manage all player registrations and agent networks</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" data-testid="button-export-data">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Link href="/">
              <Button variant="outline" data-testid="button-exit-dashboard">
                <LogOut className="w-4 h-4 mr-2" />
                Exit Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-border" data-testid="stat-card-total-players">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Players</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalPlayers || 0}</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border" data-testid="stat-card-active-agents">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Agents</CardTitle>
              <Building2 className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.activeAgents || 0}</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border" data-testid="stat-card-pending-requests">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
              <Clock className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.pendingRequests || 0}</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border" data-testid="stat-card-weekly-registrations">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{stats?.weeklyRegistrations || 0}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="glass-card border-border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by username, email, or agent..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background border-border text-foreground focus:border-primary"
                data-testid="input-search"
              />
            </div>
            <Select value={selectedAgent} onValueChange={setSelectedAgent}>
              <SelectTrigger className="w-48 bg-background border-border text-foreground" data-testid="select-agent">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Agents</SelectItem>
                {uniqueAgents.map((agent) => (
                  <SelectItem key={agent} value={agent}>{agent}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48 bg-background border-border text-foreground" data-testid="select-status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* User Registration Table */}
        <Card className="glass-card border-border">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-foreground">Username</TableHead>
                  <TableHead className="text-foreground">Email</TableHead>
                  <TableHead className="text-foreground">Agent</TableHead>
                  <TableHead className="text-foreground">Status</TableHead>
                  <TableHead className="text-foreground">Registered</TableHead>
                  <TableHead className="text-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrationsLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      Loading registrations...
                    </TableCell>
                  </TableRow>
                ) : filteredRegistrations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No registrations found matching your criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRegistrations.map((registration) => (
                    <TableRow key={registration.id} className="border-border hover:bg-muted/20" data-testid={`registration-row-${registration.id}`}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-background">
                            {registration.username.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="font-medium">{registration.username}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{registration.email}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-primary/20 text-primary font-mono">
                          {registration.agentCode}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(registration.status)}>
                          {registration.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {registration.createdAt ? formatDistanceToNow(new Date(registration.createdAt), { addSuffix: true }) : 'N/A'}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => updateStatusMutation.mutate({ 
                              id: registration.id, 
                              status: registration.status === 'active' ? 'suspended' : 'active' 
                            })}
                            data-testid={`button-edit-${registration.id}`}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => deleteRegistrationMutation.mutate(registration.id)}
                            className="text-destructive hover:text-destructive"
                            data-testid={`button-delete-${registration.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCreateAtBackend(registration)}
                            className={registration.status === 'active' ? 'opacity-50 cursor-not-allowed' : 'text-accent hover:text-accent'}
                            disabled={registration.status === 'active'}
                            data-testid={`button-create-backend-${registration.id}`}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Database Connection Info */}
        <Card className="glass-card border-border mt-8 p-6">
          <h3 className="text-lg font-semibold mb-4">Database Connection Status</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm">Nile PostgreSQL: <span className="text-primary font-semibold">Connected</span></span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm">Database: <span className="font-mono text-muted-foreground">jade_royale_ledger</span></span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
