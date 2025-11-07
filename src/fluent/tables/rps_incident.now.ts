import '@servicenow/sdk/global'
import { Table, StringColumn } from '@servicenow/sdk/core'

// RPS Incident table extending Task
export const x_1853061_rps_inci_rps_incident = Table({
    name: 'x_1853061_rps_inci_rps_incident',
    label: 'RPS Incident',
    extends: 'task',
    schema: {
        level: StringColumn({
            label: 'Level',
            maxLength: 40,
            choices: {
                department: { label: 'Department', sequence: 0 },
                plant: { label: 'Plant', sequence: 1 },
                line: { label: 'Line', sequence: 2 },
                station: { label: 'Station', sequence: 3 },
            },
            dropdown: 'dropdown_with_none',
        }),
        issue_type: StringColumn({
            label: 'Issue Type',
            maxLength: 40,
            choices: {
                maintenance: { label: 'Maintenance', sequence: 0 },
                quality: { label: 'Quality', sequence: 1 },
                safety: { label: 'Safety', sequence: 2 },
                security: { label: 'Security', sequence: 3 },
                production: { label: 'Production', sequence: 4 },
                planning: { label: 'Planning', sequence: 5 },
                hr: { label: 'HR', sequence: 6 },
            },
            dropdown: 'dropdown_with_none',
        }),
    },
    accessibleFrom: 'public',
    callerAccess: 'tracking',
    actions: ['read', 'update', 'delete', 'create'],
})




