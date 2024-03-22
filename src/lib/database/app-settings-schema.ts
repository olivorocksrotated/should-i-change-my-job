import { createId } from './id';

export const initialAppSettings = {
    userId: createId(),
    showOnboarding: true,
    isFirstLoad: true
};

export const appSettingsSchema = {
    userId: { type: 'string', default: initialAppSettings.userId },
    showOnboarding: { type: 'boolean', default: initialAppSettings.showOnboarding },
    isFirstLoad: { type: 'boolean', default: initialAppSettings.isFirstLoad }
} as const;

