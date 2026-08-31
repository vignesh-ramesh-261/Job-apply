/**
 * Demo data generator — provides realistic EMBEDDED SYSTEMS job listings
 * when external APIs are unreachable (sandbox, local dev without internet).
 *
 * Set DEMO_MODE=true to force demo data, or it auto-activates when
 * external fetches fail.
 */

const companies = require('./companies');

// ─── EMBEDDED SYSTEMS JOB TEMPLATES ─────────────────────────────
const jobTemplates = {
  firmware: [
    { title: "Senior Firmware Engineer", dept: "Firmware" },
    { title: "Firmware Development Engineer", dept: "Firmware" },
    { title: "Embedded Firmware Engineer", dept: "Firmware" },
    { title: "Staff Firmware Engineer", dept: "Firmware" },
    { title: "Principal Firmware Engineer", dept: "Firmware" },
    { title: "Bare-Metal Firmware Engineer", dept: "Firmware" },
    { title: "RTOS Firmware Developer", dept: "Firmware" },
    { title: "Low-Level Firmware Engineer", dept: "Firmware" },
    { title: "Bootloader / BROM Engineer", dept: "Firmware" },
    { title: "Security Firmware Engineer", dept: "Firmware" },
  ],
  bsp_drivers: [
    { title: "BSP Engineer", dept: "Platform Software" },
    { title: "Senior BSP / Device Driver Engineer", dept: "Platform Software" },
    { title: "Linux Kernel Developer", dept: "Platform Software" },
    { title: "Senior Linux Kernel Engineer", dept: "Platform Software" },
    { title: "Embedded Linux Developer", dept: "Platform Software" },
    { title: "Device Driver Engineer", dept: "Platform Software" },
    { title: "Linux Device Driver Developer", dept: "Platform Software" },
    { title: "Yocto / Buildroot Engineer", dept: "Platform Software" },
    { title: "Android BSP Engineer", dept: "Platform Software" },
    { title: "U-Boot / Bootloader Engineer", dept: "Platform Software" },
  ],
  embedded_sw: [
    { title: "Senior Embedded Software Engineer", dept: "Embedded Software" },
    { title: "Staff Embedded Software Engineer", dept: "Embedded Software" },
    { title: "Embedded C/C++ Developer", dept: "Embedded Software" },
    { title: "Embedded Systems Software Engineer", dept: "Embedded Software" },
    { title: "Real-Time Systems Engineer", dept: "Embedded Software" },
    { title: "Embedded C Developer — Automotive", dept: "Embedded Software" },
    { title: "AUTOSAR Software Engineer", dept: "Embedded Software" },
    { title: "Embedded Software Lead", dept: "Embedded Software" },
    { title: "Platform Software Engineer", dept: "Embedded Software" },
    { title: "Middleware Developer — Embedded", dept: "Embedded Software" },
  ],
  rtos: [
    { title: "RTOS Software Engineer", dept: "RTOS / Real-Time" },
    { title: "FreeRTOS / Zephyr Developer", dept: "RTOS / Real-Time" },
    { title: "Real-Time Operating System Engineer", dept: "RTOS / Real-Time" },
    { title: "RTOS Kernel Developer", dept: "RTOS / Real-Time" },
    { title: "Embedded OS Engineer", dept: "RTOS / Real-Time" },
    { title: "Safety-Critical Software Engineer", dept: "RTOS / Real-Time" },
    { title: "RTOS Porting Engineer", dept: "RTOS / Real-Time" },
  ],
  automotive: [
    { title: "Automotive Embedded Engineer", dept: "Automotive" },
    { title: "ADAS Embedded Software Engineer", dept: "Automotive" },
    { title: "ECU Software Developer", dept: "Automotive" },
    { title: "AUTOSAR Developer", dept: "Automotive" },
    { title: "Automotive Functional Safety Engineer", dept: "Automotive" },
    { title: "Infotainment Software Engineer", dept: "Automotive" },
    { title: "Vehicle Firmware Engineer", dept: "Automotive" },
    { title: "Autonomous Driving — Embedded Systems", dept: "Automotive" },
  ],
  silicon_soc: [
    { title: "SoC Software Engineer", dept: "Silicon / SoC" },
    { title: "SoC Validation Engineer", dept: "Silicon / SoC" },
    { title: "Silicon Validation Engineer", dept: "Silicon / SoC" },
    { title: "Post-Silicon Debug Engineer", dept: "Silicon / SoC" },
    { title: "Hardware-Software Co-Design Engineer", dept: "Silicon / SoC" },
    { title: "SoC Firmware Architect", dept: "Silicon / SoC" },
    { title: "Hardware bring-up Engineer", dept: "Silicon / SoC" },
    { title: "ASIC Verification — Software", dept: "Silicon / SoC" },
  ],
  ai_ml_edge: [
    { title: "Embedded AI Engineer", dept: "AI / Edge Computing" },
    { title: "Edge ML Engineer", dept: "AI / Edge Computing" },
    { title: "Machine Learning — Embedded Deployment", dept: "AI / Edge Computing" },
    { title: "CUDA / GPU Kernel Engineer", dept: "AI / Edge Computing" },
    { title: "AI Accelerator Software Engineer", dept: "AI / Edge Computing" },
    { title: "NPU / Neural Processing Engineer", dept: "AI / Edge Computing" },
    { title: "Computer Vision — Embedded", dept: "AI / Edge Computing" },
  ],
  connectivity: [
    { title: "Wireless Firmware Engineer", dept: "Connectivity" },
    { title: "Bluetooth / BLE Firmware Engineer", dept: "Connectivity" },
    { title: "WiFi Driver Developer", dept: "Connectivity" },
    { title: "5G / Modem Software Engineer", dept: "Connectivity" },
    { title: "Protocol Stack Engineer — Embedded", dept: "Connectivity" },
    { title: "IoT Firmware Engineer", dept: "Connectivity" },
    { title: "Thread / Matter Protocol Engineer", dept: "Connectivity" },
    { title: "RF Firmware Developer", dept: "Connectivity" },
  ],
  verification_tools: [
    { title: "Embedded Software Verification Engineer", dept: "Verification / Tools" },
    { title: "Hardware-in-the-Loop Test Engineer", dept: "Verification / Tools" },
    { title: "Embedded Test Automation Engineer", dept: "Verification / Tools" },
    { title: "CI/CD Engineer — Embedded", dept: "Verification / Tools" },
    { title: "Embedded Tools Developer", dept: "Verification / Tools" },
    { title: "FPGA Software Engineer", dept: "Verification / Tools" },
    { title: "Simulation / Emulation Engineer", dept: "Verification / Tools" },
  ],
  other: [
    { title: "Flight Software Engineer", dept: "Aerospace" },
    { title: "Avionics Software Engineer", dept: "Aerospace" },
    { title: "Power Electronics Firmware Engineer", dept: "Power Electronics" },
    { title: "Motor Control Firmware Engineer", dept: "Industrial" },
    { title: "Industrial IoT Engineer", dept: "Industrial" },
    { title: "Embedded Security Engineer", dept: "Security" },
    { title: "DSP Algorithm Engineer", dept: "Signal Processing" },
    { title: "Sensor Firmware Engineer", dept: "Sensors" },
    { title: "Robotics Software Engineer — Embedded", dept: "Robotics" },
    { title: "Medical Device Firmware Engineer", dept: "Medical" },
  ]
};

