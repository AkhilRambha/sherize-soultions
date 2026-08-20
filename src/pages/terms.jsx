import { PageShell } from "@/components/layout/PageShell";
import { BackButton } from "@/components/layout/BackButton";



export default function TermsPage() {
  return (
    <PageShell>
      <BackButton />
      <div className="container mx-auto px-6 py-40 max-w-3xl">
        <h1 className="text-4xl font-display font-semibold mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-lg text-muted-foreground space-y-6">
          <p>
            Welcome to Sherize Solutions. By accessing or using our website and services, you agree
            to be bound by these Terms of Service. If you disagree with any part of the terms, then
            you may not access our services.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Intellectual Property
          </h2>
          <p>
            The website and its original content, features, and functionality are owned by Sherize
            Solutions and are protected by international copyright, trademark, patent, trade secret,
            and other intellectual property or proprietary rights laws.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Client Responsibilities
          </h2>
          <p>
            Clients agree to provide accurate, current, and complete information necessary for the
            execution of digital services. Any delays caused by missing or inaccurate information
            may result in extended project timelines.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            In no event shall Sherize Solutions, nor its directors, employees, partners, agents,
            suppliers, or affiliates, be liable for any indirect, incidental, special, consequential
            or punitive damages arising out of your access to or use of our services.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any
            time. We will try to provide at least 30 days notice prior to any new terms taking
            effect.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
