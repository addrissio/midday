import { Avatar, AvatarImage } from "@midday/ui/avatar";

export function TransactionBankAccount({ logoUrl, name }) {
  return (
    <div className="flex space-x-2 mt-1 items-center">
      <Avatar className="h-5 w-5">
        <AvatarImage src={logoUrl} alt={name} />
      </Avatar>
      <span className="text-sm">{name}</span>
    </div>
  );
}