const locations = [
  // India (user's region)
  "Bangalore, India",
  "Hyderabad, India",
  "Pune, India",
  "Chennai, India",
  "Noida, India",
  // US
  "San Diego, CA",
  "San Jose, CA",
  "Santa Clara, CA",
  "Austin, TX",
  "Seattle, WA",
  "Portland, OR",
  "Boston, MA",
  "Raleigh, NC",
  "Irvine, CA",
  "Sunnyvale, CA",
  "Boulder, CO",
  "Fremont, CA",
  // Europe
  "Cambridge, UK",
  "Munich, Germany",
  "Eindhoven, Netherlands",
  "Malmö, Sweden",
  "Grenoble, France",
  "Dublin, Ireland",
  "Trondheim, Norway",
  "Tel Aviv, Israel",
  // APAC
  "Taipei, Taiwan",
  "Shanghai, China",
  "Singapore",
  "Tokyo, Japan",
  "Seoul, South Korea",
  // Remote
  "Remote",
  "Remote (US)",
  "Remote (India)",
];

function randomDate(daysBack) {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysBack));
  return date.toISOString();
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generate realistic embedded systems demo jobs for all companies
 */
function generateDemoJobs() {
  const allJobs = [];
  const categories = Object.keys(jobTemplates);

  for (const company of companies) {
    // Each company gets 5-15 embedded-specific jobs
    const numJobs = 5 + Math.floor(Math.random() * 11);
    const usedTitles = new Set();

    for (let i = 0; i < numJobs; i++) {
      const category = pickRandom(categories);
      const template = pickRandom(jobTemplates[category]);

      // Avoid exact duplicates within a company
      let title = template.title;
      let attempts = 0;
      while (usedTitles.has(title) && attempts < 10) {
        const t = pickRandom(jobTemplates[pickRandom(categories)]);
        title = t.title;
        attempts++;
      }
      usedTitles.add(title);

      const location = pickRandom(locations);
      const postedAt = randomDate(60);

      // Build a realistic application URL
      const jobId = Math.random().toString(36).substring(2, 10);
      let url = company.careerUrl;

      // Make URLs more realistic for known ATS platforms
      if (company.ats === 'smartrecruiters') {
        url = `https://careers.smartrecruiters.com/${company.slug}/${jobId}`;
      } else if (company.name === "Intel") {
        url = `https://intel.wd1.myworkdayjobs.com/en-US/External/job/${jobId}`;
      } else if (company.name === "NVIDIA") {
        url = `https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternal/job/${jobId}`;
      } else if (company.name === "Qualcomm") {
        url = `https://careers.qualcomm.com/careers/jobs/${jobId}`;
      } else if (company.name === "Arm") {
        url = `https://careers.arm.com/job/${jobId}`;
      } else if (company.name === "Texas Instruments") {
        url = `https://careers.ti.com/job/${jobId}`;
      } else if (company.name === "Honeywell") {
        url = `https://careers.honeywell.com/job/${jobId}`;
      } else if (company.name === "Synopsys") {
        url = `https://careers.synopsys.com/job/${jobId}`;
      } else if (company.name === "Siemens") {
        url = `https://jobs.siemens.com/careers/job/${jobId}`;
      } else if (company.name === "SpaceX") {
        url = `https://www.spacex.com/careers/jobs/${jobId}`;
      } else if (company.name === "Tesla") {
        url = `https://www.tesla.com/careers/search/job/${jobId}`;
      } else if (company.name === "AMD") {
        url = `https://careers.amd.com/careers-home/jobs/${jobId}`;
      } else if (company.name === "Broadcom") {
        url = `https://careers.broadcom.com/jobs/${jobId}`;
      }

      allJobs.push({
        title,
        location,
        department: template.dept,
        url,
        company: company.name,
        logo: company.logo,
        careerUrl: company.careerUrl,
        focus: company.focus,
        postedAt,
        description: '',
        experience: (() => {
          const t = title.toLowerCase();
          if (/\b(intern|trainee)\b/.test(t)) return 'Intern';
          if (/\b(entry|junior|jr\.?)\b/.test(t)) return 'Fresher';
          if (/\b(principal|director|head of|lead|staff)\b/.test(t)) return 'Lead/Staff';
          if (/\b(senior|sr\.?)\b/.test(t)) return 'Senior';
          return 'Mid-Level';
        })(),
        _demo: true
      });
    }
  }

  return shuffleArray(allJobs);
}

module.exports = { generateDemoJobs };
