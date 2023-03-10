export type DateTimeFormatOptions = {
   dateStyle?: "full" | "long" | "medium" | "short";
   timeStyle?: "full" | "long" | "medium" | "short";
   calendar?: "buddhist" | "chinese" | "coptic" | "ethiopia" | "ethiopic" | "gregory" | " hebrew" | "indian" | "islamic" | "iso8601" | " japanese" | "persian" | "roc";
   dayPeriod?: "narrow" | "short" | "long";
   numberingSystem?: "arab" | "arabext" | " bali" | "beng" | "deva" | "fullwide" | " gujr" | "guru" | "hanidec" | "khmr" | " knda" | "laoo" | "latn" | "limb" | "mlym" | " mong" | "mymr" | "orya" | "tamldec" | " telu" | "thai" | "tibt";
   localeMatcher?: "best fit" | "lookup";
   timeZone?: string;
   hour12?: boolean;
   hourCycle?: "h11" | "h12" | "h23" | "h24";
   formatMatcher?: "best fit" | "basic";
   weekday?: "long" | "short" | "narrow";
   era?: "long" | "short" | "narrow";
   year?: "numeric" | "2-digit";
   month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
   day?: "numeric" | "2-digit";
   hour?: "numeric" | "2-digit";
   minute?: "numeric" | "2-digit";
   second?: "numeric" | "2-digit";
   // fractionalSecondDigits?: 0 | 1 | 2 | 3;
   timeZoneName?: "long" | "short";
}