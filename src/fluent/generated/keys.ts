import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '87adbd9b2a4c471db6bcb56c033a221d'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '1be25a44bbf245af9d9b235daadfbf17'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '93efa30502044c919cbe9d4d41e3a4df'
                    }
                    'x_1853061_rps_inci/main': {
                        table: 'sys_ux_lib_asset'
                        id: '9152790193b2479381c14f00eafdab0f'
                    }
                    'x_1853061_rps_inci/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '6136dd5b3e77452f9511e8d8b8374a7b'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '008de696e34642fd9920928f234834aa'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '07b775f8a258405fa606b461565b9070'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '170f0fb68d174476858de2256bb607a3'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2c3aa889ec83433f8e98526bab2a3f2a'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ef80d69e2bd4c46b9462041d348d3f6'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '445f63242b204c988ee3c1704e8f3f72'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '45c8274e592242aea6e78b1602c089d7'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '692a7e3e297b436e8477f9f8553cd530'
                        key: {
                            category: 'x_1853061_rps_inci_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76ac8ed097ee4d898617f848485f10b8'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8204fb5dcb794f4998f35a89deed7694'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8647553dd6994ccc86c47096a2f3b3f0'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86d7f2b5b18c4254ad1b2a07aa4db0c8'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '905d0ca8780d42d4ac2e7e23b545aa08'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94c2b154dd2645ad993ef97196f96a29'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94ebe9026aa24d0aa27be0fbd1c7fa91'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '95eae0ddcfa4486cbbbc18eacd5df999'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9e6740c509464ea190ad7ae79b55473f'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a00a1c34cdbb4d78a9307d89455a0ec5'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be662b1208d54dce8bfc662623ecebb1'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cba734bf42a241fcae0b2b11c3252a15'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd045648cab2a4165b29f7425011f2388'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ddd0dfcbd4c844f9b449662be730e926'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e12f4a45b9294ab49dfe070930df55ae'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e85d6a67fc5940a3b6da0525b7e6170b'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4f1b0b1d0344836ae11d2b7b9959125'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f65f1dcdb92545799fb3bf6d69f6dea0'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f7fc28380b914ea281103ba78c66bcf6'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f9729f68f8b1480dbed192c4503c9d53'
                        key: {
                            name: 'x_1853061_rps_inci_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                ]
            }
        }
    }
}
