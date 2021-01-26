export enum SwitchValues {
    errors_last_hour = 'errors_last_hour',
    errors_today = 'errors_today',
    errors_yesterday = 'errors_yesterday',
    errors_last_3days = 'errors_last_3days',
}

export const buttons = [
    SwitchValues.errors_last_hour,
    SwitchValues.errors_today,
    SwitchValues.errors_yesterday,
    SwitchValues.errors_last_3days,
];

export const text = {
    [SwitchValues.errors_last_hour]: 'Last hour',
    [SwitchValues.errors_today]: 'Today',
    [SwitchValues.errors_yesterday]: 'Yesterday',
    [SwitchValues.errors_last_3days]: 'Last 3 days',
};
