import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Shield, Cloud, Lock, Zap, Globe, Menu, X, 
  ArrowRight, CheckCircle2, ChevronRight, 
  Layers, HardDrive, Cpu, ExternalLink, Mail, Phone, Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast, Toaster } from 'sonner';
const leadFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string().optional(),
});
type LeadFormValues = z.infer<typeof leadFormSchema>;
export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      interest: '',
      message: '',
    },
  });
  const onSubmit = (values: LeadFormValues) => {
    console.log('Submission:', values);
    toast.success('Inquiry Received', {
      description: "Our Cloudflare experts will contact you within 24 hours.",
    });
    form.reset();
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };
  const navLinks = [
    { name: 'Power of One', href: '#platform' },
    { name: 'Technical USPs', href: '#usps' },
    { name: 'Strategic Fit', href: '#strategic' },
    { name: 'Battlecard', href: '#battlecard' },
    { name: 'Infinigate Value', href: '#partnership' },
  ];
  return (
    <div className="dark bg-[#09090B] text-zinc-50 min-h-screen font-sans selection:bg-cloudflare/30">
      <Toaster richColors position="top-right" />
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cloudflare flex items-center justify-center rounded-lg shadow-cf-glow">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
                Infinigate <span className="text-cloudflare">x</span> ELCA
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-cloudflare transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="bg-cloudflare hover:bg-cloudflare-dark text-white font-semibold shadow-cf-glow" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
            <button 
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-white/5 py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-zinc-400 hover:text-cloudflare"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-cloudflare hover:bg-cloudflare-dark" onClick={() => setIsMenuOpen(false)}>
              Contact Sales
            </Button>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cloudflare rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-cloudflare/20 bg-cloudflare/10 text-cloudflare text-xs font-bold uppercase tracking-widest mb-6">
              Exclusive Partner Briefing
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
              Future-Proofing ELCA <br />
              <span className="text-gradient">with Zero Trust</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Infinigate and Cloudflare present a unified cybersecurity vision for ELCA. 
              Secure every connection, prevent every threat, and simplify your infrastructure 
              with the world's fastest global network.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-cloudflare hover:bg-cloudflare-dark text-white text-lg px-8 py-6 h-auto shadow-cf-glow group">
                Review Proposal <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white text-lg px-8 py-6 h-auto bg-white/5 backdrop-blur-sm hover:bg-white/10">
                Download PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Power of One Section */}
      <section id="platform" className="py-24 bg-[#0F0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Power of One</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Eliminate point-product complexity. Cloudflare combines networking, 
              security, and edge computing into a single global plane.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Cloud, 
                title: 'One Network', 
                desc: 'Consolidate multiple edge services onto a single backbone connecting over 300 cities worldwide.' 
              },
              { 
                icon: Lock, 
                title: 'One Control Plane', 
                desc: 'Manage ZTNA, CASB, SWG, and RBI from a single dashboard with unified policy enforcement.' 
              },
              { 
                icon: Zap, 
                title: 'One Performance Standard', 
                desc: 'Zero Trust that actually makes users faster, not slower, thanks to local peering in every market.' 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-[#18181B] border border-white/5 hover:border-cloudflare/30 transition-all"
              >
                <div className="w-12 h-12 bg-cloudflare/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-cloudflare" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technical USPs */}
      <section id="usps" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Technical Differentiators for ELCA</h2>
              <div className="space-y-6">
                {[
                  { title: 'Global Backbone Connectivity', text: 'Direct peering with 12,000+ ISPs and all major cloud providers.' },
                  { title: 'Anycast Everything', text: 'Every service runs on every server in every data center, globally.' },
                  { title: 'Cloud-Native Security', text: 'Built from the ground up for the modern distributed workforce, not retrofitted.' },
                  { title: 'Infinite Scalability', text: 'Automatically scales to handle the largest DDoS attacks in history.' }
                ].map((usp, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-cloudflare shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">{usp.title}</h4>
                      <p className="text-sm text-zinc-400">{usp.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="relative aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-3xl overflow-hidden border border-white/10 group"
            >
              <div className="absolute inset-0 bg-cloudflare/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-12 h-full flex flex-col justify-center items-center text-center">
                <Globe className="w-32 h-32 text-cloudflare mb-8 floating" />
                <h3 className="text-3xl font-bold mb-4">300+ Cities</h3>
                <p className="text-zinc-400 text-lg">Within 50ms of 95% of the world's internet-connected population.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Strategic Fit */}
      <section id="strategic" className="py-24 bg-[#0F0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for ELCA's Operations</h2>
            <p className="text-zinc-400 text-lg">
              We understand ELCA's need for precision and reliability. Our solution 
              integrates seamlessly into your existing CI/CD and operational workflows.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: 'Modular Architecture', text: 'Adopt services at your own pace.' },
              { icon: HardDrive, title: 'Data Sovereignty', text: 'Control exactly where your data resides.' },
              { icon: Cpu, title: 'Terraform Ready', text: 'Full API-first configuration for DevOps.' },
              { icon: ExternalLink, title: 'Ecosystem Sync', text: 'Rich integrations with SIEM/SOAR/IDPs.' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#18181B] border border-white/5"
              >
                <card.icon className="w-8 h-8 text-cloudflare mb-4" />
                <h4 className="font-bold mb-2">{card.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Battlecard Table */}
      <section id="battlecard" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Competitive Battlecard</h2>
            <p className="text-zinc-400">Why Cloudflare outperforms legacy Zscaler and SASE vendors.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="overflow-x-auto rounded-2xl border border-white/10">
            <Table>
              <TableHeader className="bg-[#18181B]">
                <TableRow>
                  <TableHead className="w-[250px] text-zinc-50 font-bold h-16">Feature Capability</TableHead>
                  <TableHead className="text-cloudflare font-bold h-16">Cloudflare One</TableHead>
                  <TableHead className="text-zinc-400 h-16">Legacy SASE (Zscaler)</TableHead>
                  <TableHead className="text-zinc-400 h-16">Standard VPN/Firewall</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { f: 'Performance / Latency', c: 'Lowest (Anycast 50ms)', l: 'High (Backhaul-heavy)', s: 'Extreme (Choke points)' },
                  { f: 'Implementation Complexity', c: 'Days / Rapid DNS-based', l: 'Months / Complex Tunnels', s: 'Varies / HW-Dependent' },
                  { f: 'Platform Unification', c: 'Full / Single Fabric', l: 'Partial / Fragmented', s: 'None / Siloed' },
                  { f: 'DevOps / Automation', c: 'API-First / Terraform', l: 'Limited API Support', s: 'CLI / Manual Config' },
                  { f: 'Pricing Model', c: 'Predictable per-user', l: 'Complex / Add-on heavy', s: 'CapEx + OpEx' }
                ].map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/5">
                    <TableCell className="font-medium h-16">{row.f}</TableCell>
                    <TableCell className="text-zinc-50 h-16">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" /> {row.c}
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-400 h-16">{row.l}</TableCell>
                    <TableCell className="text-zinc-400 h-16">{row.s}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>
      {/* Infinigate Value */}
      <section id="partnership" className="py-24 bg-[#0F0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#18181B] border border-white/5 aspect-square flex flex-col justify-center">
                  <span className="text-3xl font-bold text-cloudflare block mb-2">24/7</span>
                  <span className="text-zinc-400 text-sm">Partner Support</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#18181B] border border-white/5 aspect-square flex flex-col justify-center">
                  <span className="text-3xl font-bold text-cloudflare block mb-2">15+</span>
                  <span className="text-zinc-400 text-sm">Dedicated Experts</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#18181B] border border-white/5 aspect-square flex flex-col justify-center">
                  <span className="text-3xl font-bold text-cloudflare block mb-2">100%</span>
                  <span className="text-zinc-400 text-sm">Channel Focus</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#18181B] border border-white/5 aspect-square flex flex-col justify-center">
                  <span className="text-3xl font-bold text-cloudflare block mb-2">VAD</span>
                  <span className="text-zinc-400 text-sm">Value Add Disti</span>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Infinigate: Your Strategic Ally</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                As a specialized VAD, Infinigate bridges the gap between Cloudflare's 
                innovation and ELCA's operational excellence. We provide pre-sales 
                architecture, enablement, and logistical support to ensure success.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-zinc-300">
                  <ChevronRight className="w-5 h-5 text-cloudflare" /> Exclusive Technical Workshops
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <ChevronRight className="w-5 h-5 text-cloudflare" /> PoC and Pilot Assistance
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <ChevronRight className="w-5 h-5 text-cloudflare" /> Tailored Pricing & Licensing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">Schedule Your Deep Dive</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed">
                Ready to explore how Zero Trust fits into ELCA's 2024 roadmap? 
                Connect with our joint specialist team for a technical overview.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cloudflare" />
                  </div>
                  <div>
                    <h5 className="font-bold">Email Our Team</h5>
                    <p className="text-sm text-zinc-400">elca-team@infinigate.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cloudflare" />
                  </div>
                  <div>
                    <h5 className="font-bold">Direct Line</h5>
                    <p className="text-sm text-zinc-400">+41 44 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Building className="w-6 h-6 text-cloudflare" />
                  </div>
                  <div>
                    <h5 className="font-bold">Headquarters</h5>
                    <p className="text-sm text-zinc-400">Glattbrugg, Switzerland</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="p-8 rounded-3xl bg-[#18181B] border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cloudflare/10 blur-[80px] pointer-events-none" />
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-zinc-900 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@elca.ch" {...field} className="bg-zinc-900 border-white/10" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <FormControl>
                            <Input placeholder="Engineering" {...field} className="bg-zinc-900 border-white/10" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest Area</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-zinc-900 border-white/10">
                              <SelectValue placeholder="Select a focus" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-zinc-900 border-white/10">
                            <SelectItem value="ztna">Zero Trust Access (ZTNA)</SelectItem>
                            <SelectItem value="sase">SASE Consolidation</SelectItem>
                            <SelectItem value="ddos">DDoS & App Security</SelectItem>
                            <SelectItem value="worker">Edge Computing (Workers)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-cloudflare hover:bg-cloudflare-dark text-white h-12 shadow-cf-glow">
                    Send Inquiry
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cloudflare/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-cloudflare" />
              </div>
              <span className="font-bold text-lg">Infinigate <span className="text-cloudflare">x</span> ELCA</span>
            </div>
            <div className="flex gap-12 text-zinc-500 text-sm">
              <a href="#" className="hover:text-zinc-50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-50 transition-colors">Partner Terms</a>
              <a href="#" className="hover:text-zinc-50 transition-colors">Contact Support</a>
            </div>
          </div>
          <p className="mt-8 text-zinc-600 text-xs text-center">
            © {new Date().getFullYear()} Infinigate Holding AG. All brands and trademarks are the property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}