import Image from 'next/image';
export default function Banner() {
    return (
        <div className="relative w-full max-w-screen h-screen">
            {/* 使用 Image 组件作为背景 */}
            <Image
                src="/intro-bg.jpg"  // 替换为你的图片路径
                alt="Background"
                layout="fill"           // 使图片覆盖父容器
                objectFit="cover"       // 保持图片的比例填充整个容器
                quality={100}           // 设置图片的质量（可选）
            />

            {/* 毛玻璃效果层 */}
            {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-0"></div> */}

            {/* 内容 */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <h1 className="text-white text-7xl font-bold">
                    简历
                    <span className="text-amber-300">-任复衡</span>
                    <p className="text-lg font-thin text-center mt-2 tracking-normal">让技术为生活服务</p>
                </h1>
            </div>
        </div>
    )
}