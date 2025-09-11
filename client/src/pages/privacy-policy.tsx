import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Nora Family Support"
        description="We are committed to protecting your privacy and ensuring the security of any personal information you provide while using Nora's parenting support platform."
        keywords="privacy policy, data protection, personal information, parenting support, Nora"
        canonical="https://nora.com/privacy-policy"
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
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                We are committed to protecting your privacy and ensuring the security of any personal information you provide while using Nora's parenting support platform.
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
            
            {/* Section 1: Introduction */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                1. Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  At Nora ("we," "us," or "our"), we respect the privacy and confidentiality of our users' personal data. We are committed to implementing policies, practices, and processes to safeguard the collection, use, and disclosure of the personal data you provide us,  in compliance with the Singapore Personal Data Protection Act (PDPA) 2012. 
                </p>
                <p>
                  We have developed this Privacy Policy to assist you in understanding how we collect, use, disclose, process, and retain your personal data with regard to our parenting support platform and related services available through our website and mobile application.
                </p>
              </div>
            </motion.section>

            {/* Section 2: Personal Data */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                2. Personal Data
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Personal data refers to any information about an individual who can be identified from that data, or from that data combined with other information that we have or are likely to have access to.
                </p>
                <p className="mb-4">Some examples of personal data that we may collect include:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Your name, email address, phone number, mailing address, and any other contact information you provide</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Account credentials and profile information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Information about your children (ages, developmental stages, interests) that you choose to share</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Communication records from 1:1 specialist consultations and platform interactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Usage data and interaction patterns with our platform and content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Payment and billing information for our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Device information and technical data when you use our platform</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3: Collection of Personal Data */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                3. Collection of Personal Data
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">Nora collects personal data in the following ways:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>When you create an account and set up your profile</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>When you book and participate in 1:1 specialist consultations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>When you access and interact with our content library and resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>When you communicate with our support team or specialists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>When you subscribe to our newsletters or marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>When you make payments for our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Through automated technologies when you use our platform</span>
                  </li>
                </ul>
                <p className="mb-4">
                  Nora does not collect personal data without your knowledge. We may ask you to provide information while using our platform, and your provision of personal data will be taken as your consent for us to use the information for the purposes outlined in this policy.
                </p>
                <p>
                  We will not sell, lease, or rent your personal information to any external organization or individual. However, we may need to disclose personal information for legal reasons, such as compliance with applicable laws, regulations, court orders, or in response to law enforcement requests.
                </p>
              </div>
            </motion.section>

            {/* Section 4: How We Use Your Personal Data */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                4. How We Use Your Personal Data
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">We use the personal data we have collected about you for one or more of the following purposes:</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Provide access to our parenting content library and resources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Facilitate 1:1 specialist consultations and appointments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Personalize content recommendations based on your family's needs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Process payments and manage subscription services</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication & Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Send platform updates and important service notifications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Provide customer support and respond to inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Send educational content and parenting tips (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Communicate appointment reminders and follow-ups</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Improvement</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Analyze platform usage to improve our services and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Develop new features and content based on user needs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Ensure platform security and prevent fraud or abuse</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal & Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Comply with legal obligations and regulatory requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Maintain records for accounting, auditing, and business purposes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                      <span>Investigate and resolve disputes or complaints</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 5: Disclosure of Personal Data */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                5. Disclosure of Your Personal Data
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Personal data that you provide will be protected and kept confidential but, subject to applicable law, may be disclosed for the purposes listed above where applicable to the following parties:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Our qualified specialists and healthcare professionals who provide 1:1 consultations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Our employees, contractors, and authorized service providers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Third-party service providers for payment processing, data storage, and technical support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Regulatory or government bodies when required by law</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Legal authorities in response to valid legal requests</span>
                  </li>
                </ul>
                <p>
                  All third parties who have access to your personal data are bound by confidentiality agreements and data protection requirements consistent with this privacy policy.
                </p>
              </div>
            </motion.section>

            {/* Section 6: Your Rights and Choices */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                6. Your Rights and Choices
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  You have several rights regarding your personal data. If you wish to exercise any of these rights, please contact our Data Protection Officer using the contact details provided below.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span><strong>Right to Access:</strong> Request access to your personal data and information about how we process it</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing activities that require consent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-3 mr-3 flex-shrink-0"></div>
                    <span><strong>Right to Data Portability:</strong> Receive your personal data in a structured, commonly used format</span>
                  </li>
                </ul>
                <p>
                  Nora aims to respond to your requests within 30 days. Please note that exercising these rights may affect our ability to provide certain services to you.
                </p>
              </div>
            </motion.section>

            {/* Section 7: Data Security */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                7. Data Security
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Access controls and authentication protocols</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0"></div>
                    <span>Employee training on data protection practices</span>
                  </li>
                </ul>
                <p>
                  While we strive to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard practices to safeguard your information.
                </p>
              </div>
            </motion.section>

            {/* Section 8: Data Retention */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                8. Data Retention
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary depending on the type of data and the purpose for which it was collected.
                </p>
                <p>
                  When personal data is no longer needed, we will securely delete or anonymize it in accordance with our data retention and disposal procedures.
                </p>
              </div>
            </motion.section>

            {/* Section 9: Cookies and Tracking */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                9. Cookies and Tracking Technologies
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our platform, analyze usage patterns, and provide personalized content. Cookies are small data files stored on your device when you visit our website or use our app.
                </p>
                <p className="mb-4">You can control cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of our platform.</p>
                <p>
                  For detailed information about the cookies we use and how to manage them, please refer to our Cookie Policy.
                </p>
              </div>
            </motion.section>

            {/* Section 10: Third-Party Services */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                10. Third-Party Services and Links
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our platform may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices or content of these external sites and services. We encourage you to review their privacy policies before providing any personal information.
                </p>
                <p>
                  When you interact with third-party services through our platform, your data may be subject to their privacy policies in addition to ours.
                </p>
              </div>
            </motion.section>

            {/* Section 11: International Data Transfers */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                11. International Data Transfers
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Your personal data may be transferred to and processed in countries other than your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your personal data in accordance with applicable data protection laws.
                </p>
                <p>
                  These safeguards may include adequacy decisions by relevant authorities, standard contractual clauses, or other legally recognized transfer mechanisms.
                </p>
              </div>
            </motion.section>

            {/* Section 12: Updates to Privacy Policy */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-gradient-primary">
                12. Updates to This Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of any material changes through the platform or by email.
                </p>
                <p>
                  Please review this policy periodically for updates. Changes are effective when posted on this page.
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
                13. Contact Us
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, our data practices, or wish to exercise your rights regarding your personal data, please contact our Data Protection Officer:
                </p>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection Officer</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-900 min-w-[60px]">Email:</span>
                      <a href="mailto:privacy@nora.com" className="text-primary hover:text-secondary font-medium">privacy@nora.com</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-medium text-gray-900 min-w-[60px]">Address:</span>
                      <span className="text-gray-700">
                        Nora Parenting and Family Care<br />
                        Singapore
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>For the fastest response:</strong> Please include your full name, contact information, and a brief description of your inquiry or request when contacting us.
                    </p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-600">
                  We treat all privacy inquiries seriously and will respond confidentially within a reasonable timeframe. Your privacy matters to us, and we're here to help ensure your data is handled with the care and respect it deserves.
                </p>
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
                This Privacy Policy was last updated on <span className="font-medium">January 15, 2025</span>
              </p>
            </motion.div>

          </div>
        </main>
        
        <Footer hideCTA />
      </div>
    </>
  );
}