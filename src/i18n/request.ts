import { getRequestConfig } from 'next-intl/server';
import { notFound } from "next/navigation";
import { locales } from './config';

export default getRequestConfig(async (args) => {
    const locale = (args as any).locale || (await (args as any).requestLocale);

    // Ensure locale is a string and valid
    if (!locale || !locales.includes(locale as any)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
