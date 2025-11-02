import { observer } from "mobx-react-lite";
import { cn } from "@/lib/utils";
import { workspaceStore } from "@/store";
import LocaleSelect from "./LocaleSelect";
import ThemeSelect from "./ThemeSelect";

interface Props {
  className?: string;
}

const AuthFooter = observer(({ className }: Props) => {
  return (
    <div className={cn("mt-4 flex flex-row items-center justify-center w-full gap-2", className)}>
      <LocaleSelect value={workspaceStore.state.locale} onChange={(locale) => workspaceStore.state.setPartial({ locale })} />
    </div>
  );
});

export default AuthFooter;
