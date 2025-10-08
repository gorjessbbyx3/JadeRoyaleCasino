import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { ArrowLeft, Users as UsersIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { User } from '@shared/schema';

export default function Admin() {
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ['/api/users'],
  });

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Admin Dashboard</CardTitle>
                  <CardDescription>View and manage user registrations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Loading registrations...</p>
                </div>
              ) : !users || users.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No registrations yet</p>
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Agent</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} data-testid={`row-user-${user.id}`}>
                          <TableCell className="font-medium" data-testid={`text-username-${user.id}`}>
                            {user.username}
                          </TableCell>
                          <TableCell data-testid={`text-fullname-${user.id}`}>
                            {user.fullName}
                          </TableCell>
                          <TableCell data-testid={`text-email-${user.id}`}>
                            {user.email}
                          </TableCell>
                          <TableCell data-testid={`text-phone-${user.id}`}>
                            {user.phone}
                          </TableCell>
                          <TableCell data-testid={`text-agent-${user.id}`}>
                            {user.agent || <span className="text-muted-foreground italic">Not assigned</span>}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
              
              {users && users.length > 0 && (
                <div className="mt-4 text-sm text-muted-foreground">
                  Total Registrations: {users.length}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
