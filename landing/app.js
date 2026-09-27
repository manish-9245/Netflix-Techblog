gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  ["netflix-blog", "Router", "Picks the right skills in the right order, then chains them."],
  ["netflix-topics", "Topics", "Finds what is worth writing, scored the Netflix way."],
  ["netflix-titles", "Titles", "Crafts titles that earn the click. Five options, one winner."],
  ["netflix-series", "Series", "Splits epics into Part 1, 2, 3 with recaps."],
  ["netflix-research", "Research", "Turns a topic into a claim-to-evidence table."],
  ["netflix-interview", "Interview", "Thirty minutes with an engineer becomes an outline."],
  ["netflix-data-story", "Data story", "Baseline, intervention, measured delta, chart."],
  ["netflix-code", "Code", "Minimal fragments that prove, cited by file and line."],
  ["netflix-hook", "Hook", "Openers in ten measured archetypes."],
  ["netflix-write", "Writer", "Drafts to section budgets, full or compact."],
  ["netflix-visuals", "Visuals", "Thirteen figure types with house recipes."],
  ["netflix-review", "Review", "Scores like an editor. 48 to pass."],
  ["netflix-factcheck", "Fact-check", "A verdict on every claim."]
];

const HOOKS = [
  ["Announcement", "17%", "Launches and open source"],
  ["Problem", "17%", "Pain the reader feels"],
  ["Definition", "6%", "Unknown systems, stated plainly"],
  ["Metric", "5%", "The biggest honest number first"],
  ["Question", "4%", "One curiosity gap"],
  ["Story", "2%", "Events and incidents"],
  ["Mission", "rare", "Company-level purpose"],
  ["Scenario", "rare", "Second-person tooling"],
  ["Tour", "rare", "Maps for sprawling topics"],
  ["Continuation", "rare", "Sequels and Part N"]
];

const DISPATCHES = [
  ["Platform teams", "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Duga-1_radar_data_center_inside_dark_corridor_2018.jpg/1920px-Duga-1_radar_data_center_inside_dark_corridor_2018.jpg", "Turn launch notes into launch stories. Announcements with architecture figures, deltas with charts, closers that hire. The suite drafts the whole thing from a design doc."],
  ["Open source maintainers", "https://upload.wikimedia.org/wikipedia/commons/b/b0/GNOME_system_monitor_2.24_%282008%2C_09%29_on_Fedora_10.png", "Release posts that get starred. Definition hooks, whiteboard reasoning, single-command payoffs, two-audience next steps."],
  ["Data science orgs", "https://upload.wikimedia.org/wikipedia/commons/2/29/Visitor_Analytics_Dashboard.jpg", "Experiment writeups people trust. Baselines with windows, deltas with teeth, honesty passes on limits. Vanity metrics do not survive review."],
  ["Startup founders", "https://upload.wikimedia.org/wikipedia/commons/4/42/HackTX_2012_Student_programmers_working.jpg", "Borrow Netflix gravity. Score topics against the taxonomy, frame small numbers honestly, publish with the density of ten thousand."]
];

const GRADER = [
  ["Structure", 6], ["Evidence", 6], ["Figures", 7], ["Title", 8],
  ["Hook", 8], ["Voice", 8], ["Ending", 9]
];

/* ticker */
const words = SKILLS.map(s => s[0]).join(" &nbsp;&nbsp;·&nbsp;&nbsp; ");
document.getElementById("ticker").innerHTML = "<span class='pr-8'>" + words + "</span><span class='pr-8'>" + words + "</span>";

/* grader bars */
document.getElementById("graderbars").innerHTML = GRADER.map(g =>
  "<div><div class='flex justify-between'><span>" + g[0] + "</span><span class='font-mono'>" + g[1] + "/10</span></div>" +
  "<div class='mt-1 h-2 bg-hairline rounded-full overflow-hidden'><div class='graderbar h-full bg-verdict rounded-full' style='width:0%' data-w='" + (g[1] * 10) + "'></div></div></div>"
).join("");

/* skill index */
document.getElementById("skillindex").innerHTML = SKILLS.map((s, i) =>
  "<li class='group flex gap-5 py-5 border-b border-hairline'>" +
  "<span class='font-mono font-bold text-folio w-8'>" + String(i + 1).padStart(2, "0") + "</span>" +
  "<div><p class='font-bold text-lg group-hover:text-verdict transition-colors'>" + "/" + s[0] + "</p>" +
  "<p class='text-folio font-medium'>" + s[2] + "</p></div></li>"
).join("");

/* hook table */
document.getElementById("hooktable").innerHTML = HOOKS.map(h =>
  "<tr class='border-b border-hairline'><td class='py-2.5 pr-4 font-bold'>" + h[0] + "</td>" +
  "<td class='py-2.5 pr-4 font-mono text-verdict font-bold whitespace-nowrap'>" + h[1] + "</td>" +
  "<td class='py-2.5 text-folio'>" + h[2] + "</td></tr>"
).join("");

/* dispatches */
document.getElementById("dispatches").innerHTML = DISPATCHES.map(d =>
  "<article class='group bg-stock border border-hairline rounded-2xl overflow-hidden'>" +
  "<div class='overflow-hidden'><img src='" + d[1] + "' alt='' loading='lazy' class='w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700 ease-out'/></div>" +
  "<div class='p-7'><h3 class='display font-extrabold text-2xl'>" + d[0] + "</h3>" +
  "<p class='mt-2 text-ink/70 font-medium'>" + d[2] + "</p></div></article>"
).join("");

/* blog teasers */
document.getElementById("blogteasers").innerHTML = BLOGS.map(b =>
  "<a href='blogs.html#" + b.id + "' class='group bg-stock border border-hairline rounded-2xl overflow-hidden hover:border-verdict transition-colors'>" +
  "<div class='overflow-hidden'><img src='" + b.img + "' alt='' loading='lazy' class='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out'/></div>" +
  "<div class='p-6'><p class='font-mono text-xs font-bold text-verdict uppercase tracking-widest'>" + b.tag + "</p>" +
  "<h3 class='display mt-2 text-xl font-extrabold leading-snug'>" + b.title + "</h3></div></a>"
).join("");

/* motion: one authored moment (the press roll) plus quiet reveals */
gsap.to(".press-roll", { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "expo.out" });
gsap.fromTo("#herorule", { scaleX: 0 }, { scaleX: 1, duration: 1, delay: .5, ease: "expo.out" });
gsap.to("#stamp", { opacity: 1, scale: 1, duration: .45, delay: 1.4, ease: "back.out(2)",
  scrollTrigger: { trigger: "#grader", start: "top 85%" } });
gsap.utils.toArray(".graderbar").forEach(bar => {
  gsap.to(bar, { width: bar.dataset.w + "%", duration: 1, ease: "expo.out",
    scrollTrigger: { trigger: bar, start: "top 90%" } });
});
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, { y: 36, opacity: 0, duration: .9, ease: "expo.out",
    scrollTrigger: { trigger: el, start: "top 88%" } });
});
