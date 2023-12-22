import { CLI, Mobile, WEB } from "@/svgs";

export const canDo = [
    {
        svg: <CLI className='w-[300px] h-[300px] lg:block hidden -translate-y-28' />,
        title: "Command Line Interface Development",
        description: "Currently expanding my expertise into command-line app development using Rust. Actively engaged in hands-on projects to enhance proficiency in creating efficient and user-friendly command-line tools. Excited about the journey of mastering Rust for building powerful and versatile applications.",
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
