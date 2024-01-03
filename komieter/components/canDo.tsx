import { CLI, Mobile, WEB } from "@/svgs";

export const canDo = [
    {
        svg: <CLI className='w-[300px] h-[300px] lg:block hidden -translate-y-28' />,
        title: "Systems Programming",
        description: "Venturing into the realm of systems programming with a focus on developing efficient command-line applications using Rust. Actively involved in practical projects to deepen my understanding and skills in creating user-centric and performance-optimized command-line utilities. Eager to further explore and harness the power of Rust in building robust and versatile system applications.",
        translationStyle: "flex-row"
    },
    {
        svg: <WEB className='w-[300px] h-[300px] lg:block hidden -translate-y-28' />,
        title: "Web Development",
        description: "Experienced web developer with a focus on crafting engaging applications. Proficient in frontend tech like TypeScript, HTML, CSS, and React.js, and skilled in backend with Node.js and Express. Full-stack capabilities, emphasizing responsive design. Git expert with a solutions-oriented mindset, committed to continuous learning.",
        translationStyle: "flex-row-reverse justify-start"
    },
    {
        svg: <Mobile className='w-[300px] h-[300px] lg:block hidden -translate-y-28' />,
        title: "Mobile Development",
        description: "Passionate about mobile development with React Native. Currently working on an app that helps students to share their notes and study materials. Excited about the journey of mastering React Native for building powerful and versatile applications.",
        translationStyle: "flex-row"
    }
]
