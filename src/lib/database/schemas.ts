export const storySchema = {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: { type: 'string', maxLength: 100, default: `id-${new Date().toISOString()}` },
        summary: { type: 'string' },
        great: { type: 'string' },
        sucks: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time', default: new Date().toISOString() }
    },
    required: ['id', 'summary', 'createdAt']
};
