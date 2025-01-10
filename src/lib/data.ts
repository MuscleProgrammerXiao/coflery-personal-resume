import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { BsCpuFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { PiWechatLogoLight } from "react-icons/pi";
import { RiQqLine } from "react-icons/ri";
import { MdOutlineAssistantPhoto } from "react-icons/md";
/* 导航栏 */
export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}
/* 联系方式 */
export const contactMe = [
    {
        "title": "Email",
        "value": "coflery@gmail.com",
        "icon": React.createElement(MdOutlineEmail),
    },
    {
        "title": "weChat",
        "value": "coflery",
        "icon": React.createElement(PiWechatLogoLight),
    },
    {
        "title": "QQ",
        "value": "562343040",
        "icon": React.createElement(RiQqLine),
    }
]
/* 个人经历 */
export const experiencesDataZn = [
    {
        "title": "项目经理",
        "location": "广东白云学院",
        "description": "领导嵌入式实时音频录音与处理系统，数字无线传输架子鼓，基于Linux的网关型无线音响系统，低功耗蓝牙台灯控制器项目。",
        icon: React.createElement(GrUserManager),
        "date": "2016年1月 - 2018年7月"
    },
    {
        "title": "实验室助理",
        "location": "广东省计量局",
        "description": `主要参与高精度GPS标准时钟系统联合调试，光流移动测速系统开发项目。`,
        "icon": React.createElement(MdOutlineAssistantPhoto),
        "date": "2016年9月 - 2017年5月"
    },
    {
        "title": "硬件工程师",
        "location": "深圳欧德声科技",
        "description": "参与蓝牙监控对讲机，骨传导耳机，EZDSP车载数字音频调音台，录音播放器项目设计。",
        "icon": React.createElement(BsCpuFill),
        "date": "2018年7月 - 2018年9月"
    },
    {
        "title": "软硬件工程师",
        "location": "广东视显光电",
        "description": "主要负责显示屏调试上位机和硬件工具的开发和调试工作，以及物料仓储管理软件的数据库和服务端开发工作，参与了4k信号发生器项目软件开发。",
        "icon": React.createElement(FaLaptopCode),
        "date": "2018年10月 - 2021年5月"
    }
]