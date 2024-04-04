import Setting from "@/components/setting";
import settingConfig from "@/config/setting.json";
export default function SettingPage() {
    return (
        <div>
            <Setting settingConfig={settingConfig}></Setting>
        </div>
    );
}
