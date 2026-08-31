/**
 * Embedded Systems company career page configurations.
 * Customized for: Embedded Firmware Developer (IoT, Wireless, Consumer, Industrial)
 * NOT automotive-focused.
 *
 * ATS types:
 *  workday         → Real public JSON API (best — fetches live jobs)
 *  smartrecruiters → Public JSON API
 *  greenhouse      → Public JSON API
 *  lever           → Public JSON API
 *  direct          → No machine API; links to career page only
 */

module.exports = [
  // ─── COMPANIES WITH LIVE WORKDAY API ───────────────────────────
  {
    name: "NVIDIA",
    logo: "🟢",
    ats: "workday",
    workdayTenant: "nvidia",
    workdaySite: "NVIDIAExternalCareerSite",
    workdayDc: "wd5",
    slug: "",
    careerUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    focus: "Embedded AI, CUDA, Jetson, robotics, Linux, drivers"
  },
  {
    name: "Intel",
    logo: "💠",
    ats: "workday",
    workdayTenant: "intel",
    workdaySite: "External",
    workdayDc: "wd1",
    slug: "",
    careerUrl: "https://jobs.intel.com",
    focus: "Firmware, Linux, drivers, platform/SoC development"
  },
  {
    name: "Broadcom",
    logo: "🟤",
    ats: "workday",
    workdayTenant: "broadcom",
    workdaySite: "External_Career",
    workdayDc: "wd1",
    slug: "",
    careerUrl: "https://careers.broadcom.com",
    focus: "Networking SoCs, embedded Linux, firmware, ASIC"
  },
  {
    name: "Analog Devices",
    logo: "📊",
    ats: "workday",
    workdayTenant: "analogdevices",
    workdaySite: "External",
    workdayDc: "wd1",
    slug: "",
    careerUrl: "https://www.analog.com/en/about-adi/careers.html",
    focus: "Embedded software, DSP, signal processing, industrial"
  },
  {
    name: "Bosch",
    logo: "🚗",
    ats: "smartrecruiters",
    slug: "BoschGroup",
    careerUrl: "https://www.bosch.com/careers/",
    focus: "IoT, industrial embedded, sensors, automation"
  },

  // ── SEMICONDUCTOR / SoC (IoT, Wireless, Consumer) ─────────────
  {
    name: "Qualcomm",
    logo: "📡",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.qualcomm.com",
    focus: "Embedded Linux, BSP, drivers, Android, wireless, SoCs, IoT"
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
    name: "Arm",
    logo: "🦾",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.arm.com",
    focus: "CPU architecture, firmware, low-level software, platform dev"
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
    logo: "",
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
    name: "onsemi",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.onsemi.com/about/careers",
    focus: "Power semiconductors, embedded power management, sensors"
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

  // ─── WIRELESS / IoT ────────────────────────────────────────────
  {
    name: "Nordic Semiconductor",
    logo: "🔻",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.nordicsemi.com/About-us/Careers",
    focus: "BLE/Thread SoCs, embedded firmware, low-power wireless, nRF"
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
    logo: "",
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
  {
    name: "Realtek Semiconductor",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.realtek.com/en/careers",
    focus: "Networking SoCs, WiFi/BT, audio codecs, embedded connectivity"
  },
  {
    name: "Lattice Semiconductor",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.latticesemi.com/Careers",
    focus: "FPGA, CPLD, embedded programmable logic, low-power FPGA"
  },

  // ─── INDUSTRIAL / AUTOMATION / TEST ────────────────────────────
  {
    name: "Siemens",
    logo: "⚙️",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.siemens.com/global/en/company/jobs.html",
    focus: "Industrial automation, embedded/real-time systems, PLC"
  },
  {
    name: "Honeywell",
    logo: "🛩️",
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
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://new.abb.com/careers",
    focus: "Industrial automation, embedded control, robotics, drives"
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
    name: "Keysight Technologies",
    logo: "",
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

  // ── SPACE / AEROSPACE / HIGH-RELIABILITY ──────────────────────
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
  {
    name: "Tesla",
    logo: "",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.tesla.com/careers",
    focus: "Firmware, vehicle embedded systems, RTOS, energy"
  },
];
