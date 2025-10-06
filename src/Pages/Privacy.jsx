import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-[#4A5565] font-sans leading-relaxed pt-[80px] px-4 sm:px-8 md:px-16 lg:px-28 xl:px-40 pb-12 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E2939] mb-8">
        Privacy Policy
      </h1>
      <p className="text-[#1447E6] text-sm sm:text-base font-semibold mb-8">
        Effective Date: October 5, 2025
      </p>

      <p className="text-base sm:text-lg mb-6">
        Welcome to <strong>Digiwanna</strong>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website{" "}
        <a
          href="https://digiwanna.com"
          className="text-[#1447E6] hover:underline font-medium"
        >
          https://digiwanna.com
        </a>{" "}
        and interact with us through our contact form or related digital
        services.
      </p>

      <p className="text-base sm:text-lg mb-6">
        By using our website, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        1. Who We Are
      </h2>
      <div className="text-base sm:text-lg mb-6 text-[#1E2939]">
        <strong>Digiwanna</strong>
        <br />
        <p className="flex items-start space-x-2 mt-2">
          <MdLocationOn className="text-[#1447E6] mt-1" size={22} />
          <span>
            A4, Lower GF, Near Vardhman Mall, Nanda Enclave, Sector 19, Dwarka,
            South West Delhi: 110075
          </span>
        </p>
        <p className="flex items-center space-x-2 mt-2">
          <FiGlobe className="text-[#1447E6]" size={22} />
          <a
            href="https://digiwanna.com"
            className="text-[#1447E6] hover:underline font-medium"
          >
            https://digiwanna.com
          </a>
        </p>
      </div>

      <ul className="list-disc pl-6 mb-6 text-base sm:text-lg space-y-1">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
        <li>Analytics & Insights</li>
        <li>E-commerce Solutions</li>
        <li>Graphic Design</li>
        <li>Domain, Hosting, and SSL</li>
        <li>CRM Solutions</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        2. Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-6 text-base sm:text-lg space-y-1">
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Company Name</li>
        <li>Service Interested In</li>
        <li>Budget</li>
        <li>Project Description</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        3. Use of Your Personal Data
      </h2>
      <ul className="list-disc pl-6 mb-6 text-base sm:text-lg space-y-1">
        <li>
          To provide and maintain our Service, including to monitor the usage of
          our Service.
        </li>
        <li>To manage your account and respond to service requests.</li>
        <li>To fulfill contracts and service agreements.</li>
        <li>
          To contact you with updates, information, or service-related messages.
        </li>
        <li>
          To provide news, special offers, and service-related content (if not
          opted out).
        </li>
        <li>To manage your inquiries and communication preferences.</li>
        <li>For business transfers, such as merger, acquisition, or sale.</li>
        <li>
          For analytics, feedback, marketing effectiveness, and service
          improvements.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        4. How We Share Your Information
      </h2>
      <ul className="list-disc pl-6 mb-6 text-base sm:text-lg space-y-1">
        <li>
          With authorized team members for communication or service delivery.
        </li>
        <li>
          With trusted partners or vendors directly involved in your project.
        </li>
        <li>
          To comply with legal obligations and respond to lawful requests.
        </li>
        <li>
          To protect the rights, safety, or integrity of Digiwanna or others.
        </li>
        <li>With your explicit consent, where applicable.</li>
      </ul>

      <p className="mb-6 text-base sm:text-lg font-semibold">
        We do not sell or rent your personal information.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        5. Retention of Your Personal Data
      </h2>
      <p className="mb-6 text-base sm:text-lg">
        Digiwanna retains your Personal Data only as long as necessary for the
        purposes described in this Privacy Policy. We may also retain
        information to comply with legal requirements, resolve disputes, or
        enforce our agreements. Usage data is typically retained for shorter
        periods unless it helps improve the service's security or functionality.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        6. Disclosure of Your Personal Data
      </h2>

      <h3 className="font-semibold text-lg sm:text-xl mt-6 mb-2">
        Business Transactions
      </h3>
      <p className="mb-4 text-base sm:text-lg">
        If we are involved in a merger, acquisition, or asset sale, your
        personal data may be transferred. You will be notified before any such
        change becomes effective.
      </p>

      <h3 className="font-semibold text-lg sm:text-xl mt-6 mb-2">
        Law Enforcement
      </h3>
      <p className="mb-4 text-base sm:text-lg">
        Under certain circumstances, we may be required to disclose your data to
        law enforcement or government authorities.
      </p>

      <h3 className="font-semibold text-lg sm:text-xl mt-6 mb-2">
        Other Legal Requirements
      </h3>
      <ul className="list-disc pl-6 mb-6 text-base sm:text-lg space-y-1">
        <li>To comply with legal obligations</li>
        <li>To protect and defend Digiwanna’s rights or property</li>
        <li>
          To investigate possible wrongdoing in connection with the service
        </li>
        <li>To protect the personal safety of users or the public</li>
        <li>To protect against legal liability</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        7. Security of Your Personal Data
      </h2>
      <p className="mb-6 text-base sm:text-lg">
        The security of your Personal Data is important to us. While we
        implement reasonable measures to safeguard it, no internet transmission
        or electronic storage method is 100% secure. We strive to use
        commercially acceptable methods to protect your data but cannot
        guarantee absolute security.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        8. Your Rights
      </h2>
      <ul className="list-disc pl-6 mb-6 text-base sm:text-lg space-y-1">
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate or outdated information</li>
        <li>Request deletion of your data</li>
        <li>Withdraw your consent at any time</li>
      </ul>
      <p className="mb-6 text-base sm:text-lg">
        Contact us at{" "}
        <a
          href="mailto:care.digiwanna@gmail.com"
          className="text-[#1447E6] hover:underline font-medium"
        >
          care.digiwanna@gmail.com
        </a>{" "}
        to exercise your rights.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        9. Children's Privacy
      </h2>
      <p className="mb-6 text-base sm:text-lg">
        Our services are not directed to anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children. If
        you believe your child has provided us with Personal Data, please
        contact us. If we learn that we have collected such data without
        parental consent, we will delete it immediately.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        10. Changes to This Policy
      </h2>
      <p className="mb-6 text-base sm:text-lg">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with a revised “Effective Date.” Please check this
        page regularly for updates.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2939] mt-10 mb-4">
        11. Contact Us
      </h2>
      <div className="space-y-4 text-base sm:text-lg text-[#1E2939]">
        <p className="flex items-center space-x-2">
          <MdEmail className="text-[#1447E6]" size={22} />
          <span>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:care.digiwanna@gmail.com"
              className="text-[#1447E6] hover:underline font-medium"
            >
              care.digiwanna@gmail.com
            </a>
          </span>
        </p>

        <p className="flex items-start space-x-2">
          <MdLocationOn className="text-[#1447E6] mt-1" size={22} />
          <span>
            <strong>Address:</strong> A4, Lower GF, Near Vardhman Mall, Nanda
            Enclave, Sector 19, Dwarka, South West Delhi: 110075
          </span>
        </p>

        <p className="flex items-center space-x-2">
          <FiGlobe className="text-[#1447E6]" size={22} />
          <span>
            <strong>Website:</strong>{" "}
            <a
              href="https://digiwanna.com"
              className="text-[#1447E6] hover:underline font-medium"
            >
              https://digiwanna.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
