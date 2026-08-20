import { PageShell } from "@/components/layout/PageShell";
import { BackButton } from "@/components/layout/BackButton";



export default function PrivacyPage() {
  return (
    <PageShell>
      <BackButton />
      <div className="container mx-auto px-6 py-40 max-w-3xl">
        <h1 className="text-4xl font-display font-semibold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg text-muted-foreground space-y-6">
          <p>
            At Sherize Solutions, we are committed to protecting your privacy. This Privacy Policy
            outlines our practices regarding the collection, use, and disclosure of information that
            we receive through our digital services.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Information Collection
          </h2>
          <p>
            We collect information that you provide directly to us when you fill out a form, request
            a quote, or communicate with our team. This may include your name, email address, phone
            number, and business details.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Use of Information</h2>
          <p>
            The information we collect is used to provide, maintain, and improve our services. We
            also use it to communicate with you, process transactions, and respond to your
            inquiries.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@sherize.in" className="text-primary hover:underline">
              info@sherize.in
            </a>
            .
          </p>
        </div>
      </div>
    </PageShell>
  );
}
