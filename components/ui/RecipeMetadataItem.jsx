import { PantryIcon } from "@/components/ui/PantryIcon";

export function RecipeMetadataItem({ icon, label, children }) {
  return (
    <div className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-2">
      <dt className="col-span-2 flex items-center gap-2 text-text-secondary">
        <PantryIcon subject={icon} className="size-5" />
        <span>{label}</span>
      </dt>
      <dd className="col-start-2 mt-1 font-medium text-ink">{children}</dd>
    </div>
  );
}
