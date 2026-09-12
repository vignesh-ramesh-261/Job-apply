# 🎯 JobHunter — Embedded Systems Job Aggregator

> Stop opening 30+ browser tabs. Find all current embedded systems job openings across company career sites in one place.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## What is this?

**JobHunter** is a self-hosted job search aggregator that connects to the career pages of **28 top embedded systems companies** and pulls their current job openings into a single, searchable dashboard. No more visiting each company's career site individually — just search, filter, and apply.

## ✨ Features

### Core
- 🔍 **Unified Search** — Search by job title, skill (RTOS, BSP, AUTOSAR, C/C++...), or company name
- 🏢 **28 Companies** — Qualcomm, NVIDIA, TI, NXP, Arm, Intel, AMD, Siemens, and many more
- 🔗 **Direct Apply Links** — Every job has a direct link to the official application page
- 📍 **Location Filter** — Bangalore, Hyderabad, Pune, San Diego, Munich, and more
- 🏛️ **Department Filter** — Firmware, BSP, RTOS, Automotive, Silicon/SoC, AI/Edge, Connectivity
- ⏱️ **Smart Caching** — Results cached for 30 minutes to be respectful of company APIs

### Productivity
- ★ **Bookmark Jobs** — Save interesting positions for later (persisted in browser)
- 📋 **Export Bookmarks** — Copy all saved jobs to clipboard as formatted text
- 🌓 **Dark/Light Mode** — Toggle between themes (preference saved)
- 📱 **Responsive** — Works on desktop and mobile
- 🔄 **Auto-refresh** — One-click refresh all listings
- 🏷️ **Quick Filters** — Clickable company chips for fast filtering

## 🏢 Companies Tracked (Embedded Systems)

