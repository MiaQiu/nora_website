import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function TermsOfUse() {
  return (
    <>
      <SEOHead
        title="Terms of Use - Nora Parenting Support"
        description="This page outlines the terms of use for the Nora parenting support platform to help users understand their rights and responsibilities when accessing our services."
        keywords="terms of use, terms and conditions, user agreement, parenting support, Nora platform"
        canonical="https://nora.com/terms-of-use"
      />
      <div className="min-h-screen bg-gradient-warm">
        <Navigation />
        
        {/* Hero Banner */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of Use
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using the Nora parenting support platform and services.
              </p>
            </motion.div>
          </div>
          
          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 126" className="w-full h-auto">
              <path 
                d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,101.3C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,126L1392,126C1344,126,1248,126,1152,126C1056,126,960,126,864,126C768,126,672,126,576,126C480,126,384,126,288,126C192,126,96,126,48,126L0,126Z" 
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            
            {/* Introduction */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg mb-6">
                  Thank you for visiting Nora, your trusted parenting support platform. By accessing and using any part of our website, mobile application, or services, you agree to be legally bound by these Terms of Use. If you do not agree to these terms, please do not use our platform or services.
                </p>
              </div>
            </motion.section>

            {/* Section 1: General Terms */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                1. General Terms
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Nora reserves the right to modify these Terms of Use at any time. All changes will be posted on this page, and your continued use of our platform after such changes have been posted will constitute your agreement to the modified Terms of Use and all changes.
                </p>
                <p>
                  These terms apply to all users of the Nora platform, including parents, caregivers, and anyone accessing our content, 1:1 specialist consultations, or other services.
                </p>
              </div>
            </motion.section>

            {/* Section 2: Platform Services */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                2. Platform Services
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Nora provides parenting support services including but not limited to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Access to curated parenting content and educational resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>1:1 online consultations with qualified specialists and experts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Personalized recommendations and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Community features and parent support networks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>AI-powered parenting assistance and recommendations</span>
                  </li>
                </ul>
                <p>
                  Our services are designed to support parents and caregivers but do not replace professional medical, psychological, or therapeutic care when such services are needed.
                </p>
              </div>
            </motion.section>

            {/* Section 3: User Accounts and Responsibilities */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                3. User Accounts and Responsibilities
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  To access certain features of our platform, you must create an account. You are responsible for:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Maintaining the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>All activities that occur under your account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Providing accurate and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Updating your information to keep it current</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Immediately notifying us of any unauthorized use of your account</span>
                  </li>
                </ul>
                <p>
                  You must be at least 18 years old to create an account. By creating an account, you represent and warrant that you meet this age requirement.
                </p>
              </div>
            </motion.section>

            {/* Section 4: Acceptable Use */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                4. Acceptable Use
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  You agree to use our platform responsibly and not to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-3 flex-shrink-0"></div>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-3 flex-shrink-0"></div>
                    <span>Share inappropriate, harmful, or offensive content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-3 flex-shrink-0"></div>
                    <span>Attempt to access unauthorized areas of our platform</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-3 flex-shrink-0"></div>
                    <span>Interfere with the security or functionality of our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-3 flex-shrink-0"></div>
                    <span>Impersonate others or provide false information about yourself</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-3 mr-3 flex-shrink-0"></div>
                    <span>Use our platform for commercial purposes without authorization</span>
                  </li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that violate these acceptable use guidelines.
                </p>
              </div>
            </motion.section>

            {/* Section 5: Intellectual Property Rights */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                5. Intellectual Property Rights
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  All content on the Nora platform, including text, graphics, images, videos, logos, and software, is protected by intellectual property rights and belongs to Nora or our licensors.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Restrictions on Use of Content</h3>
                <ol className="space-y-3 mb-6 list-decimal list-inside">
                  <li className="ml-4">
                    <span className="ml-2">Except as otherwise provided, the contents of this platform, including the use of the name "Nora", its logo, graphics, images, and information, shall not be copied, reproduced, republished, uploaded, posted, transmitted, or otherwise distributed without prior written permission from Nora.</span>
                  </li>
                  <li className="ml-4">
                    <span className="ml-2">To use any parts of our content, you must seek permission in writing, stating the content for use, intent of use, manner of use, time frame of use, and your identity. Nora reserves the right to refuse permission without declaring reasons.</span>
                  </li>
                  <li className="ml-4">
                    <span className="ml-2">Modification of any content or use of content for unauthorized purposes will violate Nora's copyright and other intellectual property rights.</span>
                  </li>
                  <li className="ml-4">
                    <span className="ml-2">Any request to reproduce content from our platform for publication or commercial use should be addressed to our legal department.</span>
                  </li>
                </ol>
              </div>
            </motion.section>

            {/* Section 6: Specialist Services */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                6. Specialist Services and Consultations
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our 1:1 specialist services are provided by qualified professionals. However, please note:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Consultations are for informational and support purposes and do not constitute medical, psychological, or therapeutic treatment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>In case of emergencies or serious concerns about child safety or wellbeing, contact your local emergency services immediately</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Our specialists maintain professional standards but cannot guarantee specific outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>You are responsible for implementing any advice or recommendations at your own discretion</span>
                  </li>
                </ul>
                <p>
                  Sessions may be recorded for quality assurance purposes with your consent. You may request that sessions not be recorded.
                </p>
              </div>
            </motion.section>

            {/* Section 7: Payment Terms */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                7. Payment Terms
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  For paid services:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>All fees must be paid in advance unless otherwise specified</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Subscription fees are charged automatically at the beginning of each billing period</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Refunds are provided according to our refund policy, which varies by service type</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>You can cancel subscriptions at any time, with cancellation effective at the end of the current billing period</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Prices may change with 30 days' notice to existing subscribers</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 8: Disclaimer of Warranties */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                8. Disclaimer of Warranties and Liability
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <ol className="space-y-4 mb-6 list-decimal list-inside">
                  <li className="ml-4">
                    <span className="ml-2 font-medium">Disclaimer of Warranties:</span>
                    <span className="ml-2">The contents and services of this platform are provided on an "as is" basis without warranties of any kind. To the fullest extent permitted by law, Nora does not warrant and hereby disclaims any warranty:</span>
                    <ul className="mt-3 space-y-2 ml-8">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">As to the accuracy, correctness, reliability, timeliness, non-infringement, title, merchantability, or fitness for any particular purpose of the content and services</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">That the platform or services will be uninterrupted or error-free, or that defects will be corrected, or that our platform and servers are free of viruses and harmful elements</span>
                      </li>
                    </ul>
                  </li>
                  <li className="ml-4">
                    <span className="ml-2 font-medium">Limitation of Liability:</span>
                    <span className="ml-2">Nora shall not be liable for any damage or loss of any kind caused as a result (direct or indirect) of the use of the platform, including but not limited to any damage or loss suffered as a result of reliance on the content or services available from our platform.</span>
                  </li>
                </ol>
              </div>
            </motion.section>

            {/* Section 9: Third-Party Links */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                9. Links to and from External Websites
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Links from Our Platform</h3>
                <p className="mb-4">
                  Our platform may contain hyperlinks to websites that are not maintained by Nora. These links are provided as a convenience to users. Nora is not responsible for the contents of those websites and shall not be liable for any damages or loss arising from access to those websites. Use of hyperlinks and access to external websites are entirely at your own risk.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Links to Our Platform</h3>
                <ol className="space-y-3 mb-6 list-decimal list-inside">
                  <li className="ml-4">
                    <span className="ml-2">You must secure permission from Nora prior to hyperlinking to, or framing, our platform or any of our content, or engaging in similar activities. Nora reserves the right to impose conditions when permitting any hyperlinking to, or framing of our platform or content.</span>
                  </li>
                  <li className="ml-4">
                    <span className="ml-2">Your linking to, or framing of our platform or content constitutes acceptance of these Terms of Use. This is deemed to be the case even after the posting of any changes or modifications to these Terms of Use.</span>
                  </li>
                  <li className="ml-4">
                    <span className="ml-2">Nora reserves all rights to disable any links to, or frames of any website containing inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful topics, names, material, or information.</span>
                  </li>
                </ol>
              </div>
            </motion.section>

            {/* Section 10: Termination */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                10. Termination
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Nora reserves all rights to deny or restrict access to our platform to any particular person, or to block access from a particular internet address, at any time, without ascribing any reasons whatsoever.
                </p>
                <p className="mb-4">
                  You may terminate your account at any time by following the account closure procedures in your account settings. Upon termination:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Your access to paid services will continue until the end of your current billing period</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Your personal data will be handled according to our Privacy Policy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>These Terms of Use will remain in effect regarding your past use of our services</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 11: Governing Law */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                11. Governing Law and Disputes
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  These Terms of Use are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of laws principles.
                </p>
                <p className="mb-4">
                  Any disputes arising from or related to these terms or your use of our platform will be resolved through binding arbitration, except for disputes that may be resolved in small claims court.
                </p>
                <p>
                  If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
                </p>
              </div>
            </motion.section>

            {/* Contact Section */}
            {/* <motion.section 
              className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                12. Contact Information
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  If you have any questions about these Terms of Use or need to request permission for content use, please contact us:
                </p>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Department</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-900 min-w-[60px]">Email:</span>
                      <a href="mailto:legal@nora.com" className="text-primary hover:text-secondary font-medium">legal@nora.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-900 min-w-[60px]">Phone:</span>
                      <a href="tel:+1234567890" className="text-primary hover:text-secondary font-medium">+1 (234) 567-8900</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-900 min-w-[60px]">Address:</span>
                      <span className="text-gray-700">
                        Nora Parenting Support Platform<br />
                        123 Family Way, Suite 400<br />
                        San Francisco, CA 94105<br />
                        United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section> */}

            {/* Effective Date */}
            <motion.div 
              className="text-center py-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <p className="text-gray-500 text-sm">
                These Terms of Use were last updated on <span className="font-medium">January 15, 2025</span>
              </p>
            </motion.div>

          </div>
        </main>
        
        <Footer hideCTA />
      </div>
    </>
  );
}