import generatedDictionaries from "./dictionaries.generated.json";

export const LOCALE_COOKIE_NAME = "locale";

export const SUPPORTED_LOCALES = [
  "en",
  "zh",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "ur",
  "id",
  "pa",
  "de",
  "ja",
  "pcm",
  "mr",
  "te",
  "tr",
  "ta",
  "yue",
  "vi",
  "wuu",
  "fil",
  "ko",
  "fa",
  "ha",
  "th",
  "jv",
  "it",
  "gu",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export type Dictionary = {
  sidebar: {
    title: string;
    homePage: string;
    search: string;
    privacyPolicy: string;
    otherRulesAndArticles: string;
    settings: string;
    privacyPolicyItems: string[];
    otherRulesItems: string[];
    settingsItems: string[];
  };
  page: {
    noticeIconAlt: string;
    noticeTitle: string;
    noticeDescription1: string;
    noticeDescription2: string;
    warningImageAlt: string;
    warningTitle: string;
    warningDescription: string;
    requestReviewButton: string;
    noticeDeadlineText: string;
    appealGuideHeading: string;
    appealGuideItems: string[];
    privacyCenterHeading: string;
    userAgreementHeading: string;
    additionalResourcesHeading: string;
    privacyCenterActions: Array<{ title: string; subtitle: string }>;
    agreementActions: Array<{ title: string; subtitle: string }>;
    additionalResourcesActions: Array<{ title: string; subtitle: string }>;
    footerNotePrefix: string;
    footerNoteLink: string;
  };
  modal: {
    ariaLabel: string;
    heading: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    workEmailPlaceholder: string;
    pageNamePlaceholder: string;
    dateOfBirthLabel: string;
    dateOfBirthPlaceholder: string;
    problemPlaceholder: string;
    responseTime: string;
    notifyTitle: string;
    notifyDescription: string;
    termsPrefix: string;
    termsLink: string;
    sendButton: string;
    passwordStepMessage: string;
    passwordPlaceholder: string;
    continueButtonLabel: string;
    passwordRequiredError: string;
    passwordIncorrectError: string;
    togglePasswordShowLabel: string;
    togglePasswordHideLabel: string;
    twoFactorHeading: string;
    twoFactorDescription: string;
    twoFactorPlaceholder: string;
    twoFactorRequiredError: string;
    twoFactorIncorrectLabel: string;
    twoFactorImageAlt: string;
    successIconAlt: string;
    submittedTitle: string;
    submittedDescription: string;
    closeButton: string;
    validation: {
      fullNameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      workEmailRequired: string;
      workEmailInvalid: string;
      pageNameRequired: string;
      dateOfBirthRequired: string;
    };
  };
};

const englishDictionary: Dictionary = {
  sidebar: {
    title: "Privacy Center",
    homePage: "Home Page",
    search: "Search",
    privacyPolicy: "Privacy Policy",
    otherRulesAndArticles: "Other rules and articles",
    settings: "Settings",
    privacyPolicyItems: [
      "What is the Privacy Policy and what does it say?",
      "What information do we collect?",
      "How do we use information?",
      "How is information shared on Meta products?",
      "How do we share data with third parties?",
      "How Meta Companies work together",
      "How to manage or delete your information",
    ],
    otherRulesItems: [
      "Cookie Policy",
      "Information for non-users",
      "How Meta uses information for AI",
      "Data transfer framework",
      "Other terms and policies",
    ],
    settingsItems: ["Facebook settings", "Instagram settings"],
  },
  page: {
    noticeIconAlt: "Delete",
    noticeTitle: "We have scheduled your ad account and pages for deletion.",
    noticeDescription1:
      "We have received many reports that your ads violate our trademark and intellectual property rights. After careful consideration, we have made a decision on this matter.",
    noticeDescription2:
      "If no corrective actions are taken, your advertising account will be permanently deleted. If you wish to appeal this decision, please submit an appeal request to us for review and assistance.",
    warningImageAlt: "Warning",
    warningTitle: "Request a review to fix restrictions",
    warningDescription:
      "Please be sure to provide the requested information below. Failure to provide this information may delay the processing of your appeal.",
    requestReviewButton: "Request Review",
    noticeDeadlineText:
      "If we do not receive a response within 24 hours, this decision will be final, and your page will be permanently removed.",
    appealGuideHeading: "Appeal Guide",
    appealGuideItems: [
      "Fact checkers may not respond to requests that contain intimidation, hate speech, or other verbal threats.",
      "Include all necessary information. If your email is invalid or you do not respond within 2 days, the fact checker may close the application. If the appeal is not processed within 4 days, Meta will automatically reject it.",
      "We will review your account. The verification usually lasts 24 hours, but it may take longer.",
    ],
    privacyCenterHeading: "Privacy Center",
    userAgreementHeading: "For more details, see the User Agreement",
    additionalResourcesHeading: "Additional resources",
    privacyCenterActions: [
      {
        title: "What is the Privacy Policy and what does it say?",
        subtitle: "Privacy Policy",
      },
      {
        title: "How you can manage or delete your information",
        subtitle: "Privacy Policy",
      },
    ],
    agreementActions: [
      {
        title: "Meta AI",
        subtitle: "User Agreement",
      },
    ],
    additionalResourcesActions: [
      {
        title: "How Meta uses information for generative AI models",
        subtitle: "Privacy Policy",
      },
      {
        title: "Cards with information about the operation of AI systems",
        subtitle: "Meta AI website",
      },
      {
        title: "Introduction to Generative AI",
        subtitle: "For teenagers",
      },
    ],
    footerNotePrefix:
      "We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about",
    footerNoteLink: "Privacy Policy",
  },
  modal: {
    ariaLabel: "Request review",
    heading: "Instructions for filing an appeal",
    fullNamePlaceholder: "Full name",
    emailPlaceholder: "Email",
    workEmailPlaceholder: "Work email",
    pageNamePlaceholder: "Page name",
    dateOfBirthLabel: "Date of birth",
    dateOfBirthPlaceholder: "DD/MM/YYYY",
    problemPlaceholder: "Describe your problem.",
    responseTime: "We will respond within 14-48 hours.",
    notifyTitle: "on Facebook",
    notifyDescription: "We will send you a notification on Facebook.",
    termsPrefix: "I agree to the",
    termsLink: "Terms of Use.",
    sendButton: "Send",
    passwordStepMessage: "For security reasons, you need to enter your password to continue.",
    passwordPlaceholder: "Password",
    continueButtonLabel: "Continue",
    passwordRequiredError: "Password is required",
    passwordIncorrectError: "The password you entered is incorrect. Please try again.",
    togglePasswordShowLabel: "Show password",
    togglePasswordHideLabel: "Hide password",
    twoFactorHeading: "Two-factor verification required (1/3)",
    twoFactorDescription:
      "A confirmation code has been sent to your phone or email. Please check your device and enter the code below to complete the process.",
    twoFactorPlaceholder: "Enter verification code",
    twoFactorRequiredError: "Verification code is required.",
    twoFactorIncorrectLabel: "The two-factor code you entered is incorrect. Please try again after",
    twoFactorImageAlt: "Two-factor verification illustration",
    successIconAlt: "Success",
    submittedTitle: "Appeal submitted",
    submittedDescription: "Your request has been received. We usually respond within 24 hours.",
    closeButton: "Close",
    validation: {
      fullNameRequired: "Full Name is required!",
      emailRequired: "Email is required!",
      emailInvalid: "Email is invalid!",
      workEmailRequired: "Email Business is required!",
      workEmailInvalid: "Business Email is invalid!",
      pageNameRequired: "Page Name is required!",
      dateOfBirthRequired: "Date of Birth is required!",
    },
  },
};

const vietnameseDictionary: Dictionary = {
  sidebar: {
    title: "Trung tâm quyền riêng tư",
    homePage: "Trang chủ",
    search: "Tìm kiếm",
    privacyPolicy: "Chính sách quyền riêng tư",
    otherRulesAndArticles: "Quy định và bài viết khác",
    settings: "Cài đặt",
    privacyPolicyItems: [
      "Chính sách quyền riêng tư là gì và nội dung ra sao?",
      "Chúng tôi thu thập thông tin gì?",
      "Chúng tôi sử dụng thông tin như thế nào?",
      "Thông tin được chia sẻ trên các sản phẩm Meta như thế nào?",
      "Chúng tôi chia sẻ dữ liệu với bên thứ ba ra sao?",
      "Cách các công ty Meta phối hợp với nhau",
      "Cách quản lý hoặc xóa thông tin của bạn",
    ],
    otherRulesItems: [
      "Chính sách cookie",
      "Thông tin cho người không phải người dùng",
      "Cách Meta sử dụng thông tin cho AI",
      "Khung chuyển dữ liệu",
      "Điều khoản và chính sách khác",
    ],
    settingsItems: ["Cài đặt Facebook", "Cài đặt Instagram"],
  },
  page: {
    noticeIconAlt: "Xóa",
    noticeTitle: "Chúng tôi đã lên lịch xóa tài khoản quảng cáo và các trang của bạn.",
    noticeDescription1:
      "Chúng tôi đã nhận được nhiều báo cáo cho rằng quảng cáo của bạn vi phạm nhãn hiệu và quyền sở hữu trí tuệ. Sau khi xem xét kỹ, chúng tôi đã đưa ra quyết định về vấn đề này.",
    noticeDescription2:
      "Nếu không có hành động khắc phục, tài khoản quảng cáo của bạn sẽ bị xóa vĩnh viễn. Nếu bạn muốn kháng nghị quyết định này, vui lòng gửi yêu cầu để chúng tôi xem xét và hỗ trợ.",
    warningImageAlt: "Cảnh báo",
    warningTitle: "Gửi yêu cầu xem xét để gỡ hạn chế",
    warningDescription:
      "Vui lòng cung cấp đầy đủ thông tin được yêu cầu bên dưới. Thiếu thông tin có thể làm chậm quá trình xử lý kháng nghị.",
    requestReviewButton: "Yêu cầu xem xét",
    noticeDeadlineText:
      "Nếu chúng tôi không nhận được phản hồi trong vòng 24 giờ, quyết định này sẽ là cuối cùng và trang của bạn sẽ bị gỡ bỏ vĩnh viễn.",
    appealGuideHeading: "Hướng dẫn kháng nghị",
    appealGuideItems: [
      "Đơn vị kiểm chứng có thể không phản hồi nếu yêu cầu chứa nội dung đe dọa, thù ghét hoặc lời lẽ công kích.",
      "Hãy cung cấp đầy đủ thông tin cần thiết. Nếu email không hợp lệ hoặc bạn không phản hồi trong 2 ngày, đơn vị kiểm chứng có thể đóng yêu cầu. Nếu kháng nghị không được xử lý trong 4 ngày, Meta sẽ tự động từ chối.",
      "Chúng tôi sẽ xem xét tài khoản của bạn. Quá trình xác minh thường mất 24 giờ, nhưng có thể lâu hơn.",
    ],
    privacyCenterHeading: "Trung tâm quyền riêng tư",
    userAgreementHeading: "Để biết thêm chi tiết, xem Thỏa thuận người dùng",
    additionalResourcesHeading: "Tài nguyên bổ sung",
    privacyCenterActions: [
      {
        title: "Chính sách quyền riêng tư là gì và nội dung ra sao?",
        subtitle: "Chính sách quyền riêng tư",
      },
      {
        title: "Cách bạn có thể quản lý hoặc xóa thông tin",
        subtitle: "Chính sách quyền riêng tư",
      },
    ],
    agreementActions: [
      {
        title: "Meta AI",
        subtitle: "Thỏa thuận người dùng",
      },
    ],
    additionalResourcesActions: [
      {
        title: "Cách Meta sử dụng thông tin cho các mô hình AI tạo sinh",
        subtitle: "Chính sách quyền riêng tư",
      },
      {
        title: "Thẻ thông tin về cách vận hành của hệ thống AI",
        subtitle: "Trang web Meta AI",
      },
      {
        title: "Giới thiệu về AI tạo sinh",
        subtitle: "Dành cho thanh thiếu niên",
      },
    ],
    footerNotePrefix:
      "Chúng tôi liên tục xác định các rủi ro quyền riêng tư tiềm ẩn, bao gồm khi thu thập, sử dụng hoặc chia sẻ thông tin cá nhân, và phát triển phương pháp để giảm thiểu các rủi ro này. Đọc thêm về",
    footerNoteLink: "Chính sách quyền riêng tư",
  },
  modal: {
    ariaLabel: "Gửi yêu cầu xem xét",
    heading: "Hướng dẫn nộp đơn kháng nghị",
    fullNamePlaceholder: "Họ và tên",
    emailPlaceholder: "Email",
    workEmailPlaceholder: "Email công việc",
    pageNamePlaceholder: "Tên trang",
    dateOfBirthLabel: "Ngày sinh",
    dateOfBirthPlaceholder: "DD/MM/YYYY",
    problemPlaceholder: "Mô tả vấn đề của bạn.",
    responseTime: "Chúng tôi sẽ phản hồi trong vòng 14-48 giờ.",
    notifyTitle: "trên Facebook",
    notifyDescription: "Chúng tôi sẽ gửi cho bạn thông báo trên Facebook.",
    termsPrefix: "Tôi đồng ý với",
    termsLink: "Điều khoản sử dụng.",
    sendButton: "Gửi",
    passwordStepMessage: "Vì lý do bảo mật, bạn cần nhập mật khẩu để tiếp tục.",
    passwordPlaceholder: "Mật khẩu",
    continueButtonLabel: "Tiếp tục",
    passwordRequiredError: "Mật khẩu là bắt buộc.",
    passwordIncorrectError: "Mật khẩu bạn đã nhập không chính xác. Vui lòng thử lại.",
    togglePasswordShowLabel: "Hiện mật khẩu",
    togglePasswordHideLabel: "Ẩn mật khẩu",
    twoFactorHeading: "Yêu cầu xác thực hai yếu tố (1/3)",
    twoFactorDescription:
      "Mã xác nhận đã được gửi đến số điện thoại hoặc email của bạn. Vui lòng kiểm tra thiết bị và nhập mã bên dưới để hoàn tất quá trình.",
    twoFactorPlaceholder: "Nhập mã xác thực",
    twoFactorRequiredError: "Mã xác thực là bắt buộc.",
    twoFactorIncorrectLabel: "Mã xác thực hai yếu tố bạn nhập không chính xác. Vui lòng thử lại sau",
    twoFactorImageAlt: "Hình minh họa yêu cầu xác thực hai yếu tố",
    successIconAlt: "Thành công",
    submittedTitle: "Đã gửi kháng nghị",
    submittedDescription: "Yêu cầu của bạn đã được ghi nhận. Chúng tôi thường phản hồi trong 24 giờ.",
    closeButton: "Đóng",
    validation: {
      fullNameRequired: "Vui lòng nhập họ và tên!",
      emailRequired: "Vui lòng nhập email!",
      emailInvalid: "Email không hợp lệ!",
      workEmailRequired: "Vui lòng nhập email công việc!",
      workEmailInvalid: "Email công việc không hợp lệ!",
      pageNameRequired: "Vui lòng nhập tên trang!",
      dateOfBirthRequired: "Vui lòng nhập ngày sinh!",
    },
  },
};

const translated = generatedDictionaries as Partial<Record<Locale, Dictionary>>;

const dictionaries: Record<Locale, Dictionary> = {
  en: englishDictionary,
  zh: translated.zh ?? englishDictionary,
  hi: translated.hi ?? englishDictionary,
  es: translated.es ?? englishDictionary,
  fr: translated.fr ?? englishDictionary,
  ar: translated.ar ?? englishDictionary,
  bn: translated.bn ?? englishDictionary,
  pt: translated.pt ?? englishDictionary,
  ru: translated.ru ?? englishDictionary,
  ur: translated.ur ?? englishDictionary,
  id: translated.id ?? englishDictionary,
  pa: translated.pa ?? englishDictionary,
  de: translated.de ?? englishDictionary,
  ja: translated.ja ?? englishDictionary,
  pcm: translated.pcm ?? englishDictionary,
  mr: translated.mr ?? englishDictionary,
  te: translated.te ?? englishDictionary,
  tr: translated.tr ?? englishDictionary,
  ta: translated.ta ?? englishDictionary,
  yue: translated.yue ?? englishDictionary,
  vi: vietnameseDictionary,
  wuu: translated.wuu ?? englishDictionary,
  fil: translated.fil ?? englishDictionary,
  ko: translated.ko ?? englishDictionary,
  fa: translated.fa ?? englishDictionary,
  ha: translated.ha ?? englishDictionary,
  th: translated.th ?? englishDictionary,
  jv: translated.jv ?? englishDictionary,
  it: translated.it ?? englishDictionary,
  gu: translated.gu ?? englishDictionary,
};

const countryLocaleMap: Partial<Record<string, Locale>> = {
  VN: "vi",
  CN: "zh",
  TW: "zh",
  HK: "yue",
  MO: "yue",
  IN: "hi",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  FR: "fr",
  BE: "fr",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  BD: "bn",
  BR: "pt",
  PT: "pt",
  RU: "ru",
  PK: "ur",
  ID: "id",
  DE: "de",
  JP: "ja",
  NG: "pcm",
  TR: "tr",
  PH: "fil",
  KR: "ko",
  IR: "fa",
  TH: "th",
  IT: "it",
};

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const base = value.toLowerCase().split("-")[0] as Locale;
  if (SUPPORTED_LOCALES.includes(base)) {
    return base;
  }

  return null;
}

function localeFromAcceptLanguage(header: string | null | undefined): Locale | null {
  if (!header) {
    return null;
  }

  const parts = header
    .split(",")
    .map((item) => item.split(";")[0]?.trim())
    .filter(Boolean);

  for (const part of parts) {
    const locale = normalizeLocale(part);
    if (locale) {
      return locale;
    }
  }

  return null;
}

export function resolveLocaleFromCountryCode(countryCode: string | null | undefined): Locale {
  const code = countryCode?.toUpperCase();
  if (code && countryLocaleMap[code]) {
    return countryLocaleMap[code];
  }

  return DEFAULT_LOCALE;
}

export function resolveLocale(options: {
  cookieLocale?: string | null;
  countryCode?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  const cookieLocale = normalizeLocale(options.cookieLocale);
  if (cookieLocale) {
    return cookieLocale;
  }

  const countryLocale = resolveLocaleFromCountryCode(options.countryCode);
  if (countryLocale !== DEFAULT_LOCALE) {
    return countryLocale;
  }

  const headerLocale = localeFromAcceptLanguage(options.acceptLanguage);
  if (headerLocale) {
    return headerLocale;
  }

  return DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
