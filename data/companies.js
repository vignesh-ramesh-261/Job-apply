/**
 * Embedded Systems company career page configurations.
 *
 * ATS types:
 *  workday         → Real public JSON API (best — fetches live jobs)
 *  smartrecruiters → Public JSON API
 *  greenhouse      → Public JSON API
 *  lever           → Public JSON API
 *  direct          → No machine API; links to career page only
 *
 * Workday fields:
 *  workdayTenant: the tenant name (e.g. "nvidia")
 *  workdaySite:   the site path (e.g. "NVIDIAExternalCareerSite")
 *  workdayDc:     the datacenter (e.g. "wd5")
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
    name: "Qualcomm",
    logo: "📡",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.qualcomm.com",
    focus: "Embedded Linux, BSP, drivers, Android, wireless, SoCs"
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

  // ─── SMARTRECRUITERS ──────────────────────────────────────────
  {
    name: "NXP Semiconductors",
    logo: "🔵",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.nxp.com/about-nxp/careers",
    focus: "Automotive, MCU, embedded Linux, secure connectivity"
  },
  {
    name: "Bosch",
    logo: "🚗",
    ats: "smartrecruiters",
    slug: "BoschGroup",
    careerUrl: "https://www.bosch.com/careers/",
    focus: "Automotive ECUs, ADAS, embedded C, AUTOSAR"
  },

  // ─── DIRECT LINKS (No public API — opens career page) ──────────
  {
    name: "Texas Instruments",
    logo: "🔴",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.ti.com",
    focus: "MCU/DSP, RTOS, drivers, low-level firmware"
  },
  {
    name: "STMicroelectronics",
    logo: "🟣",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.st.com/content/st_com/en/careers.html",
    focus: "STM32, bare-metal, RTOS, automotive, IoT"
  },
  {
    name: "Renesas Electronics",
    logo: "🟠",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.renesas.com/us/en/about/careers",
    focus: "Automotive, MCU, RTOS, real-time systems"
  },
  {
    name: "Infineon Technologies",
    logo: "🔶",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.infineon.com/cms/en/careers/",
    focus: "Automotive, MCU, power electronics, firmware"
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
    logo: "🔺",
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
    focus: "MCU firmware, bare-metal, RTOS, embedded tools"
  },
  {
    name: "MediaTek",
    logo: "📱",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.mediatek.com",
    focus: "Mobile SoCs, embedded Linux, connectivity, BSP"
  },
  {
    name: "Synopsys",
    logo: "🔷",
    ats: "direct",
    slug: "",
    careerUrl: "https://careers.synopsys.com",
    focus: "Embedded/processor IP, verification, software tools"
  },
  {
    name: "Cadence Design Systems",
    logo: "🔹",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.cadence.com/en_US/company/careers.html",
    focus: "Semiconductor IP, embedded/SoC ecosystem"
  },
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
    name: "Harman International",
    logo: "🎛️",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.harman.com/careers",
    focus: "Automotive infotainment, Android/Linux, embedded"
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
    name: "Espressif Systems",
    logo: "📶",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.espressif.com/en/about/careers",
    focus: "ESP32, WiFi/BLE SoCs, IoT firmware, SDK development"
  },
  {
    name: "Nordic Semiconductor",
    logo: "🔻",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.nordicsemi.com/About-us/Careers",
    focus: "BLE/Thread SoCs, embedded firmware, low-power wireless"
  },
  {
    name: "SpaceX",
    logo: "🚀",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.spacex.com/careers",
    focus: "Flight software, embedded C/C++, real-time OS, avionics"
  },
  {
    name: "Tesla",
    logo: "⚡",
    ats: "direct",
    slug: "",
    careerUrl: "https://www.tesla.com/careers",
    focus: "Autopilot firmware, vehicle embedded systems, RTOS"
  },
  {
    name: "Apple (Embedded)",
    logo: "🍎",
    ats: "direct",
    slug: "",
    careerUrl: "https://jobs.apple.com",
    focus: "Silicon firmware, RTOS, low-level drivers, hardware-software"
  },
];
