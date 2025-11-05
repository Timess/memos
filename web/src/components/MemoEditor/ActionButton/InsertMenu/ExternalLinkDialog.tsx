import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { useTranslate } from "@/utils/i18n";
import { ExternalLinkState } from "./types";

interface ExternalLinkDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    state: ExternalLinkState;
    onPlaceholderChange: (value: string) => void;
    onCancel: () => void;
    onConfirm: () => void;
}

export const ExternalLinkDialog = ({
    open,
    onOpenChange,
    state,
    onPlaceholderChange,
    onCancel,
    onConfirm,
}: ExternalLinkDialogProps) => {
    const t = useTranslate();
    const { placeholder } = state;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>外部链接</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col">
                    <div className="w-full flex flex-col p-3 gap-3">
                        <div className="grid gap-3">
                            <Input
                                id="memo-externallink-placeholder"
                                placeholder=""
                                value={placeholder}
                                onChange={(e) => onPlaceholderChange(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex items-center justify-end gap-2">
                            <Button variant="ghost" onClick={onCancel}>
                                {t("common.close")}
                            </Button>
                            <Button onClick={onConfirm} disabled={placeholder.trim().length === 0}>
                                {t("common.confirm")}
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
