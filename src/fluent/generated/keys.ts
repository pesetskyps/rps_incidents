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
                        deleted: false
                    }
                    'x_1853061_rps_inci/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '6136dd5b3e77452f9511e8d8b8374a7b'
                        deleted: false
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
                        table: 'sys_choice'
                        id: '0b0b8b03a3454c9f8271ae2b035bae60'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'hr'
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
                        table: 'sys_documentation'
                        id: '27ad6b920d484850825d33f576496601'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '29d4798c0efb45c6b0eecf8300a6ae23'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
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
                        id: '2e103ebf917245289244621b36ba129d'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'level'
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
                        table: 'sys_documentation'
                        id: '4e5980e81b634808808f062ea08eb141'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '609fc2cb8d0f4c998613407802fb9931'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'maintenance'
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
                        id: '6a33e4501a894286991b808374dde66c'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'security'
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
                        table: 'sys_dictionary'
                        id: '81bcb6bc92df44d68e24c9a85cb67123'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'NULL'
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
                        table: 'sys_choice'
                        id: '8fa3bc7abe324951aeb1efa6386e6501'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'production'
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
                        id: '921d96fa6cb24d7f889a3d21d7273dd0'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'level'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '9e3292932c3c4f39b40f800dcd521e89'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'planning'
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
                        table: 'sys_choice'
                        id: 'a1a0dfb569e1476ab390e8e1784c3b9b'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'level'
                            value: 'plant'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a883fe6b63994480b5b29db1dd224844'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'quality'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b5b296fd3e1046fe954e1ce7cfac6e10'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8e59b2d91d046ee9e4612b47592003c'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb9f102a68d0422eb864c3b34d962768'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'issue_type'
                            value: 'safety'
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
                        table: 'sys_choice'
                        id: 'c3d170d6b56241dab29a9e285d82ed32'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'level'
                            value: 'department'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6a5d96d90054f2281b4c33ff19a92d2'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'level'
                            value: 'station'
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
                        table: 'sys_choice'
                        id: 'd2a6d190eab54bb0b81dfe4c64bfb8f2'
                        key: {
                            name: 'x_1853061_rps_inci_rps_incident'
                            element: 'level'
                            value: 'line'
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
