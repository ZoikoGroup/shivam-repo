"use client";

import { useState, FC, ReactNode, FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowLeft, HiX } from "react-icons/hi";

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = "login" | "register" | "reset";
type ModalType = "terms" | "privacy" | null;

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

interface EyeToggleProps {
  show: boolean;
  toggle: () => void;
}

interface GoogleBtnProps {
  label: string;
  onClick: () => void;
}

interface FieldProps {
  label: string;
  type?: string;
}

interface PasswordFieldProps {
  label: string;
  show: boolean;
  toggle: () => void;
}

interface PrimaryBtnProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

interface TextLinkProps {
  label: string;
  onClick: () => void;
}

// ─── Google OAuth ─────────────────────────────────────────────────────────────
const GOOGLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "YOUR_GOOGLE_CLIENT_ID";

function openGoogleLogin(callback: (token: string) => void): void {
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${window.location.origin}/auth/google/callback`,
    response_type: "token",
    scope: "openid email profile",
    prompt: "select_account",
  });

  const popup = window.open(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
    "Google Login",
    `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no`
  );

  const listener = (e: MessageEvent) => {
    if (e.origin !== window.location.origin) return;
    if (
      (e.data as { type?: string; token?: string })?.type ===
      "GOOGLE_AUTH_SUCCESS"
    ) {
      window.removeEventListener("message", listener);
      popup?.close();
      const token = (e.data as { token: string }).token;
      callback(token);
    }
  };

  window.addEventListener("message", listener);
}

// ─── Sub-components (defined OUTSIDE AuthPanel to prevent remounting) ─────────

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[680px] max-h-[82vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
          <h2 className="text-[18px] font-bold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Close modal">
            <HiX size={22} />
          </button>
        </div>
        <div className="overflow-y-auto px-7 py-6 text-[14px] text-gray-600 leading-relaxed space-y-5">
          {children}
        </div>
        <div className="px-7 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-semibold text-white text-[14px] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1E6B62" }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

const Section: FC<SectionProps> = ({ title, children }) => (
  <div>
    <h3 className="font-bold text-gray-900 text-[15px] mb-1.5">{title}</h3>
    <p>{children}</p>
  </div>
);

// ✅ All UI sub-components are outside AuthPanel — no remounting on state change

const EyeToggle: FC<EyeToggleProps> = ({ show, toggle }) => (
  <button
    type="button"
    onClick={toggle}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
    aria-label={show ? "Hide password" : "Show password"}
  >
    {show ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
  </button>
);

const GoogleBtn: FC<GoogleBtnProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full h-[50px] bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center gap-3 font-semibold text-[14.5px] text-gray-700 hover:bg-gray-50 active:scale-[.98] transition-all shadow-sm"
  >
    <FcGoogle size={22} />
    {label}
  </button>
);

const Field: FC<FieldProps> = ({ label, type = "text" }) => (
  <div>
    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#0C7687" }}>
      {label}
    </label>
    <input
      type={type}
      className="w-full h-[48px] px-4 rounded-xl border border-gray-200 text-gray-700 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0C7687] bg-white shadow-sm transition"
    />
  </div>
);

const PasswordField: FC<PasswordFieldProps> = ({ label, show, toggle }) => (
  <div>
    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#0C7687" }}>
      {label}
    </label>
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className="w-full h-[48px] px-4 pr-12 rounded-xl border border-gray-200 text-gray-700 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0C7687] bg-white shadow-sm transition"
      />
      <EyeToggle show={show} toggle={toggle} />
    </div>
  </div>
);

const PrimaryBtn: FC<PrimaryBtnProps> = ({ label, onClick, type = "submit" }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full h-[50px] rounded-xl font-bold text-[15.5px] text-white hover:opacity-90 active:scale-[.98] transition-all"
    style={{ backgroundColor: "#1E6B62" }}
  >
    {label}
  </button>
);

const TextLink: FC<TextLinkProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="font-semibold hover:underline transition-all"
    style={{ color: "#0C7687" }}
  >
    {label}
  </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const tabs: { key: Tab; label: string }[] = [
  { key: "login", label: "Login" },
  { key: "register", label: "Register" },
  { key: "reset", label: "Reset Password" },
];

export default function AuthPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("login");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [resetStep, setResetStep] = useState<1 | 2>(1);
  const [modal, setModal] = useState<ModalType>(null);
  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(null);

  const switchTab = (tab: Tab): void => {
    setActiveTab(tab);
    setResetStep(1);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleGoogleAuth = (): void => {
    openGoogleLogin((token: string) => {
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => r.json())
        .then((user: GoogleUser) => {
          setGoogleUser(user);
          console.log("Logged in as:", user);
        })
        .catch(console.error);
    });
  };

  return (
    <>
      <section className="min-h-screen bg-[#F3F5F6] flex items-center justify-center px-4 py-10">
        <div
          className="w-full max-w-[1100px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ minHeight: "640px" }}
        >
          {/* ── LEFT: full-cover image ── */}
          <div className="relative hidden lg:block">
            <img
              src="/pic4.png"
              alt="Travel connectivity"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 55%)" }}
            />
          </div>

          {/* ── RIGHT: forms ── */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center overflow-y-auto">

            {/* Google user banner */}
            {googleUser && (
              <div className="mb-5 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <img src={googleUser.picture} alt={googleUser.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-[13px] font-semibold text-green-800">Signed in as {googleUser.name}</p>
                  <p className="text-[12px] text-green-600">{googleUser.email}</p>
                </div>
                <button
                  onClick={() => setGoogleUser(null)}
                  className="ml-auto text-green-400 hover:text-green-700 transition-colors"
                  aria-label="Sign out"
                >
                  <HiX size={16} />
                </button>
              </div>
            )}

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 text-[14px] font-medium mb-8">
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => switchTab(key)}
                  className={`pb-3 whitespace-nowrap transition-colors ${
                    activeTab === key
                      ? "border-b-2 border-[#0C7687] text-[#0C7687] font-semibold"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ════ LOGIN ════ */}
            {activeTab === "login" && (
              <>
                <h3 className="text-[28px] font-bold text-gray-900">Welcome back!</h3>
                <p className="mt-1.5 mb-6 text-[14px] text-gray-500">
                  Enter your credentials to access your account.
                </p>
                <form className="space-y-4" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
                  <Field label="Username or Email Address" />
                  <PasswordField
                    label="Password"
                    show={showPassword}
                    toggle={() => setShowPassword((p) => !p)}
                  />
                  <GoogleBtn label="Login with Google" onClick={handleGoogleAuth} />
                  <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                    <input type="checkbox" className="w-4 h-4 rounded" style={{ accentColor: "#0C7687" }} />
                    <span>Remember for 30 days</span>
                  </div>
                  <PrimaryBtn label="Log In" />
                  <div className="text-center text-[13px] pt-1 flex items-center justify-center gap-2">
                    <TextLink label="Forgot Password?" onClick={() => switchTab("reset")} />
                    <span className="text-gray-300">|</span>
                    <TextLink label="Create Account" onClick={() => switchTab("register")} />
                  </div>
                </form>
              </>
            )}

            {/* ════ REGISTER ════ */}
            {activeTab === "register" && (
              <>
                <h3 className="text-[28px] font-bold text-gray-900">Create account</h3>
                <p className="mt-1.5 mb-6 text-[14px] text-gray-500">
                  Join Zoiko Orbit and stay connected everywhere.
                </p>
                <form className="space-y-4" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First Name" />
                    <Field label="Last Name" />
                  </div>
                  <Field label="Email Address" type="email" />
                  <Field label="Phone Number" type="tel" />
                  <PasswordField
                    label="Password"
                    show={showPassword}
                    toggle={() => setShowPassword((p) => !p)}
                  />
                  <PasswordField
                    label="Confirm Password"
                    show={showConfirmPassword}
                    toggle={() => setShowConfirmPassword((p) => !p)}
                  />
                  <GoogleBtn label="Sign up with Google" onClick={handleGoogleAuth} />
                  <div className="flex items-start gap-2.5 text-[13px] text-gray-600">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-0.5 flex-shrink-0 rounded"
                      style={{ accentColor: "#0C7687" }}
                    />
                    <span>
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setModal("terms")}
                        className="font-semibold underline hover:opacity-80 transition-opacity"
                        style={{ color: "#0C7687" }}
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        onClick={() => setModal("privacy")}
                        className="font-semibold underline hover:opacity-80 transition-opacity"
                        style={{ color: "#0C7687" }}
                      >
                        Privacy Policy
                      </button>
                    </span>
                  </div>
                  <PrimaryBtn label="Create Account" />
                  <p className="text-center text-[13px] text-gray-500 pt-1">
                    Already have an account?{" "}
                    <TextLink label="Log In" onClick={() => switchTab("login")} />
                  </p>
                </form>
              </>
            )}

            {/* ════ RESET PASSWORD ════ */}
            {activeTab === "reset" && (
              <>
                {resetStep === 1 ? (
                  <>
                    <h3 className="text-[28px] font-bold text-gray-900">Reset password</h3>
                    <p className="mt-1.5 mb-6 text-[14px] text-gray-500">
                      Enter your email and we'll send you a reset link.
                    </p>
                    <form
                      className="space-y-4"
                      onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        setResetStep(2);
                      }}
                    >
                      <Field label="Email Address" type="email" />
                      <PrimaryBtn label="Send Reset Link" />
                      <p className="text-center text-[13px] text-gray-500 pt-1">
                        Remember your password?{" "}
                        <TextLink label="Log In" onClick={() => switchTab("login")} />
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center py-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#e6f4f1" }}
                    >
                      <MdOutlineEmail size={38} color="#1E6B62" />
                    </div>
                    <BsCheckCircleFill size={24} color="#1E6B62" className="mb-3" />
                    <h3 className="text-[24px] font-bold text-gray-900 mb-2">Check your inbox</h3>
                    <p className="text-[14px] text-gray-500 max-w-[280px] leading-relaxed mb-6">
                      We've sent a password reset link to your email. It may take a minute to arrive.
                    </p>
                    <button
                      type="button"
                      onClick={() => setResetStep(1)}
                      className="flex items-center gap-1.5 text-[13px] font-semibold hover:underline mb-6 transition-all"
                      style={{ color: "#0C7687" }}
                    >
                      <HiArrowLeft size={14} />
                      Didn't receive it? Resend
                    </button>
                    <PrimaryBtn label="Back to Login" type="button" onClick={() => switchTab("login")} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* ════ TERMS OF SERVICE MODAL ════ */}
      <Modal open={modal === "terms"} onClose={() => setModal(null)} title="Terms of Service">
        <p className="text-[13px] text-gray-400">Last updated: February 2026</p>
        <Section title="1. Acceptance of Terms">
          By accessing or using Zoiko Orbit™ services, you confirm that you are at least 18 years of age and agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.
        </Section>
        <Section title="2. Description of Service">
          Zoiko Orbit™ provides international eSIM connectivity solutions, allowing users to access mobile data services across 150+ countries without physical SIM card swaps. Our services are subject to availability in your region and applicable local regulations.
        </Section>
        <Section title="3. Account Registration">
          You must provide accurate, complete, and current information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at support@zoikoorbit.com of any unauthorized use.
        </Section>
        <Section title="4. Acceptable Use">
          You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service. Prohibited activities include unauthorized network access, transmission of malware, spamming, and any activity that violates applicable laws or regulations.
        </Section>
        <Section title="5. Payments & Refunds">
          All charges are billed in advance. Subscription fees are non-refundable except as required by law or at our sole discretion. Data top-ups are non-refundable once activated. We reserve the right to change pricing with 30 days' notice.
        </Section>
        <Section title="6. Data Usage & Fair Use">
          Your eSIM plan is subject to our Fair Use Policy. Excessive usage that impacts network quality for other users may result in speed throttling or temporary suspension. Specific data caps are outlined in your plan details.
        </Section>
        <Section title="7. Intellectual Property">
          All content, trademarks, logos, and technology associated with Zoiko Orbit™ are the exclusive property of Zoiko Orbit Ltd. You may not reproduce, distribute, or create derivative works without express written permission.
        </Section>
        <Section title="8. Limitation of Liability">
          To the maximum extent permitted by law, Zoiko Orbit™ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
        </Section>
        <Section title="9. Termination">
          We reserve the right to suspend or terminate your account at our discretion, with or without notice, for violation of these terms. Upon termination, your right to use the service ceases immediately.
        </Section>
        <Section title="10. Changes to Terms">
          We may revise these terms at any time. Continued use of the service after changes constitutes your acceptance of the new terms. We will notify registered users via email of material changes.
        </Section>
        <Section title="11. Contact">
          For questions about these Terms, contact us at: legal@zoikoorbit.com or write to Zoiko Orbit Ltd., 123 Global Street, London, EC1A 1BB, United Kingdom.
        </Section>
      </Modal>

      {/* ════ PRIVACY POLICY MODAL ════ */}
      <Modal open={modal === "privacy"} onClose={() => setModal(null)} title="Privacy Policy">
        <p className="text-[13px] text-gray-400">Last updated: February 2026</p>
        <Section title="1. Introduction">
          Zoiko Orbit™ ("we", "us", "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services.
        </Section>
        <Section title="2. Information We Collect">
          We collect information you provide directly: name, email address, phone number, billing information, and account preferences. We also automatically collect device information, IP addresses, usage data, and location data (country-level) to provide connectivity services.
        </Section>
        <Section title="3. How We Use Your Information">
          Your data is used to: provide and improve our eSIM services, process payments, send transactional and promotional communications (with your consent), detect and prevent fraud, comply with legal obligations, and personalise your experience on our platform.
        </Section>
        <Section title="4. Sharing of Information">
          We do not sell your personal data. We may share data with trusted third-party providers (payment processors, network carriers, analytics tools) strictly for service delivery. All partners are bound by data processing agreements aligned with GDPR and applicable regulations.
        </Section>
        <Section title="5. Google Login & Third-Party Auth">
          If you choose to sign in via Google, we receive your name, email, and profile picture from Google. We do not store your Google password. Your use of Google Sign-In is also subject to Google's Privacy Policy at policies.google.com/privacy.
        </Section>
        <Section title="6. Cookies & Tracking">
          We use essential cookies for session management and optional analytics cookies to improve our service. You may control cookie preferences through your browser settings. Disabling certain cookies may affect functionality.
        </Section>
        <Section title="7. Data Retention">
          We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, data is purged within 90 days unless retention is required by law.
        </Section>
        <Section title="8. Your Rights">
          Depending on your jurisdiction, you may have the right to: access your personal data, correct inaccurate data, request deletion, object to processing, and data portability. Submit requests to privacy@zoikoorbit.com.
        </Section>
        <Section title="9. Data Security">
          We implement industry-standard security measures including TLS encryption, hashed passwords, and regular security audits. However, no method of transmission over the internet is 100% secure.
        </Section>
        <Section title="10. Children's Privacy">
          Our services are not directed to individuals under 18. We do not knowingly collect personal information from minors. If we discover such data has been collected, it will be promptly deleted.
        </Section>
        <Section title="11. International Transfers">
          Your data may be processed in countries outside your own. We ensure adequate protection through standard contractual clauses and compliance with applicable data transfer regulations.
        </Section>
        <Section title="12. Contact">
          For privacy-related queries, contact our Data Protection Officer at: privacy@zoikoorbit.com or Zoiko Orbit Ltd., 123 Global Street, London, EC1A 1BB, United Kingdom.
        </Section>
      </Modal>
    </>
  );
}