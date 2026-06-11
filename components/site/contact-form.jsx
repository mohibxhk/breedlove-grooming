'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and message.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      toast.success('Message sent! Roxie will reply within a few hours.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      toast.error('Could not send. Please call (309) 694-0000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" className="h-12 bg-brand-cream/60" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="(309) 555\u2011 0123" className="h-12 bg-brand-cream/60" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@email.com" className="h-12 bg-brand-cream/60" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Tell us about your pet \u2014 breed, age, any special needs..." rows={5} className="bg-brand-cream/60" />
      </div>
      <Button type="submit" disabled={loading} className="bg-brand-sage hover:bg-brand-sage-dark text-white rounded-full h-12 px-6 w-full md:w-auto md:self-start">
        {loading ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
      </Button>
    </form>
  );
}
