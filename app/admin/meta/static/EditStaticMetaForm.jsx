"use client";
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function EditStaticMetaForm({ meta }) {
  const [value, setValue] = useState(JSON.stringify(meta, null, 2));
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/v1/admin/meta/static', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: value,
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Meta updated successfully');
      } else {
        toast.error(data.error || 'Failed to update meta');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Static Meta</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea className="min-h-[400px]" value={value} onChange={(e) => setValue(e.target.value)} />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Updating...' : 'Update Meta'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
