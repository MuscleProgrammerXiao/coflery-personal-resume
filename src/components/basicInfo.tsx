
import { headerLanguageMap } from "@/lib/data"
import SectionHeading from "./sectionHeading"
import { AiFillQqCircle } from "react-icons/ai";
import { FaSquareShareNodes } from "react-icons/fa6";
import { contactMe } from "@/lib/data";
export default function BasicInfo() {
    return (
        <div className="py-14 bg-stone-200">
            <div className="max-w-[780px] mx-auto flex flex-col min-h-5 text-zinc-600 px-6 sm:px-4">
                <SectionHeading>
                    {headerLanguageMap["About"]}
                </SectionHeading>
                <div className="flex">
                    {
                        contactMe.map((item) => (
                            <div key={item.title}>
                                <span>{item.icon}</span>
                                <span>{item.value}</span>
                            </div>
                        ))
                    }
                </div>
                <p className="leading-7">
                    你好，我叫任复衡，英文名Frand，今年27岁，来自四川。
                </p>
                <p className="mt-3 leading-7">
                    大学期间我主修电子信息工程，并顺利毕业于广东白云学院，取得了本科学位。我的专业培养了我在电子信息领域的扎实理论知识和实际操作能力，让我对技术研发和工程实践充满了热情。
                </p>
                <p className="mt-3 leading-7">
                    我一直热爱探索新技术，喜欢挑战复杂的问题，不断追求自我提升。我相信，技术应该为生活服务，通过创新和实践解决实际问题。我期待在电子信息领域找到更多的机会，实现自己的职业理想，推动技术进步的同时也为社会贡献自己的力量。
                </p>
            </div>
        </div>
    )
}