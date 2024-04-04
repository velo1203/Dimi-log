import Setting from "@/components/setting";
import fs from "fs";
import path from "path";
export default function SettingPage() {
    const filePath = path.join(process.cwd(), "config", "setting.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const settingConfig = JSON.parse(jsonData);

    return (
        <div>
            <Setting settingConfig={settingConfig}></Setting>
        </div>
    );
}