### Semiconductor / SoC
| Company | Focus | Career Link |
|---|---|---|
| Qualcomm | Embedded Linux, BSP, drivers, Android, wireless, SoCs | [careers.qualcomm.com](https://careers.qualcomm.com) |
| NVIDIA | Embedded AI, CUDA, Jetson, robotics, Linux, drivers | [nvidia.com/careers](https://www.nvidia.com/en-us/about-nvidia/careers/) |
| Texas Instruments | MCU/DSP, RTOS, drivers, low-level firmware | [careers.ti.com](https://careers.ti.com) |
| NXP Semiconductors | Automotive, MCU, embedded Linux, secure connectivity | [SmartRecruiters](https://careers.smartrecruiters.com/NXPSemiconductors) |
| STMicroelectronics | STM32, bare-metal, RTOS, automotive, IoT | [st.com/careers](https://www.st.com/content/st_com/en/careers.html) |
| Renesas Electronics | Automotive, MCU, RTOS, real-time systems | [renesas.com/careers](https://www.renesas.com/us/en/about/careers) |
| Infineon Technologies | Automotive, MCU, power electronics, firmware | [infineon.com/careers](https://www.infineon.com/cms/en/careers/) |
| Arm | CPU architecture, firmware, low-level software, platform dev | [careers.arm.com](https://careers.arm.com) |
| Intel | Firmware, Linux, drivers, platform/SoC development | [jobs.intel.com](https://jobs.intel.com) |
| AMD | Embedded processors, FPGA, Linux, drivers | [careers.amd.com](https://careers.amd.com) |
| Analog Devices | Embedded software, DSP, signal processing, industrial | [analog.com/careers](https://www.analog.com/en/about-adi/careers.html) |
| Microchip Technology | MCU firmware, bare-metal, RTOS, embedded tools | [microchip.com/careers](https://www.microchip.com/en-us/about/careers) |
| Broadcom | Networking SoCs, embedded Linux, firmware, ASIC | [careers.broadcom.com](https://careers.broadcom.com) |
| MediaTek | Mobile SoCs, embedded Linux, connectivity, BSP | [careers.mediatek.com](https://careers.mediatek.com) |

### EDA / IP
| Company | Focus | Career Link |
|---|---|---|
| Synopsys | Embedded/processor IP, verification, software tools | [careers.synopsys.com](https://careers.synopsys.com) |
| Cadence Design Systems | Semiconductor IP, embedded/SoC ecosystem | [cadence.com/careers](https://www.cadence.com/en_US/company/careers.html) |

### Industrial / Automation / Aerospace
| Company | Focus | Career Link |
|---|---|---|
| Siemens | Industrial automation, embedded/real-time systems, PLC | [siemens.com/jobs](https://www.siemens.com/global/en/company/jobs.html) |
| Honeywell | Aerospace, industrial, safety-critical embedded systems | [careers.honeywell.com](https://careers.honeywell.com) |
| Schneider Electric | Industrial automation, embedded control, power systems | [se.com/careers](https://www.se.com/ww/en/about-us/careers/) |

### Automotive Embedded
| Company | Focus | Career Link |
|---|---|---|
| Harman International | Automotive infotainment, Android/Linux, embedded | [harman.com/careers](https://www.harman.com/careers) |
| Bosch | Automotive ECUs, ADAS, embedded C, AUTOSAR | [bosch.com/careers](https://www.bosch.com/careers/) |
| Continental | Automotive embedded, ADAS, body electronics, ECUs | [continental.com/careers](https://www.continental.com/en/careers/) |
| ZF Group | Automotive embedded, autonomous driving, firmware Linux | [zf.com/careers](https://www.zf.com/global/en/careers/) |

### IoT / Wireless / Space
| Company | Focus | Career Link |
|---|---|---|
| Espressif Systems | ESP32, WiFi/BLE SoCs, IoT firmware, SDK development | [espressif.com/careers](https://www.espressif.com/en/about/careers) |
| Nordic Semiconductor | BLE/Thread SoCs, embedded firmware, low-power wireless | [nordicsemi.com/careers](https://www.nordicsemi.com/About-us/Careers) |
| SpaceX | Flight software, embedded C/C++, real-time OS, avionics | [spacex.com/careers](https://www.spacex.com/careers) |
| Tesla | Autopilot firmware, vehicle embedded systems, RTOS | [tesla.com/careers](https://www.tesla.com/careers) |
| Apple (Embedded) | Silicon firmware, RTOS, low-level drivers, hardware-software | [jobs.apple.com](https://jobs.apple.com) |

### Adding More Companies

Edit `data/companies.js` to add any company:

```javascript
{
  name: "My Company",
  logo: "🔧",
  ats: "smartrecruiters",   // or "direct" for custom portals
  slug: "MyCompany",
  careerUrl: "https://mycompany.com/careers",
  focus: "RTOS, bare-metal, IoT"
}
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd Job-apply

# Install dependencies
npm install

# Start the server
npm start
```

Open **http://localhost:3000** in your browser.

### Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Server port |
| `DEMO_MODE` | `false` | Force demo mode (sample data) |

## 🛠️ API Endpoints

The backend provides REST API endpoints you can use programmatically:

| Endpoint | Description |
|---|---|
| `GET /api/companies` | List all tracked companies |
| `GET /api/jobs` | Get all jobs (supports `?search`, `?location`, `?department`, `?company`, `?remote`) |
| `GET /api/companies/:name/jobs` | Get jobs for a specific company |
| `POST /api/refresh` | Clear cache and trigger refetch |
| `GET /api/health` | Health check |
| `GET /api/info` | Server info & mode |

### Examples

```bash
# Get all remote firmware jobs
curl "http://localhost:3000/api/jobs?department=firmware&remote=true"

# Get NVIDIA jobs
curl "http://localhost:3000/api/jobs?company=NVIDIA"

# Search for BSP / Linux kernel jobs in India
curl "http://localhost:3000/api/jobs?search=BSP&location=india"

# Get automotive embedded jobs
curl "http://localhost:3000/api/jobs?department=automotive"

# Get RTOS jobs
curl "http://localhost:3000/api/jobs?department=rtos"
```

## 📁 Project Structure

```
Job-apply/
├── server.js              # Express server & API routes
├── package.json           # Dependencies
├── data/
│   ├── companies.js       # 28 embedded systems companies & ATS endpoints
│   └── demoData.js        # Demo job generator with embedded-specific roles
├── lib/
│   └── jobFetcher.js      # Job fetching logic for each ATS platform
└── public/
    ├── index.html          # Main dashboard
    ├── css/
    │   └── style.css       # Styles (light/dark themes)
    └── js/
        └── app.js          # Frontend logic (search, filter, bookmarks)
```

## 🏗️ Architecture

```
┌───────────────────────────────────────────────┐
│               Browser (Frontend)               │
│  ┌──────────┬──────────┬──────────────────┐   │
│  │ Search   │ Filters  │ Bookmarks        │   │
│  │ firmware │ firmware │ ★ Save & Export   │   │
│  │ BSP      │ RTOS     │ 🌓 Dark/Light    │   │
│  │ RTOS     │ Auto     │                  │   │
│  └──────────┴──────────┴──────────────────┘   │
└─────────────────┬─────────────────────────────┘
                  │ HTTP/JSON
┌─────────────────▼─────────────────────────────┐
│            Express.js Server                    │
│  ┌──────────────────────────────────────────┐  │
│  │          Node-Cache (30min TTL)          │  │
│  └──────────────────────────────────────────┘  │
└─────┬──────────┬──────────┬───────────────────┘
      │          │          │
      ▼          ▼          ▼
  ┌─────────┐┌─────────┐┌──────────────────────┐
  │Smart-   ││Green-   ││ Direct Links          │
  │Recruit- ││house /  ││ (Workday, SAP, Oracle)│
  │ers API  ││Lever /  ││ Qualcomm, NVIDIA,     │
  │         ││Ashby    ││ Intel, Arm, TI, ...   │
  └─────────┘└─────────┘└──────────────────────┘
```

## 🎯 Job Categories Tracked

The tool covers all major embedded systems roles:

- **Firmware** — Bare-metal, RTOS, bootloaders, low-level
- **Platform Software** — BSP, Linux kernel, drivers, Yocto, Android BSP
- **Embedded Software** — C/C++, middleware, AUTOSAR
- **RTOS / Real-Time** — FreeRTOS, Zephyr, VxWorks, safety-critical
- **Automotive** — ECU, ADAS, infotainment, functional safety
- **Silicon / SoC** — Validation, bring-up, post-silicon debug
- **AI / Edge Computing** — Jetson, CUDA, NPU, ML deployment
- **Connectivity** — WiFi, BLE, 5G, Thread/Matter, IoT
- **Verification / Tools** — HIL, test automation, FPGA, CI/CD
- **Aerospace** — Flight software, avionics
- **Industrial** — Motor control, PLC, power electronics
- **Robotics** — Embedded control systems
- **Signal Processing** — DSP algorithms

## 💡 Improvement Ideas

- [ ] **Email alerts** — Get notified when new embedded jobs match your criteria
- [ ] **Resume matching** — Score how well your embedded experience matches each role
- [ ] **Keyword alerts** — Watch for specific technologies (e.g., "Zephyr", "STM32")
- [ ] **Company-specific filters** — Filter by MCU vendor (STM32, NXP, TI, ESP32)
- [ ] **Salary data** — Pull compensation ranges where available
- [ ] **Application tracker** — Track which jobs you've applied to
- [ ] **AI summaries** — Generate job description summaries with AI
- [ ] **Browser extension** — Quick access from any tab
- [ ] **Referral network** — Find employees at target companies for referrals

## 📝 License

MIT — Use freely, contribute welcome!

## 🤝 Contributing

1. Fork the repo
2. Add more embedded companies to `data/companies.js`
3. Improve the UI/UX
4. Submit a PR

---

**Built to save embedded systems engineers from opening 30+ browser tabs. Happy job hunting!** 🎯
