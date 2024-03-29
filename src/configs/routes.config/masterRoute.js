import React from 'react'

const masterRoute = [
    {
        key: 'Employee',
        path: '/Employee',
        component: React.lazy(() =>
            import('views/Master/Employee/EmployeeMaster')
        ),
        authority: [],
    },
    {
        key: 'branch',
        path: '/branch',
        component: React.lazy(() => import('views/Master/Branch/BranchMaster')),
        authority: [],
    },
    {
        key: 'department',
        path: '/department',
        component: React.lazy(() =>
            import('views/Master/Department/DepartmentMaster')
        ),
        authority: [],
    },
]

export default masterRoute
