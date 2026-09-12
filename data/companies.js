/**
 * Embedded Systems company career page configurations.
 * Customized for Vignesh: Embedded Firmware Developer (IoT, Wireless, Industrial)
 *
 * ATS types:
 *  workday         → Real public JSON API
 *  smartrecruiters → Public JSON API
 *  greenhouse/lever→ Public JSON APIs
 *  direct          → Links to career page only
 *
 * TODO: Companies marked with "LIKELY_WORKDAY" below probably use Workday.
 * Run the server and check logs — if 0 jobs, try Workday config.
 */

module.exports = [
  // ══════════════════════════════════════════════════════════════
  // LIVE API COMPANIES (confirmed working)
  // ═══════════════════════════════════════════════════════════════
  // ═══════════════════════════════════════════════════════════════
  // LIVE API COMPANIES (Workday + SmartRecruiters)
  // ═══════════════════════════════════════════════════════════════
  {
    name: "NVIDIA",
    logo: "",
    ats: "workday",
    workdayTenant: "nvidia", workdaySite: "NVIDIAExternalCareerSite", workdayDc: "wd5",
    slug: "",
    careerUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    focus: "Embedded AI, CUDA, Jetson, robotics, Linux, drivers"
  },
  {
    name: "Intel",
    logo: "",
    ats: "workday",
    workdayTenant: "intel", workdaySite: "External", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://jobs.intel.com",
    focus: "Firmware, Linux, drivers, platform/SoC development"
  },
  {
    name: "Broadcom",
    logo: "🟤",
    ats: "workday",
    workdayTenant: "broadcom", workdaySite: "External_Career", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://careers.broadcom.com",
    focus: "Networking SoCs, embedded Linux, firmware, ASIC"
  },
  {
    name: "Analog Devices",
    logo: "",
    ats: "workday",
    workdayTenant: "analogdevices", workdaySite: "External", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://www.analog.com/en/about-adi/careers.html",
    focus: "Embedded software, DSP, signal processing, industrial"
  },
  {
    name: "Bosch",
    logo: "🔧",
    ats: "smartrecruiters",
    slug: "BoschGroup",
    careerUrl: "https://www.bosch.com/careers/",
    focus: "IoT, industrial embedded, sensors, automation"
  },
  {
    name: "Qualcomm",
    logo: "📡",
    ats: "workday",
    workdayTenant: "qualcomm", workdaySite: "External", workdayDc: "wd12",
    slug: "",
    careerUrl: "https://careers.qualcomm.com",
    focus: "Embedded Linux, BSP, drivers, Android, wireless, SoCs, IoT"
  },
  {
    name: "NXP Semiconductors",
    logo: "🔵",
    ats: "workday",
    workdayTenant: "nxp", workdaySite: "careers", workdayDc: "wd3",
    slug: "",
    careerUrl: "https://www.nxp.com/about-nxp/careers",
    focus: "IoT, MCU, embedded Linux, wireless, secure connectivity"
  },
  {
    name: "Marvell Technology",
    logo: "",
    ats: "workday",
    workdayTenant: "marvell", workdaySite: "MarvellCareers", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://careers.marvell.com",
    focus: "Storage, networking SoCs, embedded processors, Ethernet"
  },
  {
    name: "Micron Technology",
    logo: "💾",
    ats: "workday",
    workdayTenant: "micron", workdaySite: "External", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://jobs.micron.com",
    focus: "Memory (DRAM, NAND, NOR Flash), embedded storage"
  },
  {
    name: "Lattice Semiconductor",
    logo: "",
    ats: "workday",
    workdayTenant: "latticesemi", workdaySite: "latticesemiconductorscareers", workdayDc: "wd5",
    slug: "",
    careerUrl: "https://www.latticesemi.com/Careers",
    focus: "FPGA, CPLD, embedded programmable logic, low-power FPGA"
  },
  {
    name: "Cadence Design Systems",
    logo: "🔸",
    ats: "workday",
    workdayTenant: "cadence", workdaySite: "External_Careers", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://www.cadence.com/en_US/company/careers.html",
    focus: "Semiconductor IP, embedded/SoC ecosystem, EDA tools"
  },
  {
    name: "Silicon Labs",
    logo: "",
    ats: "workday",
    workdayTenant: "silabs", workdaySite: "SiliconLabsCareers", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://www.silabs.com/company/careers",
    focus: "IoT SoCs, wireless MCU, Zigbee, Thread, BLE, embedded"
  },
  {
    name: "Rockwell Automation",
    logo: "",
    ats: "workday",
    workdayTenant: "rockwellautomation", workdaySite: "External_Rockwell_Automation", workdayDc: "wd1",
    slug: "",
    careerUrl: "https://www.rockwellautomation.com/en-us/company/careers.html",
    focus: "Industrial automation, PLC, embedded control, IIoT"
  },
  {
    name: "HPE (Hewlett Packard Enterprise)",
    logo: "",
    ats: "workday",
    workdayTenant: "hpe", workdaySite: "Jobsathpe", workdayDc: "wd5",
    slug: "",
    careerUrl: "https://jobs.hpe.com",
    focus: "Enterprise networking, servers, embedded firmware, storage"
  },
  {
    name: "Allegro MicroSystems",
    logo: "",
    ats: "workday",
    workdayTenant: "allegromicro", workdaySite: "AllegroCareers", workdayDc: "wd5",
    slug: "",
    careerUrl: "https://www.allegromicro.com/en/company/careers",
    focus: "Power ICs, motor drivers, sensors, embedded power management"
  },

  // ═══════════════════════════════════════════════════════════════
  // MAJOR SEMICONDUCTOR / SoC
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Qualcomm",
    logo: "📡",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.qualcomm.com",
    focus: "Embedded Linux, BSP, drivers, Android, wireless, SoCs, IoT"
  },
  {
    name: "AMD",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.amd.com",
    focus: "Embedded processors, FPGA, Linux, drivers"
  },
  {
    name: "NXP Semiconductors",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.nxp.com/about-nxp/careers",
    focus: "IoT, MCU, embedded Linux, wireless, secure connectivity"
  },
  {
    name: "Texas Instruments",
    logo: "🔴",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.ti.com",
    focus: "MCU/DSP, RTOS, drivers, low-level firmware, analog"
  },
  {
    name: "STMicroelectronics",
    logo: "🟣",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.st.com/content/st_com/en/careers.html",
    focus: "STM32, bare-metal, RTOS, IoT, sensors"
  },
  {
    name: "Microchip Technology",
    logo: "🔧",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.microchip.com/en-us/about/careers",
    focus: "MCU firmware, bare-metal, RTOS, embedded tools, AVR, PIC"
  },
  {
    name: "MediaTek",
    logo: "📱",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.mediatek.com",
    focus: "Mobile SoCs, embedded Linux, connectivity, BSP, IoT"
  },
  {
    name: "Renesas Electronics",
    logo: "🟠",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.renesas.com/us/en/about/careers",
    focus: "MCU, RTOS, real-time systems, IoT, industrial"
  },
  {
    name: "Infineon Technologies",
    logo: "🔶",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.infineon.com/cms/en/careers/",
    focus: "MCU, power electronics, firmware, IoT, sensors"
  },
  {
    name: "Arm",
    logo: "🦾",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.arm.com",
    focus: "CPU architecture, firmware, low-level software, platform dev"
  },
  {
    name: "onsemi",
    logo: "⚡",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.onsemi.com/about/careers",
    focus: "Power semiconductors, embedded power management, sensors"
  },
  {
    name: "ROHM Semiconductor",
    logo: "🔴",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.rohm.com/careers",
    focus: "Power ICs, sensors, memory, embedded semiconductor"
  },
  {
    name: "Silicon Labs",
    logo: "🔷",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.silabs.com/company/careers",
    focus: "IoT SoCs, wireless MCU, Zigbee, Thread, BLE, embedded"
  },
  {
    name: "Micron Technology",
    logo: "💾",
    ats: "direct",
    slug: "",
    careerUrl: "https://jobs.micron.com",
    focus: "Memory (DRAM, NAND, NOR Flash), embedded storage"
  },
  {
    name: "SanDisk (Western Digital)",
    logo: "🟡",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.westerndigital.com",
    focus: "Flash storage, SSD, embedded storage solutions"
  },
  {
    name: "Samsung Semiconductor",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://semiconductor.samsung.com/careers/",
    focus: "Memory, SoC, foundry, embedded processors, Exynos"
  },
  {
    name: "Toshiba",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.toshiba.com/global/careers.html",
    focus: "Embedded systems, NAND flash, power electronics, industrial"
  },
  {
    name: "MosChip Technologies",
    logo: "🇮🇳",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.moschip.com/careers",
    focus: "VLSI design, embedded systems, IoT, semiconductor IP"
  },
  {
    name: "Lattice Semiconductor",
    logo: "🔲",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.latticesemi.com/Careers",
    focus: "FPGA, CPLD, embedded programmable logic, low-power FPGA"
  },
  {
    name: "Nordic Semiconductor",
    logo: "🔻",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.nordicsemi.com/About-us/Careers",
    focus: "BLE/Thread SoCs, embedded firmware, low-power wireless, nRF"
  },
  {
    name: "Marvell Technology",
    logo: "🌊",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.marvell.com",
    focus: "Storage, networking SoCs, embedded processors, Ethernet"
  },
  {
    name: "Maxim Integrated (Analog Devices)",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.analog.com/en/about-adi/careers.html",
    focus: "Analog/mixed-signal, power management (now part of ADI)"
  },
  {
    name: "Synaptics",
    logo: "👆",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.synaptics.com/company/careers",
    focus: "Touch/display controllers, IoT connectivity, biometrics, embedded"
  },
  {
    name: "Realtek Semiconductor",
    logo: "📶",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.realtek.com/en/careers",
    focus: "Networking SoCs, WiFi/BT, audio codecs, embedded connectivity"
  },
  {
    name: "Cirrus Logic",
    logo: "🎵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.cirrus.com/careers/",
    focus: "Audio DSP, precision analog, mixed-signal, embedded audio"
  },
  {
    name: "Allegro MicroSystems",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.allegromicro.com/en/company/careers",
    focus: "Power ICs, motor drivers, sensors, embedded power management"
  },
  {
    name: "Espressif Systems",
    logo: "📶",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.espressif.com/en/about/careers",
    focus: "ESP32, WiFi/BLE SoCs, IoT firmware, SDK development"
  },
  {
    name: "Qorvo",
    logo: "📡",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.qorvo.com/company/careers",
    focus: "RF semiconductors, embedded connectivity, UWB, 5G, IoT"
  },
  {
    name: "CEVA",
    logo: "🧠",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.ceva-dsp.com/company/careers/",
    focus: "DSP cores, AI accelerators, embedded IP, signal processing"
  },
  {
    name: "Nuvoton Technology",
    logo: "🔹",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.nuvoton.com/eng/about/careers/",
    focus: "MCU, audio ICs, embedded controllers, cloud IoT"
  },
  {
    name: "GigaDevice",
    logo: "💾",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.gigadevice.com/careers/",
    focus: "Flash memory, MCU (GD32), embedded storage, RISC-V"
  },

  // ══════════════════════════════════════════════════════════════
  // EDA / VERIFICATION / TOOLS
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Synopsys",
    logo: "🔹",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.synopsys.com",
    focus: "Processor IP, verification, software tools, EDA"
  },
  {
    name: "Cadence Design Systems",
    logo: "🔸",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.cadence.com/en_US/company/careers.html",
    focus: "Semiconductor IP, embedded/SoC ecosystem, EDA tools"
  },
  {
    name: "Siemens EDA",
    logo: "⚙️",
    ats: "direct",
    slug: "",
    careerUrl: "https://eda.sw.siemens.com/en-US/about/careers/",
    focus: "EDA tools, verification, PCB design, embedded software tools"
  },
  {
    name: "Ansys",
    logo: "🔬",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.ansys.com/careers",
    focus: "Simulation software, embedded system modeling, thermal/EMC"
  },

  // ═══════════════════════════════════════════════════════════════
  // INDUSTRIAL / AUTOMATION / TEST
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Siemens",
    logo: "⚙️",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.siemens.com/global/en/company/jobs.html",
    focus: "Industrial automation, embedded/real-time systems, PLC"
  },
  {
    name: "Honeywell Technologies",
    logo: "️",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.honeywell.com",
    focus: "Aerospace, industrial, safety-critical embedded systems"
  },
  {
    name: "Schneider Electric",
    logo: "⚡",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.se.com/ww/en/about-us/careers/",
    focus: "Industrial automation, embedded control, power systems"
  },
  {
    name: "ABB",
    logo: "🏭",
    ats: "direct",
    slug: "",
    careerUrl: "https://new.abb.com/careers",
    focus: "Industrial automation, embedded control, robotics, drives"
  },
  {
    name: "Emerson",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.emerson.com/en-us/careers",
    focus: "Industrial automation, process control, embedded systems"
  },
  {
    name: "GE (General Electric)",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.ge.com/careers",
    focus: "Aviation, healthcare, power, embedded systems"
  },
  {
    name: "Philips",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.careers.philips.com",
    focus: "Healthcare, medical devices, embedded systems, imaging"
  },
  {
    name: "Eaton",
    logo: "⚡",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.eaton.com/us/en-us/company/careers.html",
    focus: "Power management, electrical systems, embedded control"
  },
  {
    name: "HPE (Hewlett Packard Enterprise)",
    logo: "🟦",
    ats: "direct",
    slug: "",
    careerUrl: "https://jobs.hpe.com",
    focus: "Enterprise networking, servers, embedded firmware, storage"
  },
  {
    name: "Applied Materials",
    logo: "🔬",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.appliedmaterials.com",
    focus: "Semiconductor manufacturing, embedded control, automation"
  },
  {
    name: "Keysight Technologies",
    logo: "📊",
    ats: "direct",
    slug: "",
    careerUrl: "https://jobs.keysight.com",
    focus: "Test & measurement, embedded test systems, RF/EMC"
  },
  {
    name: "NI (National Instruments)",
    logo: "🔬",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.ni.com/en-us/about-ni/careers.html",
    focus: "Embedded test, LabVIEW, PXI, data acquisition"
  },
  {
    name: "Rockwell Automation",
    logo: "🏗️",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.rockwellautomation.com/en-us/company/careers.html",
    focus: "Industrial automation, PLC, embedded control, IIoT"
  },
  {
    name: "Mitsubishi Electric",
    logo: "🔴",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.mitsubishielectric.com/careers/",
    focus: "Industrial automation, embedded systems, power, factory automation"
  },

  // ══════════════════════════════════════════════════════════════
  // AEROSPACE / HIGH-RELIABILITY
  // ═══════════════════════════════════════════════════════════════
  {
    name: "SpaceX",
    logo: "🚀",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.spacex.com/careers",
    focus: "Flight software, embedded C/C++, real-time OS, avionics"
  },
  {
    name: "Apple (Embedded)",
    logo: "🍎",
    ats: "direct",
    slug: "",
    careerUrl: "https://jobs.apple.com",
    focus: "Silicon firmware, RTOS, low-level drivers, hardware-software"
  },

  // ═══════════════════════════════════════════════════════════════
  // INDIAN EMBEDDED / SERVICES COMPANIES
  // ═══════════════════════════════════════════════════════════════
  {
    name: "Tata Elxsi",
    logo: "🇮🇳",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.tataelxsi.com/global/careers",
    focus: "Embedded systems, IoT, automotive software, design, India"
  },
  {
    name: "KPIT Technologies",
    logo: "🇮🇳",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.kpit.com/careers",
    focus: "Automotive software, embedded systems, EV, ADAS, India"
  },
  {
    name: "HARMAN India",
    logo: "🇮🇳",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.harman.com/careers",
    focus: "Connected car, infotainment, embedded Linux, Android, India"
  },
  {
    name: "Continental",
    logo: "🛞",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.continental.com/en/careers/",
    focus: "Automotive embedded, ADAS, body electronics, ECUs"
  },
  {
    name: "ZF Group",
    logo: "🔩",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.zf.com/global/en/careers/",
    focus: "Automotive embedded, autonomous driving, firmware Linux"
  },
  {
    name: "Aptiv",
    logo: "🔌",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.aptiv.com/careers",
    focus: "Automotive architecture, ADAS, embedded software, connectivity"
  },
  {
    name: "Visteon",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.visteon.com/careers",
    focus: "Digital cockpits, embedded software, automotive displays"
  },
  {
    name: "Hyundai Mobis",
    logo: "🚗",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.mobis.co.kr/en/Careers",
    focus: "Automotive electronics, ADAS, embedded systems, EV"
  },
  {
    name: "Marelli",
    logo: "🔧",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.marelli.com/careers",
    focus: "Automotive lighting, powertrain, embedded software"
  },
  {
    name: "Valeo",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.valeo.com/en/careers/",
    focus: "Automotive embedded, ADAS, sensors, driver assistance"
  },
  {
    name: "Denso",
    logo: "🔴",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.denso.com/global/en/career/",
    focus: "Automotive embedded, ECUs, ADAS, autonomous driving"
  },
  {
    name: "Magna International",
    logo: "️",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.magna.com/careers",
    focus: "Automotive embedded, body control, powertrain, ADAS"
  },
];
