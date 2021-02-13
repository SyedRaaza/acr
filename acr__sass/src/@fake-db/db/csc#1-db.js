import mock from '../mock';

const cscDB = 
 [
            {
                "id": 1,
                "display_id": "CIS Control #1",
                "details": "Inventory and Control of Hardware Assets",
                "sub_controls": [
                    {
                        "id": 1,
                        "control_id": 1,
                        "display_id": "1.1",
                        "details": "Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Active Device Discovery System",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 2,
                        "control_id": 1,
                        "display_id": "1.2",
                        "details": "Utilize a passive discovery tool to identify devices connected to the organization's network and automatically update the organization's hardware asset inventory.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Passive Device Discovery System",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 3,
                        "control_id": 1,
                        "display_id": "1.3",
                        "details": "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization's hardware asset inventory.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 4,
                        "control_id": 1,
                        "display_id": "1.4",
                        "details": "Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all assets, whether connected to the organization's network or not.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 5,
                        "control_id": 1,
                        "display_id": "1.5",
                        "details": "Ensure that the hardware asset inventory records the network address, hardware address, machine name, data asset owner, and department for each asset and whether the hardware asset has been approved to connect to the network.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Asset Inventory System",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 6,
                        "control_id": 1,
                        "display_id": "1.6",
                        "details": "Ensure that unauthorized assets are either removed from the network, quarantined or the inventory is updated in a timely manner.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Asset Inventory System",
                        "nist_csf_status": "Respond",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 7,
                        "control_id": 1,
                        "display_id": "1.7",
                        "details": "Utilize port level access control, following 802.1x standards, to control which devices can authenticate to the network. The authentication system shall be tied into the hardware asset inventory data to ensure only authorized devices can connect to the network.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Network Level Authentication (NLA)",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 8,
                        "control_id": 1,
                        "display_id": "1.8",
                        "details": "Use client certificates to authenticate hardware assets connecting to the organization's trusted network.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Public Key Infrastructure (PKI)",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "display_id": "CIS Control #2",
                "details": "Inventory and Control of Software Assets",
                "sub_controls": [
                    {
                        "id": 9,
                        "control_id": 2,
                        "display_id": "2.1",
                        "details": "Maintain an up-to-date list of all authorized software that is required in the enterprise for any business purpose on any business system.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Application Inventory",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 10,
                        "control_id": 2,
                        "display_id": "2.2",
                        "details": "Ensure that only software applications or operating systems currently supported and receiving vendor updates are added to the organization's authorized software inventory. Unsupported software should be tagged as unsupported in the inventory system.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Application Inventory",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 11,
                        "control_id": 2,
                        "display_id": "2.3",
                        "details": "Utilize software inventory tools throughout the organization to automate the documentation of all software on business systems.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Application Inventory",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 12,
                        "control_id": 2,
                        "display_id": "2.4",
                        "details": "The software inventory system should track the name, version, publisher, and install date for all software, including operating systems authorized by the organization.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Application Inventory",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 13,
                        "control_id": 2,
                        "display_id": "2.5",
                        "details": "The software inventory system should be tied into the hardware asset inventory so all devices and associated software are tracked from a single location.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Software Application Inventory",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 14,
                        "control_id": 2,
                        "display_id": "2.6",
                        "details": "Ensure that unauthorized software is either removed or the inventory is updated in a timely manner.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Application Inventory",
                        "nist_csf_status": "Identify",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 15,
                        "control_id": 2,
                        "display_id": "2.7",
                        "details": "Utilize application whitelisting technology on all assets to ensure that only authorized software executes and all unauthorized software is blocked from executing on assets.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Software Whitelisting System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 16,
                        "control_id": 2,
                        "display_id": "2.8",
                        "details": "The organization's application whitelisting software must ensure that only authorized software libraries (such as *.dll, *.ocx, *.so, etc.) are allowed to load into a system process.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Software Whitelisting System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 17,
                        "control_id": 2,
                        "display_id": "2.9",
                        "details": "The organization's application whitelisting software must ensure that only authorized, digitally signed scripts (such as *.ps1,*.py, macros, etc.) are allowed to run on a system.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Software Whitelisting System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 18,
                        "control_id": 2,
                        "display_id": "2.10",
                        "details": "Physically or logically segregated systems should be used to isolate and run software that is required for business operations but incurs higher risk for the organization.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Network Firewall / Acess Control System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "display_id": "CIS Control #3",
                "details": "Continuous Vulnerability Management",
                "sub_controls": [
                    {
                        "id": 19,
                        "control_id": 3,
                        "display_id": "3.1",
                        "details": "Utilize an up-to-date Security Content Automation Protocol (SCAP) compliant vulnerability scanning tool to automatically scan all systems on the network on a weekly or more frequent basis to identify all potential vulnerabilities on the organization's systems.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "SCAP Based Vulnerability Management System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 20,
                        "control_id": 3,
                        "display_id": "3.2",
                        "details": "Perform authenticated vulnerability scanning with agents running locally on each system or with remote scanners that are configured with elevated rights on the system being tested.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "SCAP Based Vulnerability Management System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 21,
                        "control_id": 3,
                        "display_id": "3.3",
                        "details": "Use a dedicated account for authenticated vulnerability scans, which should not be used for any other administrative activities and should be tied to specific machines at specific IP addresses.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "SCAP Based Vulnerability Management System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 22,
                        "control_id": 3,
                        "display_id": "3.4",
                        "details": "Deploy automated software update tools in order to ensure that the operating systems are running the most recent security updates provided by the software vendor.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Patch Management System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 23,
                        "control_id": 3,
                        "display_id": "3.5",
                        "details": "Deploy automated software update tools in order to ensure that third-party software on all systems is running the most recent security updates provided by the software vendor.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Patch Management System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 24,
                        "control_id": 3,
                        "display_id": "3.6",
                        "details": "Regularly compare the results from consecutive vulnerability scans to verify that vulnerabilities have been remediated in a timely manner.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "SCAP Based Vulnerability Management System",
                        "nist_csf_status": "Respond",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 25,
                        "control_id": 3,
                        "display_id": "3.7",
                        "details": "Utilize a risk-rating process to prioritize the remediation of discovered vulnerabilities.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "SCAP Based Vulnerability Management System",
                        "nist_csf_status": "Respond",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "display_id": "CIS Control #4",
                "details": "Controlled Use of Administrative Privileges",
                "sub_controls": [
                    {
                        "id": 26,
                        "control_id": 4,
                        "display_id": "4.1",
                        "details": "Use automated tools to inventory all administrative accounts, including domain and local accounts, to ensure that only authorized individuals have elevated privileges.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Privileged Account Management System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 27,
                        "control_id": 4,
                        "display_id": "4.2",
                        "details": "Before deploying any new asset, change all default passwords to have values consistent with administrative level accounts.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Privileged Account Management System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 28,
                        "control_id": 4,
                        "display_id": "4.3",
                        "details": "Ensure that all users with administrative account access use a dedicated or secondary account for elevated activities. This account should only be used for administrative activities and not Internet browsing, email, or similar activities.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Privileged Account Management System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 29,
                        "control_id": 4,
                        "display_id": "4.4",
                        "details": "Where multi-factor authentication is not supported (such as local administrator, root, or service accounts), accounts will use passwords that are unique to that system.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Privileged Account Management System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 30,
                        "control_id": 4,
                        "display_id": "4.5",
                        "details": "Use multi-factor authentication and encrypted channels for all administrative account access.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Multi-Factor Authentication System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 31,
                        "control_id": 4,
                        "display_id": "4.6",
                        "details": "Ensure administrators use a dedicated machine for all administrative tasks or tasks requiring administrative access. This machine will be segmented from the organization's primary network and not be allowed Internet access. This machine will not be used for reading email, composing documents, or browsing the Internet.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Dedicated Administration Systems",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 32,
                        "control_id": 4,
                        "display_id": "4.7",
                        "details": "Limit access to scripting tools (such as Microsoft® PowerShell and Python) to only administrative or development users with the need to access those capabilities.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Whitelisting System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 33,
                        "control_id": 4,
                        "display_id": "4.8",
                        "details": "Configure systems to issue a log entry and alert when an account is added to or removed from any group assigned administrative privileges.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 34,
                        "control_id": 4,
                        "display_id": "4.9",
                        "details": "Configure systems to issue a log entry and alert on unsuccessful logins to an administrative account.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 5,
                "display_id": "CIS Control #5",
                "details": "Secure Configuration for Hardware and Software",
                "sub_controls": [
                    {
                        "id": 35,
                        "control_id": 5,
                        "display_id": "5.1",
                        "details": "Maintain documented security configuration standards for all authorized operating systems and software.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Baselines & Images",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 36,
                        "control_id": 5,
                        "display_id": "5.2",
                        "details": "Maintain secure images or templates for all systems in the enterprise based on the organization's approved configuration standards. Any new system deployment or existing system that becomes compromised should be imaged using one of those images or templates.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Baselines & Images",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 37,
                        "control_id": 5,
                        "display_id": "5.3",
                        "details": "Store the master images and templates on securely configured servers, validated with integrity monitoring tools, to ensure that only authorized changes to the images are possible.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Baselines & Images",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 38,
                        "control_id": 5,
                        "display_id": "5.4",
                        "details": "Deploy system configuration management tools that will automatically enforce and redeploy configuration settings to systems at regularly scheduled intervals.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Enforcement System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 39,
                        "control_id": 5,
                        "display_id": "5.5",
                        "details": "Utilize a Security Content Automation Protocol (SCAP) compliant configuration monitoring system to verify all security configuration elements, catalog approved exceptions, and alert when unauthorized changes occur.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "SCAP Based Vulnerability Management System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 6,
                "display_id": "CIS Control #6",
                "details": "Maintenance, Monitoring, and Analysis of Audit Logs",
                "sub_controls": [
                    {
                        "id": 40,
                        "control_id": 6,
                        "display_id": "6.1",
                        "details": "Use at least three synchronized time sources from which all servers and network devices retrieve time information on a regular basis so that timestamps in logs are consistent.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Network Time Protocol (NTP) Systems",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 41,
                        "control_id": 6,
                        "display_id": "6.2",
                        "details": "Ensure that local logging has been enabled on all systems and networking devices.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 42,
                        "control_id": 6,
                        "display_id": "6.3",
                        "details": "Enable system logging to include detailed information such as an event source, date, user, timestamp, source addresses, destination addresses, and other useful elements.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 43,
                        "control_id": 6,
                        "display_id": "6.4",
                        "details": "Ensure that all systems that store logs have adequate storage space for the logs generated.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 44,
                        "control_id": 6,
                        "display_id": "6.5",
                        "details": "Ensure that appropriate logs are being aggregated to a central log management system for analysis and review.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 45,
                        "control_id": 6,
                        "display_id": "6.6",
                        "details": "Deploy Security Information and Event Management (SIEM) or log analytic tools for log correlation and analysis",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 46,
                        "control_id": 6,
                        "display_id": "6.7",
                        "details": "On a regular basis, review logs to identify anomalies or abnormal events.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 47,
                        "control_id": 6,
                        "display_id": "6.8",
                        "details": "On a regular basis, tune your SIEM system to better identify actionable events and decrease event noise.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 7,
                "display_id": "CIS Control #7",
                "details": "Email and Web Browser Protections",
                "sub_controls": [
                    {
                        "id": 48,
                        "control_id": 7,
                        "display_id": "7.1",
                        "details": "Ensure that only fully supported web browsers and email clients are allowed to execute in the organization, ideally only using the latest version of the browsers and email clients provided by the vendor.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Whitelisting System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 49,
                        "control_id": 7,
                        "display_id": "7.2",
                        "details": "Uninstall or disable any unauthorized browser or email client plugins or add-on applications.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Software Whitelisting System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 50,
                        "control_id": 7,
                        "display_id": "7.3",
                        "details": "Ensure that only authorized scripting languages are able to run in all web browsers and email clients.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Enforcement System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 51,
                        "control_id": 7,
                        "display_id": "7.4",
                        "details": "Enforce network-based URL filters that limit a system's ability to connect to websites not approved by the organization. This filtering shall be enforced for each of the organization's systems, whether they are physically at an organization's facilities or not.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Network URL Filtering System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 52,
                        "control_id": 7,
                        "display_id": "7.5",
                        "details": "Subscribe to URL-categorization services to ensure that they are up-to-date with the most recent website category definitions available. Uncategorized sites shall be blocked by default.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Network URL Filtering System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 53,
                        "control_id": 7,
                        "display_id": "7.6",
                        "details": "Log all URL requests from each of the organization's systems, whether on-site or a mobile device, in order to identify potentially malicious activity and assist incident handlers with identifying potentially compromised systems.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 54,
                        "control_id": 7,
                        "display_id": "7.7",
                        "details": "Use Domain Name System (DNS) filtering services to help block access to known malicious domains.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "DNS Domain Filtering System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 55,
                        "control_id": 7,
                        "display_id": "7.8",
                        "details": "To lower the chance of spoofed or modified emails from valid domains, implement Domain-based Message Authentication, Reporting and Conformance (DMARC) policy and verification, starting by implementing the Sender Policy Framework (SPF) and the DomainKeys Identified Mail (DKIM) standards.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Anti-Spam Gateway",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 56,
                        "control_id": 7,
                        "display_id": "7.9",
                        "details": "Block all email attachments entering the organization's email gateway if the file types are unnecessary for the organization's business.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Anti-Spam Gateway",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 57,
                        "control_id": 7,
                        "display_id": "7.10",
                        "details": "Use sandboxing to analyze and block inbound email attachments with malicious behavior.",
                        "implementation_groups": [
                            3
                        ],
                        "sensor_baseline": "Anti-Spam Gateway",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 8,
                "display_id": "CIS Control #8",
                "details": "Malware Defenses",
                "sub_controls": [
                    {
                        "id": 58,
                        "control_id": 8,
                        "display_id": "8.1",
                        "details": "Utilize centrally managed anti-malware software to continuously monitor and defend each of the organization's workstations and servers.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 59,
                        "control_id": 8,
                        "display_id": "8.2",
                        "details": "Ensure that the organization's anti-malware software updates its scanning engine and signature database on a regular basis.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 60,
                        "control_id": 8,
                        "display_id": "8.3",
                        "details": "Enable anti-exploitation features such as Data Execution Prevention (DEP) and Address Space Layout Randomization (ASLR) that are available in an operating system or deploy appropriate toolkits that can be configured to apply protection to a broader set of applications and executables.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Enforcement System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 61,
                        "control_id": 8,
                        "display_id": "8.4",
                        "details": "Configure devices so that they automatically conduct an anti-malware scan of removable media when inserted or connected.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 62,
                        "control_id": 8,
                        "display_id": "8.5",
                        "details": "Configure devices to not auto-run content from removable media.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Enforcement System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 63,
                        "control_id": 8,
                        "display_id": "8.6",
                        "details": "Send all malware detection events to enterprise anti-malware administration tools and event log servers for analysis and alerting.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 64,
                        "control_id": 8,
                        "display_id": "8.7",
                        "details": "Enable Domain Name System (DNS) query logging to detect hostname lookups for known malicious domains.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "DNS Domain Filtering System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 65,
                        "control_id": 8,
                        "display_id": "8.8",
                        "details": "Enable command-line audit logging for command shells, such as Microsoft PowerShell and Bash.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Log Management System / SIEM",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            },
            {
                "id": 9,
                "display_id": "CIS Control #9",
                "details": "Limitation and Control of Network Ports",
                "sub_controls": [
                    {
                        "id": 66,
                        "control_id": 9,
                        "display_id": "9.1",
                        "details": "Utilize centrally managed anti-malware software to continuously monitor and defend each of the organization's workstations and servers.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 67,
                        "control_id": 9,
                        "display_id": "9.2",
                        "details": "Ensure that the organization's anti-malware software updates its scanning engine and signature database on a regular basis.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 68,
                        "control_id": 9,
                        "display_id": "9.3",
                        "details": "Enable anti-exploitation features such as Data Execution Prevention (DEP) and Address Space Layout Randomization (ASLR) that are available in an operating system or deploy appropriate toolkits that can be configured to apply protection to a broader set of applications and executables.",
                        "implementation_groups": [
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Enforcement System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 69,
                        "control_id": 9,
                        "display_id": "9.4",
                        "details": "Configure devices so that they automatically conduct an anti-malware scan of removable media when inserted or connected.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "Endpoint Protection System",
                        "nist_csf_status": "Detect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    },
                    {
                        "id": 70,
                        "control_id": 9,
                        "display_id": "9.5",
                        "details": "Configure devices to not auto-run content from removable media.",
                        "implementation_groups": [
                            1,
                            2,
                            3
                        ],
                        "sensor_baseline": "System Configuration Enforcement System",
                        "nist_csf_status": "Protect",
                        "pd_status": [
                            "No Policy",
                            "Informal policy",
                            "Partial Written Policy",
                            "Written Policy",
                            "Approved Written Policy"
                        ],
                        "ci_status": [
                            "Not Implemented",
                            "Parts of Policy Implemented",
                            "Implemented on some systems",
                            "Implemented on most systems",
                            "Implemented on All Systems"
                        ],
                        "cate_status": [
                            "Not Automated",
                            "Parts of Policy Automated",
                            "Automated on Some Systems",
                            "Automated on Most Systems",
                            "Automated on All Systems"
                        ],
                        "crb_status": [
                            "Not Reported",
                            "Parts of Policy Reported",
                            "Reported on Some Systems",
                            "Reported on Most Systems",
                            "Reported on All Systems"
                        ]
                    }
                ]
            }
        ]
    






























































//{
		// id: 'ID',
		// CIS: 'CIS Control Detail',
		// nist: 'NIST CSF',
		// IG: 'Implementation Groups',
		// CB: 'Sensor or Baseline',
		// PD: "Policy Defined",
		// CI: "Control Implemented",
		// CATE: "Control Automated or Technically Enforced",
        // CRB: "Control Reported to Business",
        // control1:[
        //     {
        //         id: 1.1,
        //         title: "CIS Control #1: Inventory and Control of Hardware Assets",
        //         detail: "Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 ,3",
        //         sb: "Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.2,
        //         title: "CIS Control #1: Inventory and Control of Hardware Assets",
        //         detail: "Utilize a passive discovery tool to identify devices connected to the organization's network and automatically update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "3",
        //         sb: "Passive Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.3,
        //         title: "CIS Control #1: Inventory and Control of Hardware Assets",
        //         detail: "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 , 3",
        //         sb: "Log Management System / SIEM",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.4,
        //         title: "CIS Control #1: Inventory and Control of Hardware Assets",
        //         detail: "Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all assets, whether connected to the organization's network or not.",
        //         nist: "Identify",
        //         ig: "1,2,3",
        //         sb: "Asset Inventory System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     }
        // ],
        // control2:[ 
        //     {
        //         id: 1.122,
        //         title: "CIS Control #2: Inventory and Control of Hardware Assets",
        //         detail: "Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 ,3",
        //         sb: "Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.2,
        //         title: "CIS Control #2: Inventory and Control of Hardware Assets",
        //         detail: "Utilize a passive discovery tool to identify devices connected to the organization's network and automatically update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "3",
        //         sb: "Passive Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.3,
        //         title: "CIS Control #2: Inventory and Control of Hardware Assets",
        //         detail: "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 , 3",
        //         sb: "Log Management System / SIEM",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.4,
        //         title: "CIS Control #2: Inventory and Control of Hardware Assets",
        //         detail: "Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all assets, whether connected to the organization's network or not.",
        //         nist: "Identify",
        //         ig: "1,2,3",
        //         sb: "Asset Inventory System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     }
        // ],
        // control3:[ 
        //     {
        //         id: 1.133,
        //         title: "CIS Control #3: Inventory and Control of Hardware Assets",
        //         detail: "Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 ,3",
        //         sb: "Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.2,
        //         title: "CIS Control #3: Inventory and Control of Hardware Assets",
        //         detail: "Utilize a passive discovery tool to identify devices connected to the organization's network and automatically update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "3",
        //         sb: "Passive Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.3,
        //         title: "CIS Control #3: Inventory and Control of Hardware Assets",
        //         detail: "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 , 3",
        //         sb: "Log Management System / SIEM",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.4,
        //         title: "CIS Control #3: Inventory and Control of Hardware Assets",
        //         detail: "Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all assets, whether connected to the organization's network or not.",
        //         nist: "Identify",
        //         ig: "1,2,3",
        //         sb: "Asset Inventory System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     }
        // ],
        // control4:[ 
        //     {
        //         id: 1.144,
        //         title: "CIS Control #4: Inventory and Control of Hardware Assets",
        //         detail: "Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 ,3",
        //         sb: "Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.2,
        //         title: "CIS Control #4: Inventory and Control of Hardware Assets",
        //         detail: "Utilize a passive discovery tool to identify devices connected to the organization's network and automatically update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "3",
        //         sb: "Passive Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.3,
        //         title: "CIS Control #4: Inventory and Control of Hardware Assets",
        //         detail: "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 , 3",
        //         sb: "Log Management System / SIEM",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.4,
        //         title: "CIS Control #4: Inventory and Control of Hardware Assets",
        //         detail: "Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all assets, whether connected to the organization's network or not.",
        //         nist: "Identify",
        //         ig: "1,2,3",
        //         sb: "Asset Inventory System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     }
        // ],
        // control5:[ 
        //     {
        //         id: 1.115,
        //         title: "CIS Control #5: Inventory and Control of Hardware Assets",
        //         detail: "Utilize an active discovery tool to identify devices connected to the organization's network and update the hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 ,3",
        //         sb: "Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.2,
        //         title: "CIS Control #5: Inventory and Control of Hardware Assets",
        //         detail: "Utilize a passive discovery tool to identify devices connected to the organization's network and automatically update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "3",
        //         sb: "Passive Device Discovery System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.3,
        //         title: "CIS Control #5: Inventory and Control of Hardware Assets",
        //         detail: "Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization's hardware asset inventory.",
        //         nist: "Identify",
        //         ig: "2 , 3",
        //         sb: "Log Management System / SIEM",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     },
        //     {
        //         id: 1.4,
        //         title: "CIS Control #5: Inventory and Control of Hardware Assets",
        //         detail: "Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all assets, whether connected to the organization's network or not.",
        //         nist: "Identify",
        //         ig: "1,2,3",
        //         sb: "Asset Inventory System",
        //         pd: ["No policy" , "Informal policy" , "Partial Written Policy" , "Written Policy" , "Approved Written Policy"],
        //         ci: ["Not Implemented","Parts of Policy Implemented","Implemented on some systems","Implemented on most systems","Implemented on All Systems"],
        //         cate: ["Not Automated","Parts of Policy Automated","Automated on Some Systems","Automated on Most Systems","Automated on All Systems"],
        //         crb: ["Not Reported","Parts of Policy Reported","Reported on Some Systems","Reported on Most Systems","Reported on All Systems"]
        //     }
        // ]
        // };


mock.onGet('/api/e-commerce-app/cis').reply(() => {
	return [200, cscDB];
});