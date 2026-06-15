import PageHero from "../components/PageHero";
import { Cookie, Shield, Settings, Globe } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div>
      <PageHero
        eyebrow="COOKIE POLICY"
        title="Cookie Policy"
        subtitle="Learn how Track The Breach uses cookies and similar technologies to improve security, performance, and user experience."
        icon="Cookie"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              What Are Cookies?
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember preferences, improve
              performance, provide security protections, and understand how
              visitors interact with services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border p-6 bg-white">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />

              <h3 className="text-xl font-bold">
                Essential Cookies
              </h3>

              <p className="mt-3 text-slate-600">
                Required for website functionality, authentication,
                security protections, session management, and fraud prevention.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Settings className="w-8 h-8 text-purple-600 mb-4" />

              <h3 className="text-xl font-bold">
                Functional Cookies
              </h3>

              <p className="mt-3 text-slate-600">
                Used to remember user preferences, settings,
                language selections, and customized experiences.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Globe className="w-8 h-8 text-green-600 mb-4" />

              <h3 className="text-xl font-bold">
                Analytics Cookies
              </h3>

              <p className="mt-3 text-slate-600">
                Help us understand traffic patterns,
                user behavior, and website performance.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Cookie className="w-8 h-8 text-orange-600 mb-4" />

              <h3 className="text-xl font-bold">
                Performance Cookies
              </h3>

              <p className="mt-3 text-slate-600">
                Assist in optimizing website speed,
                stability, and overall reliability.
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              How We Use Cookies
            </h2>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Maintain secure login sessions</li>
              <li>• Protect against fraud and abuse</li>
              <li>• Improve website performance</li>
              <li>• Understand visitor interactions</li>
              <li>• Remember user preferences</li>
              <li>• Monitor service reliability</li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Managing Cookies
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Most browsers allow users to control cookie preferences,
              block specific cookies, or delete stored cookies. Disabling
              certain cookies may impact website functionality and security.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Third-Party Services
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Some third-party services integrated into our platform may use
              cookies or similar technologies for analytics, security,
              performance monitoring, and infrastructure management.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Policy Updates
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We may update this Cookie Policy periodically to reflect
              changes in technology, legal requirements, or business
              operations. Updated versions will be published on this page.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
