import { createId } from '../database/id';

export const initialAppSettings = {
    userId: createId(),
    showOnboarding: true
};

export const appSettingsSchema = {
    userId: { type: 'string', default: initialAppSettings.userId },
    showOnboarding: { type: 'boolean', default: initialAppSettings.showOnboarding }
} as const;

